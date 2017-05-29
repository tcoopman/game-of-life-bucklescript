let head = function
    | [] -> None
    | hd :: _ -> Some hd

let range from until =
    let rec range_rec l a b =
        if a = b then l @ [b]
        else range_rec (l @ [a]) (a + 1) b
    in range_rec [] from until