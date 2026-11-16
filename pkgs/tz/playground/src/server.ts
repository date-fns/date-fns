import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "dist" }));

app.get("/", (c) => {
  return c.html('<script src="/static/browser.js"></script>');
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
