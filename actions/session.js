import {Next} from "fluture-express"
import {resolve} from "fluture"

export default locals => req => {
  const session = {id: req.headers["x-authenticated-user"]}
  const newLocals = Object.assign ({session}, locals)
  return resolve (Next (newLocals))
}