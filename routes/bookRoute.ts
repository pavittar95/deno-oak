import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
} from "../controller.ts";

const SUB_ROUTE = "/books";

const withUserRoutes = (router: Router) => {
  router
    .get(`${SUB_ROUTE}`, getBooks)
    .get(`${SUB_ROUTE}/:isbn`, getBook)
    .post(`${SUB_ROUTE}`, addBook)
    .put(`${SUB_ROUTE}/:isbn`, updateBook)
    .delete(`${SUB_ROUTE}/:isbn`, deleteBook);
};

export default withUserRoutes;
