open GameTypes


let numberOfLive neighbours =
    neighbours
        |> List.filter ((==) Alive)
        |> List.length



let underPopulationRule cell neighbours =
    match cell with
        | Alive ->
            if numberOfLive neighbours < 2 then
                Dies
            else
                Same

        | Dead ->
            Same



let livesOnRule cell neighbours =
    match cell with
        | Alive ->
            let
                numberOfLiveNeighbours =
                    numberOfLive neighbours
            in
                if ((numberOfLiveNeighbours == 2) || (numberOfLiveNeighbours == 3)) then
                    Same
                else
                    Dies

        | Dead ->
            Same



let overPopulationRule cell neighbours =
    match cell with
        | Alive ->
            if numberOfLive neighbours > 3 then
                Dies
            else
                Same

        | Dead ->
            Same



let reproductionRule cell neighbours =
    match cell with
        | Alive ->
            Same

        | Dead ->
            if numberOfLive neighbours == 3 then
                Revives
            else
                Same


let reduceLifeCycle cell neighbours =
    let
        actions =
            [ underPopulationRule cell neighbours ;
              livesOnRule cell neighbours ;
              overPopulationRule cell neighbours ;
              reproductionRule cell neighbours
            ]
        in
    let
        reducedLifeCycle =
            actions
                |> List.filter ((<>) Same)
                |> Lst.head
    in
        Option.withDefault Same reducedLifeCycle


let applyRules cell neighbours =
    let action = reduceLifeCycle cell neighbours in
    match action with
        | Dies -> 
            Dead
        | Revives ->
            Alive
        | Same ->
            cell


let applyRulesTest =
    [ ( (applyRules Alive [ Dead ]) == Dead, "Underpopulation" ) ;
      ( (applyRules Alive [ Alive; Alive; Dead ]) == Alive, "Lives on with 2" ) ;
      ( (applyRules Alive [ Alive; Alive; Alive; Alive ]) == Dead, "Overpopulation" ) ;
      ( (applyRules Dead [ Alive; Alive; Alive ]) == Alive, "reproduction" ) ;
      ( (applyRules Dead [ Dead; Dead; Dead; Alive; Alive; Alive ]) == Alive, "reproduction" ) ;
    ]