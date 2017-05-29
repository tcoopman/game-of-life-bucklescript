open Types
open Tea.Html
let findCell = GameOfLife.findCell

let sort positions =
    let
        sorter ( ( x1, y1 ), _ ) ( ( x2, y2 ), _ ) =
            if (x1 == x2) then
                compare y1 y2
            else
                compare x1 x2
    in
        List.sort sorter positions


let selectRow universe viewPort =
    let newTuple x y = (x, y) in
    Lst.range viewPort.xMin viewPort.xMax
        |> List.map (newTuple viewPort.yMin)
        |> List.map (findCell universe)

let viewCell size ( ( x, y ), cell ) =
    let stringCell cell = match cell with 
        | Alive -> "alive"
        | Dead -> "dead"
    in
        div [] [ text ((string_of_int x) ^ "," ^ (string_of_int y) ^ (stringCell cell)) ]

let viewRow universe viewPort =
    let row = selectRow universe viewPort in
    let cellSize = viewPort.cellSize in
    div []
        (List.map (viewCell cellSize) row)

let playButton label =
    div
        [ onClick () ]
        [ text label ]

let viewUniverse viewPort universe =
    let rowsRange = Lst.range viewPort.yMin viewPort.yMax in
    let rowViewPort row = newViewPort viewPort.xMin row viewPort.xMax row viewPort.cellSize in
    let rowsViewPort = List.map rowViewPort rowsRange in
    let rowsHtml = List.map (viewRow universe) rowsViewPort in
    div [] rowsHtml


let view model =
    let playLabel = if model.running then "Pause" else "Play" in
    let selectOption ( name, _ ) = option' [] [ text name ] in
        div
            []
            [ viewUniverse model.viewPort model.universe ; 
            ]
            (*[ map (fun _ -> ToggleRunning) (playButton playLabel)
            , map (fun _ -> ZoomOut) (playButton "Zoom out")
            , map (fun _ -> ZoomIn) (playButton "Zoom in")
            (*, select [ on "change" (Json.map UpdateUniverse targetValue) ]
                (List.map selectOption model.examples)*)
            (*, map (fun _ -> Up) Triangle.up*)
            , div
                []
                (*[ map (fun _ -> Left) Triangle.left*)
                , viewUniverse model.viewPort model.universe
                (*, map (fun _ -> Right) Triangle.right*)
                ]
            (*, map (fun _ -> Down) Triangle.down*)
            ]*)



let cellSize cell size =
    let cellSize = (string_of_int size) ^ "px" in
    []