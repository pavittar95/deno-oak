import { Router } from "https://deno.land/x/oak/mod.ts";
import { ensureDir } from "https://deno.land/std/fs/mod.ts";

const SUB_ROUTE = "/download";

const withDownloadRoutes = (router: Router) => {
  router
    .get(`${SUB_ROUTE}`, async ({ request, response }) => {
      try {
        const url: string | undefined | null = request?.url?.searchParams.get(
          "url"
        );
        const res = await fetch(`${url}`);
        if (res.statusText === "OK") {
          const imageBytes = new Uint8Array(await res.arrayBuffer());
          let ext: string[] | undefined = url?.split(".");
          await Deno.writeFile(
            `./public/view/${url}.${ext ? ext[ext?.length - 1] : "jpg"}`,
            imageBytes
          );
          response.status = 200;
          response.body = true;
        } else {
          response.body = false;
        }
      } catch (error) {
        response.status = 500;
        response.body = "falied";
      }
    })
    .get(`${SUB_ROUTE}/directory`, async ({ response }) => {
      try {
        await ensureDir("./view");
        response.status = 200;
        response.body = "success";
      } catch (error) {
        response.status = 500;
        response.body = error.message;
      }
    });
};

export default withDownloadRoutes;
