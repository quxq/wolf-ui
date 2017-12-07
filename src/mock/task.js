/**
 * Created by quxiangqian on 2017/10/23.
 */
require('./common')

let list = [
  { name: '事务树treegrid多行改成一行', cdate: '2017-11-12 11:11:22', sortid: '1' },
  { name: '事务编辑表单-事务名称独点一行', cdate: '2017-11-12 11:11:22', sortid: '1' },
  { name: '事务编辑表单-所有字段必须有默认值', cdate: '2017-11-12 11:11:22', sortid: '1' },
  { name: '事务编辑表单-任务时间显示yyyy-', cdate: '2017-11-12 11:11:22', sortid: '1' },
  { name: '事务编辑表单-根据工作量自动选择时间', cdate: '2017-11-12 11:11:22', sortid: '1' },
  { name: '事务评论，可上传图片，支持屏幕截图最好', cdate: '2017-11-12 11:11:22', sortid: '1' },
  { name: '在事务按钮区增加一个刷新按钮', cdate: '2017-11-12 11:11:22', sortid: '1' },
  { name: '能不能不换行，或者设置最大长度，超长截断显示省略号', cdate: '2017-11-12 11:11:22', sortid: '1' },
  { name: '注释的显示放在下边，同时根据内容回车', cdate: '2017-11-12 11:11:22', sortid: '1' },
  { name: '事务编辑表单-所有字段必须有默认值', cdate: '2017-11-12 11:11:22', sortid: '1' },
]
let database = {
  total: 15,
  list,

}

module.exports = {

  'POST /api/v1/task': function (req, res) {
    // console.log(req)
    // const { parentId } = req.body
    // console.log(parentId)
    // database.list = list.filter(item => item.p_dept_id === parentId).sort((a, b) => a.sort_id > b.sort_id)
    res.status(200).json(database)
  },
}
