/**
 * Created by quxiangqian on 2017/10/23.
 */
require('./common')

let database = { total: 14,
  list: [{
    files_id: 1,
    name: '特殊文件',
    size: '2mb',
    cdate: '2017-10-10',
    f_t:1,
  }, {
    files_id: 2,
    name: '文件夹2',
    size: '3mb',
    cdate: '2017-10-10',
    f_t:2,
  },{
    files_id: 3,
    name: '文件夹3',
    size: '3mb',
    cdate: '2017-10-10',
    f_t:2,
  },
    {
      files_id: 4,
      name: '文件夹3',
      size: '3mb',
      cdate: '2017-10-10',
      f_t:3,
    }] }

module.exports = {

  'POST /api/v1/driver/allfile': function (req, res) {
    res.status(200).json(database)
  },
}
