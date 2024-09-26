import express from "express"
import {dispatcher} from "fluture-express"
import path from "node:path"

const app = express ()
const dispatch = dispatcher (path.resolve (import.meta.dirname, "actions"))

app.set ("view engine", "ejs")
app.set ("views", path.join (import.meta.dirname, "views"))

app.use (dispatch ("session.js"))
app.get ("/", dispatch ("welcome.js"))
// app.get ("/json", dispatch ("welcomeJson"))
// app.get ("/image", dispatch ("image"))

app.listen (3000)
