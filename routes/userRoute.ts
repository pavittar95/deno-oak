import { Router } from "https://deno.land/x/oak/mod.ts";
import Schema, {
  Type,
  string,
  number,
  array,
} from "https://denoporter.sirjosh.workers.dev/v1/deno.land/x/computed_types/src/index.ts";

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
    })
    .post(`${SUB_ROUTE}`, ({ request, response }) => {
      const UserSchema = Schema({
        name: string.trim().normalize().between(3, 40).optional(),
        username: /^[a-z0-9]{3,10}$/,
      });

      type User = Type<typeof UserSchema>;
      const validator = UserSchema.destruct();
      const [err, user] = validator({
        username: "john1",
        name: "pa",
      });
      

      response.body = "success";
    });
};

export default withUserRoutes;