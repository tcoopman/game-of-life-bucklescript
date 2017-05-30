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