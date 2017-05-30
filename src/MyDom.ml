type element

module Style = struct
    class type _t = object
        method setProperty: string -> string -> unit
    end [@bs]

    type t = _t Js.t

    external style : element -> t = "style" [@@bs.get]
end

external body: element = "document.body" [@@bs.val]
external appendChild : element -> element -> unit = "appendChild" [@@bs.send]
external createTextNode : string -> element = "document.createTextNode" [@@bs.val]
external border : element -> string -> unit = "" [@@bs.set] [@@bs.scope "style"]
external requestAnimationFrame :
  (unit -> unit) -> unit = "requestAnimationFrame" [@@bs.val]