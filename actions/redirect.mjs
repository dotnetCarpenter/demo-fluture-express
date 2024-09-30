import { Redirect, Next /*, Response, Head, Body*/ } from "fluture-express"
import { resolve } from "fluture"

export default locals => request => {
  return request.path === "test1"
    ? resolve (Redirect ("/"))
    : resolve (Next (locals))
    // : resolve (Response.Respond ([Head.Status (404)], Body.None))
}