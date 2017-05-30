type t = { 
    mutable renderer: Pixi.Renderer.t option;
    mutable textureLife : Pixi.texture option ;
    mutable rootStage: Pixi.Container.t option;
    mutable spriteStage: Pixi.Container.t option;
}

let putSprite stage position sprite = 
    Pixi.Container.addChild stage (Sprite sprite);
    Pixi.Sprite.updatePosition sprite position |> ignore

let backgroundStage maybePack =
    let backgroundStage = Pixi.Container.create() in
    let maybeBackground = maybePack 
        |> Option.andThen (Pixi.Resources.texture "background.png") 
        |> Option.map (fun t -> Pixi.Sprite.createTiling t 800 600) in
    (match maybeBackground with
        | Some b -> 
            putSprite backgroundStage (0, 0) b
        | None -> print_endline "No background found"
    );
    backgroundStage


let setup t () = 
  let open Pixi in
  let opts = [%bs.obj {antialias = true; transparent = false}] in
  let renderer = Renderer.autoDetectRenderer 800 600 opts in
  let rootStage = Container.create() in
  let spriteStage = Pixi.Container.create() in
  let maybePack = Resources.create "space/space.json" in
  let textureLife = maybePack |> Option.andThen (Resources.texture "spaceship.png") in 
  let rootElem = MyDom.elementById MyDom.document "root" in
  MyDom.appendChild rootElem renderer##view;
  Pixi.Container.addChild rootStage (Container (backgroundStage maybePack));
  Pixi.Container.addChild rootStage (Container spriteStage);
  renderer##render rootStage;
  t.renderer <- Some renderer;
  t.rootStage <- Some rootStage;
  t.spriteStage <- Some spriteStage;
  t.textureLife <- textureLife;
  ()

let init = 
    let model = {renderer = None; rootStage = None; spriteStage = None; textureLife = None } in
    Pixi.Loader.init
    |> Pixi.Loader.add [|"space/space.json"|]
    |> Pixi.Loader.onProgress (fun p -> (print_endline (string_of_float p)))
    |> Pixi.Loader.load (setup model)
    |> ignore;
    model

let renderLife stage cellSize texture universe =
    let sprite texture' = 
        Pixi.Sprite.create texture' in
    let renderPositionedCell ((x, y), _) = 
        putSprite stage ( x * cellSize, y * cellSize) (sprite texture) in
    List.map renderPositionedCell universe |> ignore
        
let render t cellSize universe =
    match (t.rootStage, t.spriteStage, t.textureLife, t.renderer) with
        | (Some rootStage, Some spriteStage, Some life, Some renderer) -> 
            Pixi.Container.clear spriteStage |> ignore;
            renderLife spriteStage cellSize life universe;
            renderer##render rootStage
        | _ ->
            print_endline "Nothing to render yet?"