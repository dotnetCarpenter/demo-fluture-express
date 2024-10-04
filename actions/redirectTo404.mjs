import { Next, Response, Head, Body } from "fluture-express"
import { resolve } from "fluture"

export default locals => request =>
	request.path === "/test3"
		? resolve (Response.Respond ([Head.Status (404)], Body.None))
		: resolve (Next (locals))
