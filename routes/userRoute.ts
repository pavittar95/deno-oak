import { Router } from "https://deno.land/x/oak/mod.ts";
import { addUser, getUser, addNewUser } from "../controllers/user.ts";
import { validateAddUser } from "./userRoutevalidation.ts";

const SUB_ROUTE = "/user";
const withUserRoutes = (router: Router) => {
  router
    .get(`${SUB_ROUTE}`, getUser)
    .post(`${SUB_ROUTE}`, validateAddUser, addUser)
    .put(`${SUB_ROUTE}`, addNewUser);
};

export default withUserRoutes;
