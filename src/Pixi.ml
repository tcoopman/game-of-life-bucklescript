open MyDom

type texture

type position = int * int

module Sprite = struct
  class type _t = object end [@bs]
  type t = _t Js.t

  external setPosition : t -> int -> int -> unit = "set" [@@bs.send] [@@bs.scope "position"]

  let updatePosition : t -> position -> t =
    fun sprite (x', y') ->
      setPosition sprite x' y';
      sprite

  external create : texture -> t = "PIXI.Sprite" [@@bs.new]
  external createTiling : texture -> int -> int -> t = "PIXI.TilingSprite" [@@bs.new]
end

module Graphics = struct
  class type _t = object
    method lineStyle: int -> unit
    method beginFill: int -> float -> unit
    method drawCircle: float -> float -> float -> unit
    method endFill: unit -> unit
    method clear: unit -> unit
  end [@bs]

  type t = _t Js.t

  external create : unit -> t = "PIXI.Graphics" [@@bs.new]
end


module Container : sig
  type t
  type child = Graphics of Graphics.t | Sprite of Sprite.t | Container of t

  val addChild : t -> child -> unit
  val create : unit -> t
  val clear : t -> t
end = struct
  type t
  type child = Graphics of Graphics.t | Sprite of Sprite.t | Container of t

  external addChild' : t -> 'a -> unit = "addChild" [@@bs.send]

  let addChild container child =
    match child with
    | Graphics g -> addChild' container g
    | Sprite s -> addChild' container s
    | Container t -> addChild' container t

  external create : unit -> t = "PIXI.Container" [@@bs.new]
  
  external removeChildren : t -> unit = "removeChildren" [@@bs.send]
  let clear container =
    removeChildren container;
    container;
end

module Renderer = struct
  class type _t = object
    method view: element
    method render: Container.t -> unit
  end [@bs]

  type t = _t Js.t

  type options = < antialias: bool; transparent: bool > Js.t

  external autoDetectRenderer :
    int -> int -> options -> t = "PIXI.autoDetectRenderer" [@@bs.val]
end

module Resources : sig
  type t  

  val create : string -> t option
  val texture : string -> t -> texture option
end = struct 
  type t

  type _t

  external get_t : _t = "PIXI.loader.resources" [@@bs.val]

  external resources' : _t -> string -> t option = "" [@@bs.get_index] [@@bs.return null_undefined_to_opt]
  external texture': t -> string -> texture option = "" [@@bs.get_index] [@@bs.scope "textures"] [@@bs.return null_undefined_to_opt]

  let create resource =
    let _t = get_t in
    resources' _t resource

  let texture name t = texture' t name
end

module Loader : sig
  type t
  val init : t
  val add : string array -> t -> t
  val onProgress : (float -> unit) -> t -> t
  val load : (unit -> unit) -> t -> t
end = struct
  type t

  external add' : t -> string array -> unit = "add" [@@bs.send]
  external load' : t -> (unit -> unit) -> unit = "load" [@@bs.send]

  external init : t = "PIXI.loader" [@@bs.val]

  let add items loader =
    add' loader items;
    loader

  let load cb loader =
    load' loader cb;
    loader

  type lp
  external progress' : lp -> float = "progress" [@@bs.get]
  external on : ([`progress of lp -> unit] [@bs.string]) -> t = "" [@@bs.send.pipe: t]

  let onProgress cb loader =
    loader |> on (`progress (fun p -> cb (progress' p))) |> ignore;
    loader
end