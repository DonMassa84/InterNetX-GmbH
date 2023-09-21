import connection from "../../db.js";
import { selectOne } from "../query/select-one.js";

export default function deleteItem(res, props) {
  const { email, password } = props;

  // Zuerst authentifizieren
  connection.query(
    selectOne("users", `WHERE email='${email}'`),
    (err, rows) => {
      if (err || rows.length === 0) {
        return res.status(401).json("User not found or invalid credentials");
      }

      const user = rows[0];
      if (!user.admin) {
        return res.status(403).json("Not authorized as admin");
      }

      // Benutzer löschen
      connection.query(
        `DELETE FROM users WHERE email='${email}'`,
        (err) => {
          if (err) {
            return res.status(500).json("Failed to delete user");
          }

          res.status(200).json({ message: "User successfully deleted" });
        }
      );
    }
  );
}
