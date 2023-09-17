import connection from "../../db.js";
import {deleteOne} from "../query/delete-one.js";
import {deleteCallback } from "..//../utils/request-callback.js";

export default async function deleItem(res, props) {
  const { dbTableName, id } = props;

await connection.query('${deleteOne(dbTableName, id)}', (err, row) =>
  requestCallback(res, row, err)
                       );
}
