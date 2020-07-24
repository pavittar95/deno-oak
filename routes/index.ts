import { Router, Context } from "https://deno.land/x/oak/mod.ts";
import withUserRoutes from "./userRoute.ts";
import withBookRoutes from "./bookRoute.ts";
// import withDownloadRoutes from "./downloadRoute.ts";
import withFileUploadRoute from "./fileUploadRoute.ts";
import users from "../models/users.ts";
const router = new Router();

router.get(`/`, ({ request, response, cookies }) => {
  response.body = "App is working";
});

router.post("/new/user", async (context: Context, next: Function) => {
  try {
    const insertId = await users.insertOne({
      username: "user1",
      password: "pass1",
    });
    context.response.body = insertId;
  } catch (error) {
    context.response.body = error;
  }
});

withUserRoutes(router);
withBookRoutes(router);
// withDownloadRoutes(router);
withFileUploadRoute(router);

export default router;
