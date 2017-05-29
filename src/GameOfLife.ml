open Types
let applyRules = Rules.applyRules

let (<<) f g x = f (g x)

let isNeighbour ( x1, y1 ) ( x2, y2 ) =
    (abs (x1 - x2) <= 1)
        && (abs (y1 - y2) <= 1)
        && (( x1, y1 ) != ( x2, y2 ))


let findNeighbours universe position =
    universe
        |> List.filter ((isNeighbour position) << fst)
        |> List.map snd


let evolveCell universe ( position, cell ) =
    let neighbours = findNeighbours universe position in
    let evolvedCell = applyRules cell neighbours in
    ( position, evolvedCell )


let findMaybeCell universe ( x, y ) =
    let inBounds ( ( x_, y_ ), _ ) = x_ == x && y_ == y in
    universe
        |> List.filter inBounds
        |> Lst.head


let findCell universe position =
    match findMaybeCell universe position with
        | None -> ( position, Dead )
        | Some ( _, cell ) -> ( position, cell )

module PosSet = Set.Make(
    struct
        let compare = Pervasives.compare
        type t = int * int
    end )

let dedupe universe =
    let positions = List.map fst universe in
    let dedupedPositions =
            positions
                |> PosSet.of_list
                |> PosSet.elements
    in
        List.map (findCell universe) dedupedPositions


let evolve universe =
    let
        otherPositions ( x, y ) =
            [ ( x - 1, y - 1 ) ; ( x, y - 1 ) ; ( x + 1, y - 1 ) ;
              ( x - 1, y ) ;                    ( x + 1, y ) ;
              ( x - 1, y + 1 ) ; ( x, y + 1 ) ; ( x + 1, y + 1 ) ]
    in
    let
        cells position =
            List.map (findCell universe) (otherPositions position)
    in
    let
        currentUniverse =
            universe
                |> List.map fst
                |> List.map cells
                |> List.concat
                |> dedupe
    in
        currentUniverse
            |> List.map (evolveCell universe)
            |> List.filter ((==) Alive << snd)