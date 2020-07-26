import { Router, Context } from "https://deno.land/x/oak/mod.ts";
import withUserRoutes from "./userRoute.ts";
import withDownloadRoutes from "./downloadRoute.ts";
import withFileUploadRoute from "./fileUploadRoute.ts";

const router = new Router();

router.get(`/`, ({ request, response, cookies }) => {
  response.body = "App is working";
});

withUserRoutes(router);
withDownloadRoutes(router);
withFileUploadRoute(router);

export default router;
