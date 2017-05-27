open Tea

type element

external body: element = "document.body" [@@bs.val]
external appendChild : element -> element -> unit = "appendChild" [@@bs.send]
external createTextNode : string -> element = "document.createTextNode" [@@bs.val]
external requestAnimationFrame :
  (unit -> unit) -> unit = "requestAnimationFrame" [@@bs.val]
external sin : float -> float = "Math.sin" [@@bs.val]
external cos : float -> float = "Math.cos" [@@bs.val]

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


let drawCircle graphics x y r =
  graphics##lineStyle 0;
  graphics##beginFill 0xFFFF0B 0.5;
  graphics##drawCircle x y r;
  graphics##endFill ()

let startAnimation graphics renderer stage =
  let centerX = 300. in
  let centerY = 300. in
  let bigR = 200. in
  let littleR = 60. in
  let deltaT = 0.05 in
  let rec animate t () =
    let x = (bigR *. (sin t)) +. centerX in
    let y = bigR *. (cos t) +. centerY in
    graphics##clear ();
    drawCircle graphics x y littleR;
    renderer##render stage;
    requestAnimationFrame (animate (t +. deltaT))
  in requestAnimationFrame (animate 0.0)

let foo () = 
  let opts = [%bs.obj {antialias = true; transparent = false}] in
  let renderer = Renderer.autoDetectRenderer 800 600 opts in
  let stage = Container.create() in
  let graphics = Graphics.create() in
  appendChild body renderer##view;
  stage##addChild graphics;
  drawCircle graphics 300. 300. 60.;
  renderer##render stage;
  startAnimation graphics renderer stage


type msg =
  | NothingYet
  | SomethingElse
  [@@bs.deriving {accessors}]

type model = {
  notUsedYet : int;
}

let init () =
  let model ={
    notUsedYet = 42;
  } in
  (model, Cmd.none)

let update model = function
  | NothingYet -> (model, Cmd.none)
  | SomethingElse -> (model, Cmd.none)

let subscriptions _model =
  Sub.none

let view model =
  let open Html in
  div
    []
    [ text (string_of_int model.notUsedYet)
    ]

let main =
  App.standardProgram {
    init;
    update;
    view;
    subscriptions;
  }
