open Types
open Tea.Html

let view model =
    MyPixiRenderer.render model.pixi model.viewPort.cellSize model.universe;
    div [] []