open Tea
open Types

external sin : float -> float = "Math.sin" [@@bs.val]
external cos : float -> float = "Math.cos" [@@bs.val]

(*let drawCircle graphics x y r =
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


let putSprite stage position = function
  | Some s ->
    Pixi.Container.addChild stage (Sprite s);
    Pixi.Sprite.updatePosition s position |> ignore;
  | None ->
    print_endline "No valid sprite loaded"
  

let setup () = 
  let open Pixi in
  let opts = [%bs.obj {antialias = true; transparent = false}] in
  let renderer = Renderer.autoDetectRenderer 800 600 opts in
  let stage = Container.create() in
  let graphics = Graphics.create() in
  let s = Style.style renderer##view in
  let maybePack = Resources.create "space/space.json" in
  let maybeBackground = maybePack |> Option.andThen (Resources.texture "background.png") |> Option.map Sprite.create in
  let maybeShip = maybePack |> Option.andThen (Resources.texture "spaceship.png") |> Option.map Sprite.create in
  s##setProperty "border" "1px blue solid";
  border renderer##view "5px red solid";
  appendChild body renderer##view;
  Container.addChild stage (Graphics graphics);
  drawCircle graphics 300. 300. 60.;
  startAnimation graphics renderer stage;
  putSprite stage (0, 0) maybeBackground;
  putSprite stage (200, 100) maybeShip;
  renderer##render stage

let myMain () =
  Pixi.Loader.init
  |> Pixi.Loader.add [|"space/space.json"|]
  |> Pixi.Loader.onProgress (fun p -> (print_endline (string_of_float p)))
  |> Pixi.Loader.load setup*)


let init universe =
    { universe = universe ;
      examples = Examples.all ;
      viewPort = newViewPort 0 0 10 10 35 ;
      running = true;
      pixi = MyPixiRenderer.init ;
    }

let subscriptions model =
  if model.running then
    Tea.Time.every (200. *. Tea.Time.millisecond) (fun _ -> Evolve)
  else Sub.none

let main = 
   App.standardProgram {
    init = (fun () -> (init Examples.blinker, Tea.Cmd.none)) ;
    update = Start.update ;
    view = View.view;
    subscriptions;
  }
