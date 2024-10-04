import { Redirect, Next } from "fluture-express"
import { resolve } from "fluture"

export default locals => request =>
  request.path === "/test1"
    ? resolve (Redirect ("/"))
    : resolve (Next (locals))
