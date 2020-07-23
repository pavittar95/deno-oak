import db from "../db/db.ts";

interface UserSchema {
  _id: { $oid: string };
  username: string;
  password: string;
}

const users = db.collection<UserSchema>("users");
export default users;
