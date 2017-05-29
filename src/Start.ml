open Types
let evolve = GameOfLife.evolve

let update model msg =
    let xMin = model.viewPort.xMin in
    let yMin = model.viewPort.yMin in
    let xMax = model.viewPort.xMax in
    let yMax = model.viewPort.yMax in
    let cellSize = model.viewPort.cellSize in
    let newModel =
            match msg with
                | NoOp -> model

                | ToggleRunning ->
                    { model with running = not model.running }

                | Up ->
                    { model with viewPort = newViewPort xMin (yMin - 1) xMax (yMax - 1) cellSize }

                | Down ->
                    { model with viewPort = newViewPort xMin (yMin + 1) xMax (yMax + 1) cellSize }

                | Left ->
                    { model with viewPort = newViewPort (xMin - 1) yMin (xMax - 1) yMax cellSize }

                | Right ->
                    { model with viewPort = newViewPort (xMin + 1) yMin (xMax + 1) yMax cellSize }

                | ZoomOut ->
                    { model with viewPort = newViewPort (xMin - 1) (yMin - 1) (xMax + 1) (yMax + 1) (cellSize - 2) }

                | ZoomIn ->
                    { model with viewPort = newViewPort (xMin + 1) (yMin + 1) (xMax - 1) (yMax - 1) (cellSize + 2) }

                | UpdateUniverse string ->
                    let
                        newUniverse =
                            snd (Option.withDefault ( "", [] ) (Lst.head (List.filter (fun i -> (fst i) == string) model.examples)))
                    in
                        { model with universe = newUniverse }

                | Evolve ->
                    { model with universe = evolve model.universe }
    in
        ( newModel, Tea.Cmd.none )