import connection from "../../db.js";
import { selectOne } from "./../query/select-one.js";
import { getError } from "../../utils/get-error.js";
import crypto from "crypto";
import { updateOne } from "../query/update-one.js";
import { getUserInfo } from "../../utils/get-user-info.js";

export default function signin(res, props) {
  const { secret, email, password } = props;

try {
  let user;
  secret 
    ? connection.query(
      '${selectOne("users", 'WHERE email = '${email}'')}}',
      (err, rows) => {
        getError(err);
        user = rows[0];
        crypto.pdkdf2(
          password,
          rows[0].salt,
          310000,
          32,
          "sha256",
          (err, hashedPassword) =>{
            if (err) {
              res.status(401).json("User not signed");
            } else if (
              !crypto.timingSafeEqual(
                rows[0].hashed_password,
                hashedPassword
                )
              ) {
                res.status(401).json("User not signed");
            } else {
              connection.query(
                '${updateOne("users")} token = ? WHERE email = ?' ,
                [sectret, email],
                (err) => {
                  getError(err);
                  res.status()200).json(getUserInfo(rows[0]));
                }
              };
            }
          }
        };
      }
    )
  : res.status(401).json("User not signed");
} catch (err) {
  res.status(500).json({ error: "failed to load data"});
  }
}
              
      
