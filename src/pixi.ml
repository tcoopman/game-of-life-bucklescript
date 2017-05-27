open Dom

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

module Container = struct
  class type _t = object
    method addChild: Graphics.t -> unit
  end [@bs]

  type t = _t Js.t

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