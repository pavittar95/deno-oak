import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";

const HOST = "0.0.0.0";
const PORT = 7700;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", () => {
  console.log(`Listening on port ${HOST}:${PORT} ...`);
});
const start = async (HOST: String, PORT: Number) => {
  await app.listen(`${HOST}:${PORT}`);
};

start(HOST, PORT);
