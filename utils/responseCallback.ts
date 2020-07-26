import { Context, Status } from "https://deno.land/x/oak/mod.ts";
import { red } from "https://deno.land/std@0.53.0/fmt/colors.ts";
import { CONST } from "./messages.ts";

export const successCallback = (
  ctx: Context,
  data: Object | Array<any>,
  status: Status = 200,
  msg: String = CONST.success
) => {
  ctx.response.status = status;
  ctx.response.body = { msg, data };
};

export const errorCallback = (
  ctx: Context,
  status: Status = 400,
  msg: String = CONST.genericMessage
) => {
  console.log(`${red(`status: ${status} -- Message: ${msg}`)}`);
  ctx.response.status = status;
  ctx.response.body = { msg, data: {} };
};
