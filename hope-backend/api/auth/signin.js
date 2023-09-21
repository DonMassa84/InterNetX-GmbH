import connection from "../../db.js";
import { selectOne } from "../query/select-one.js";
import crypto from "crypto";

export default function signin(res, props) {
  const { email, password } = props;

  connection.query(
    selectOne("users", `WHERE email='${email}'`),
    (err, rows) => {
      if (err || rows.length === 0) {
        return res.status(401).json("User not found or invalid credentials");
      }

      const user = rows[0];
      crypto.pbkdf2(
        password,
        user.salt,
        310000,
        32,
        "sha256",
        (err, hashedPassword) => {
          if (err || !hashedPassword.equals(user.hashed_password)) {
            return res.status(401).json("User not signed");
          }

          res.status(200).json({ message: "Successfully authenticated" });
        }
      );
    }
  );
}
          
      
