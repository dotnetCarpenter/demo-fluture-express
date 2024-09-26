import {Redirect} from "fluture-express"
import {resolve,reject} from "fluture"

export default _ => request => {
  return request.path = "test1"
    ? resolve (Redirect ("/"))
    : reject ()
}