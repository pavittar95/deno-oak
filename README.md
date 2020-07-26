# deno-oak

Deno oak framework integration for create backend app.
  - Routes are added (Done).
  - Controller added with fake data (Done).
  - Add request validation methods (done).
  - MongoDb integration (Done).
  
Request params validation for ```POST: /user``` is added.

### Installation
To run this app, you should have deno installed on your system [Deno](https://deno.land/#installation).
  
To start the server.

```sh
$ deno run --allow-write --allow-read --allow-plugin --allow-net --allow-env --unstable app.ts
```

Deno require permissions to access network, files etc. [click here](https://deno.land/manual/getting_started/permissions) to see more.

