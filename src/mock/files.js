/**
 * Created by quxiangqian on 2017/10/23.
 */
/**
 * Created by quxiangqian on 2017/10/23.
 */
require('./common')

let list = [
  {
    files_id: 1,
    name: '特殊文件',
    size: '2mb',
    cdate: '2017-10-10',
    f_t: 1,
    parentid: 0,
  }, {
    files_id: 2,
    name: '文件夹2',
    size: '3mb',
    cdate: '2017-10-10',
    f_t: 2,
    parentid: 0,
  }, {
    files_id: 3,
    name: '文件夹3',
    size: '3mb',
    cdate: '2017-10-10',
    f_t: 2,
    ext: 'doc',
    parentid: 1,
  },
  {
    files_id: 4,
    name: '文件3',
    size: '3mb',
    cdate: '2017-10-10',
    f_t: 3,
    ext: 'docx',
    parentid: 1,
  },
  {
    files_id: 5,
    name: '文件5',
    size: '3mb',
    cdate: '2017-10-10',
    f_t: 3,
    ext: 'zip',
    parentid: 1,
  },
  {
    files_id: 6,
    name: '文件6',
    size: '3mb',
    cdate: '2017-10-10',
    f_t: 3,
    parentid: 2,
  },
  {
    files_id: 7,
    name: '文件夹3',
    size: '3mb',
    cdate: '2017-10-10',
    f_t: 3,
    parentid: 2,
  },
  {
    files_id: 8,
    name: '文件夹3',
    size: '3mb',
    cdate: '2017-10-10',
    f_t: 3,
    parentid: 2,
  },
  {
    files_id: 9,
    name: '文件夹3',
    size: '3mb',
    cdate: '2017-10-10',
    f_t: 3,
    parentid: 2,
  },
  {
    files_id: 10,
    name: '文件夹3',
    size: '3mb',
    cdate: '2017-10-10',
    f_t: 3,
    parentid: 2,
  }, {
    files_id: 11,
    name: '文件夹3',
    size: '3mb',
    cdate: '2017-10-10',
    f_t: 3,
    parentid: 2,
  },
  {
    files_id: 12,
    name: '文件夹3',
    size: '3mb',
    cdate: '2017-10-10',
    f_t: 3,
    parentid: 2,
  },
  {
    files_id: 13,
    name: '文件夹3',
    size: '3mb',
    cdate: '2017-10-10',
    f_t: 3,
    parentid: 2,
  },
  {
    files_id: 14,
    name: '文件夹3',
    size: '3mb',
    cdate: '2017-10-10',
    f_t: 3,
    parentid: 2,
  },
  {
    files_id: 15,
    name: '文件夹3',
    size: '3mb',
    cdate: '2017-10-10',
    f_t: 3,
    parentid: 2,
  },
]
let database = {
  total: 15,
  list: [],

}

let foder = (arr, id, i) => {
  let row = list.filter(item => item.files_id === parseInt(id))
  if (row.length > 0) {
    row[0].sortid = i++
    arr.push(row[0])
    if (row[0].parentid) {
      foder(arr, row[0].parentid,i)
    }
  }
}

module.exports = {

  'POST /api/v1/driver/allfile': function (req, res) {
    // console.log(req)
    const { parentId } = req.body
    console.log(list)
    database.list = list.filter(item => item.parentid === parseInt(parentId)).sort((a, b) => a.files_id > b.files_id)
    console.log(database.list)
    res.status(200).json(database)
  },
  'POST /api/v1/driver/finddir': function (req, res) {
    // console.log(req)
    const { id } = req.body

    database.list = []
    let i=0;
    foder(database.list, id,i)
    console.log(database.list)
    res.status(200).json(database)
  },
}
