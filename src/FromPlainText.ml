let toPosition (x: int) (y: int) (char: char) =
    match char with
        | 'O' -> ((x, y), GameTypes.Alive)
        | _ -> ((x, y), GameTypes.Dead)


let explode s =
    let rec exp i l =
        if i < 0 then l else exp (i -1) (s.[i] :: l) in
    exp (String.length s -1) [];;

let lineToUniserse x input = 
    let chars = explode input in
    List.mapi (toPosition x) chars

let toUniverse str =
    let lines = Js.String.split "\n" str |> Array.to_list in
    List.concat (List.mapi lineToUniserse lines)