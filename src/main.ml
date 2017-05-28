open Tea
open MyDom

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

module Option : sig 
  val map : ('a -> 'b) -> 'a option -> 'b option
end = struct
  let map f a =
    match a with
      | Some x -> Some (f x)
      | None -> None
end

let putSprite stage position = function
  | Some s ->
    Pixi.Container.addChild stage (Sprite s);
    Pixi.Sprite.updatePosition s position |> ignore;
  | None ->
    print_endline "No valid sprite loaded"
  

let foo loader () = 
  let open Pixi in
  let opts = [%bs.obj {antialias = true; transparent = false}] in
  let renderer = Renderer.autoDetectRenderer 800 600 opts in
  let stage = Container.create() in
  let graphics = Graphics.create() in
  let s = Style.style renderer##view in
  let pack = Loader.resources loader "space/space.json" in
  let background = pack
    |> Loader.textures "background.png"
    |> Option.map Sprite.create in
  let ship = pack
    |> Loader.textures "spaceship.png"
    |> Option.map Sprite.create in
  s##setProperty "border" "1px blue solid";
  border renderer##view "5px red solid";
  appendChild body renderer##view;
  Container.addChild stage (Graphics graphics);
  drawCircle graphics 300. 300. 60.;
  startAnimation graphics renderer stage;
  putSprite stage (0, 0) background;
  putSprite stage (200, 100) ship;
  renderer##render stage

let myMain () =
  let loader = Pixi.Loader.create in
  loader##add [|"space/space.json"|] |> Pixi.Loader.on (`progress (fun (lp) -> (print_endline (Pixi.Loader.LoaderProcess.progress lp |> string_of_float ))));
  loader##load (foo loader)

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
