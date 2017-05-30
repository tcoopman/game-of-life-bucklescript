type cell = 
    | Alive
    | Dead


type neighbours = cell list

type lifeCycle =
    | Dies
    | Revives
    | Same


type position = int * int

type positionedCell = position * cell

type universe = positionedCell list

type viewPort =
    { xMin : int ;
      yMin : int ;
      xMax : int ;
      yMax : int ;
      cellSize : int
    }
let newViewPort a b c d e = { xMin= a; yMin= b; xMax= c; yMax= d; cellSize= e}


type model =
    { universe : universe ;
      examples : (string * universe) list ;
      viewPort : viewPort ;
      running : bool ;
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