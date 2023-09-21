/**
* @api {get} Request select one
* @apiName selectOne
* @apiDescription Request to select one
* @apiGroup sql
*
* @apiParam {String} table selected table.
* @apiParam {String} condition condition information.
* @apiParam {String} field selected field.
* @apiParamExample {json} Request-Example:
*     {
*        "table": 'user',
*        "condition": 'WHERE id=2',
*        "field": 'name'
*     }
*
*/
export const selectOne = (table, condition) => {
  return `SELECT * FROM ${table} ${condition}`;
};
