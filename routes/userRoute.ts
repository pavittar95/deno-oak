import { Router } from "https://deno.land/x/oak/mod.ts";

const SUB_ROUTE = "/user";

const withUserRoutes = (router: Router) => {
  router
    .get(`${SUB_ROUTE}`, ({ request, response, cookies }) => {
      response.body = "This is parent route: user route";
    })
    .get(`${SUB_ROUTE}/new`, ({ request, response, cookies }) => {
      console.log("Cookies : ", cookies);
      response.body = "This is subroute: user/new route";
    })
    .get(`${SUB_ROUTE}/current`, ({ request, response, cookies }) => {
      response.body = "This is subroute: user/current route";
    });
};

export default withUserRoutes;
