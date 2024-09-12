import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import posts from "./blogs/blogs";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// ミドルウェア
app.use("*", prettyJSON());
app.route("/post", posts);

export default app;
