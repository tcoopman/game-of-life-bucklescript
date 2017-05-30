type t = { 
    mutable renderer: Pixi.Renderer.t option;
    mutable stage: Pixi.Container.t option;
    mutable maybeShip: Pixi.Sprite.t option
}

let putSprite stage position = function
  | Some s ->
    Pixi.Container.addChild stage (Sprite s);
    Pixi.Sprite.updatePosition s position |> ignore;
  | None ->
    print_endline "No valid sprite loaded"

let setup t () = 
  let open Pixi in
  let opts = [%bs.obj {antialias = true; transparent = false}] in
  let renderer = Renderer.autoDetectRenderer 800 600 opts in
  let stage = Container.create() in
  let maybePack = Resources.create "space/space.json" in
  let maybeBackground = maybePack |> Option.andThen (Resources.texture "background.png") |> Option.map Sprite.create in
  let maybeShip = maybePack |> Option.andThen (Resources.texture "spaceship.png") |> Option.map Sprite.create in
  MyDom.appendChild MyDom.body renderer##view;
  putSprite stage (0, 0) maybeBackground;
  renderer##render stage;
  t.renderer <- Some renderer;
  t.stage <- Some stage;
  t.maybeShip <- maybeShip;
  ()

let init = 
    let model = {renderer = None; stage = None; maybeShip = None} in
    Pixi.Loader.init
    |> Pixi.Loader.add [|"space/space.json"|]
    |> Pixi.Loader.onProgress (fun p -> (print_endline (string_of_float p)))
    |> Pixi.Loader.load (setup model)
    |> ignore;
    model

let render t universe =
    print_endline "rendering";
    ()