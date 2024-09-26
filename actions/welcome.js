import {Render} from "fluture-express"
import {resolve} from "fluture"

export default locals => _ => {
  const user = locals.session.id ? `user ${locals.session.id}` : 'stranger'
  return resolve (Render ('index') ({user}))
}