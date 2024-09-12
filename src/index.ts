import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import posts from "./blogs/blogs";
import auth from "./auth/auth";
import { basicAuth } from "hono/basic-auth";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// ミドルウェア
app.use("*", prettyJSON());
app.use(
  "/auth/*",
  basicAuth({
    username: "hono",
    password: "acoolproject",
  })
);

app.route("/auth", auth);

app.route("/posts", posts);

export default app;
