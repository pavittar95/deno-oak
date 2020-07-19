async function Api(){
    const url = Deno.args[0];
    const res = await fetch(url);
    console.log(res);
    const body = new Uint8Array(await res.arrayBuffer());
    await Deno.stdout.write(body);
}

Api();