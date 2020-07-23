import { Router } from "https://deno.land/x/oak/mod.ts";
import { upload } from "https://deno.land/x/upload_middleware_for_oak_framework/mod.ts";
import { fileUpload } from "../controllers/fileUpload.ts";

const withFileUploadRoute = (router: Router) => {
  router.post(
    "/file-upload",
    upload("./uploads", { useDateTimeSubDir: false }),
    fileUpload
  );
};

export default withFileUploadRoute;
