open Dom

type texture

module Sprite = struct
  class type _t = object

  end [@bs]

  type t = _t Js.t
  external create : texture -> t = "PIXI.Sprite" [@@bs.new]
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

type child = Graphics of Graphics.t | Sprite of Sprite.t

module Container = struct
  class type _t = object
  end [@bs]

  type t = _t Js.t

  external addChild : t -> 'a -> unit = "addChild" [@@bs.send]

  let addChild container child =
    match child with
    | Graphics g -> addChild container g
    | Sprite s -> addChild container s

  external create : unit -> t = "PIXI.Container" [@@bs.new]
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


(*module TextureCache = struct
  class type _t = object

  end [@bs]

  type t = _t Js.t

  external create : string -> t = "PIXI.utils.TextureCache"
end*)



module Loader = struct
  class type _t = object
    method add: string -> _t
    method load: (unit -> unit) -> unit
    method resources: string -> texture
  end [@bs]

  type t = _t Js.t
  type loader

  external resources : t -> string -> loader = "" [@@bs.get_index] [@@bs.scope "resources"]
  external texture : loader -> texture = "texture" [@@bs.get]

  external create : t = "PIXI.loader" [@@bs.val]
end