open Tea
open Pixi
open Dom

external sin : float -> float = "Math.sin" [@@bs.val]
external cos : float -> float = "Math.cos" [@@bs.val]

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
  let s = Style.style renderer##view in
  s##setProperty "border" "1px blue solid";
  border renderer##view "5px red solid";
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
