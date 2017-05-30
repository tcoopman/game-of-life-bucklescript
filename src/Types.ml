
type viewPort =
    { xMin : int ;
      yMin : int ;
      xMax : int ;
      yMax : int ;
      cellSize : int
    }
let newViewPort a b c d e = { xMin= a; yMin= b; xMax= c; yMax= d; cellSize= e}

type model =
    { universe : GameTypes.universe ;
      examples : (string * GameTypes.universe) list ;
      viewPort : viewPort ;
      running : bool ;
      pixi : MyPixiRenderer.t ;
    }

type msg
    = NoOp
    | Evolve
    | UpdateUniverse of string
    | ToggleRunning
    | ZoomOut
    | ZoomIn
    | Left
    | Right
    | Down
    | Up