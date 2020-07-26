import { Context } from "https://deno.land/x/oak/mod.ts";
import users from "../models/users.ts";
export const addUser = (ctx: Context) => {
  ctx.response.body = "success";
};

export const getUser = (ctx: Context) => {
  ctx.response.body = "success";
};

export const addNewUser = async (context: Context, next: Function) => {
  try {
    const insertId = await users.insertOne({
      username: "user1",
      password: "pass1",
    });
    context.response.status = 200;
    context.response.body = insertId;
  } catch (error) {
    context.response.status = 500;
    context.response.body = error;
  }
};
