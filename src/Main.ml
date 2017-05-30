open Tea
open Types

let init universe =
    { universe = universe ;
      examples = Examples.all ;
      viewPort = newViewPort 0 0 10 10 35 ;
      running = true;
      pixi = MyPixiRenderer.init ;
    }

let subscriptions model =
  if model.running then
    Tea.Time.every (400. *. Tea.Time.millisecond) (fun _ -> Evolve)
  else Sub.none

let main = 
   App.standardProgram {
    init = (fun () -> (init Examples.pulsar, Tea.Cmd.none)) ;
    update = Start.update ;
    view = View.view;
    subscriptions;
  }
