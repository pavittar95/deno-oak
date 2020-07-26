import { Context, Status } from "https://deno.land/x/oak/mod.ts";
import Schema, {
  Type,
  string,
} from "https://denoporter.sirjosh.workers.dev/v1/deno.land/x/computed_types/src/index.ts";
import { errorCallback } from "../utils/responseCallback.ts";
import { CONST } from "../utils/constants.ts";

const addUserSchema = Schema({
  name: string.trim().normalize().between(3, 40),
  username: /^[a-z0-9]{3,10}$/,
  password: string.trim().normalize().between(3, 40),
});

type AddUser = Type<typeof addUserSchema>;
const addUserValidator = addUserSchema.destruct();

export const validateAddUser = async (ctx: Context, next: Function) => {
  if (ctx.request.hasBody) {
    const result: any = ctx.request.body({ type: "json" });
    const body = await result.value;
    const [err, user] = addUserValidator({ ...body });
    if (err) {
      errorCallback(ctx, Status.UnprocessableEntity, err.message);
    } else {
      next(user);
    }
  } else {
    errorCallback(ctx, Status.NoContent, CONST.noContentParams);
  }
};
