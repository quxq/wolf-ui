/**
 * Created by quxiangqian on 2017/10/23.
 */
require('./common')

let list = [
  { headpath: '/', name: '屈先生', work: '256小时', job: '前端开发', sortid: '1' },
  { headpath: '/', name: '屈先生', work: '256小时', job: '前端开发', sortid: '2' },
  { headpath: '/', name: '屈先生', work: '256小时', job: '前端开发', sortid: '3' },
  { headpath: '/', name: '屈先生', work: '256小时', job: '前端开发', sortid: '4' },
  { headpath: '/', name: '屈先生', work: '256小时', job: '前端开发', sortid: '4' },
  { headpath: '/', name: '屈先生', work: '256小时', job: '前端开发', sortid: '4' },
  { headpath: '/', name: '屈先生', work: '256小时', job: '前端开发', sortid: '4' },
  { headpath: '/', name: '屈先生', work: '256小时', job: '前端开发', sortid: '4' },
  { headpath: '/', name: '屈先生', work: '256小时', job: '前端开发', sortid: '4' },
  { headpath: '/', name: '屈先生', work: '256小时', job: '前端开发', sortid: '4' },
  { headpath: '/', name: '屈先生', work: '256小时', job: '前端开发', sortid: '4' },
  { headpath: '/', name: '屈先生', work: '256小时', job: '前端开发', sortid: '4' },
  { headpath: '/', name: '屈先生', work: '256小时', job: '前端开发', sortid: '4' },
  { headpath: '/', name: '屈先生', work: '256小时', job: '前端开发', sortid: '4' },
  { headpath: '/', name: '屈先生', work: '256小时', job: '前端开发', sortid: '4' },
  { headpath: '/', name: '屈先生', work: '256小时', job: '前端开发', sortid: '4' },
  { headpath: '/', name: '屈先生', work: '256小时', job: '前端开发', sortid: '4' },
  { headpath: '/', name: '屈先生', work: '256小时', job: '前端开发', sortid: '4' },
]
let database = {
  total: 15,
  list,

}

module.exports = {

  'POST /api/v1/sortname': function (req, res) {
    // console.log(req)
    // const { parentId } = req.body
    // console.log(parentId)
    // database.list = list.filter(item => item.p_dept_id === parentId).sort((a, b) => a.sort_id > b.sort_id)
    res.status(200).json(database)
  },
}
