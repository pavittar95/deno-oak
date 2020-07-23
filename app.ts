import { Application, send } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import router from "./routes/index.ts";
import { staticFileMiddleware } from "./middeware/staticServe.ts";

const HOST = "localhost";
const PORT = 7700;

const app = new Application();

app.use(oakCors());

app.use(staticFileMiddleware);

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method}: ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(router.routes());
app.use(router.allowedMethods());

// // Send static content
// app.use(async (context: any, next) => {
//   console.log(`${Deno.cwd()}${context.request.url.pathname}`);
//   // if (context.request.url.pathname === "/files") {
//     await send(context, `${context.request.url.pathname}`, {
//       root: `${Deno.cwd()}`,
//     });
//   // } else {
//   //   await next();
//   // }
// });

app.addEventListener("error", (evt) => {
  // Will log the thrown error to the console.
  console.log(evt.error);
});

app.addEventListener("listen", () => {
  console.log(`Listening on port ${HOST}:${PORT} ...`);
});
const start = async (HOST: String, PORT: Number) => {
  await app.listen(`${HOST}:${PORT}`);
};

start(HOST, PORT);
