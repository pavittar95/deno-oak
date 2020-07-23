import { send } from "https://deno.land/x/oak/mod.ts";

export const staticFileMiddleware = async (ctx: any, next: Function) => {
  let pathName: string = ctx.request.url.pathname;
  const path = `${Deno.cwd()}/public${pathName}`;

  if (await fileExists(path)) {
    await send(ctx, pathName, {
      root: `${Deno.cwd()}/public`,
    });
  } else {
    await next();
  }
};

async function fileExists(path: string) {
  try {
    const stats = await Deno.lstat(path);
    return stats && stats.isFile;
  } catch (e) {
    if (e && e instanceof Deno.errors.NotFound) {
      return false;
    } else {
      throw e;
    }
  }
}
