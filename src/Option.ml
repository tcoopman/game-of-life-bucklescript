let map f a =
    match a with
        | Some x -> Some (f x)
        | None -> None

let andThen f a =
    match a with
    | None -> None
    | Some x -> f x

let withDefault default opt =
    match opt with
    | None -> default
    | Some x -> x