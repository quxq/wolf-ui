/**
 * Created by quxiangqian on 2017/10/23.
 */
require('./common')

let list = [
  { dept_id: '1', p_dept_id: '0', name: '公司', sort_id: 1 ,subcount:4},
  { dept_id: '2', p_dept_id: '0', name: '子公司1', sort_id: 2 ,subcount:3},
  { dept_id: '3', p_dept_id: '0', name: '子公司2', sort_id: 3,subcount:0 },
  { dept_id: '4', p_dept_id: '0', name: '子公司3', sort_id: 4 ,subcount:0},
  { dept_id: '5', p_dept_id: '2', name: '部门1', sort_id: 1 ,subcount:2},
  { dept_id: '6', p_dept_id: '2', name: '部门2', sort_id: 2 ,subcount:0},
  { dept_id: '7', p_dept_id: '2', name: '部门3', sort_id: 3 ,subcount:0},
  { dept_id: '8', p_dept_id: '1', name: '部门1', sort_id: 1 ,subcount:0},
  { dept_id: '9', p_dept_id: '1', name: '部门4', sort_id: 4 ,subcount:0},
  { dept_id: '10', p_dept_id: '1', name: '部门2', sort_id: 2 ,subcount:0},
  { dept_id: '11', p_dept_id: '1', name: '部门3', sort_id: 3,subcount:0 },
  { dept_id: '12', p_dept_id: '5', name: '部门3', sort_id: 1,subcount:0 },
  { dept_id: '13', p_dept_id: '12', name: '部门3', sort_id: 1,subcount:0 },
  { dept_id: '14', p_dept_id: '5', name: '部门3', sort_id: 2,subcount:0 },
]
let database = {
  total: 15,
  list: [],

}

module.exports = {

  'POST /api/v1/dept': function (req, res) {
    // console.log(req)
    const { parentId } = req.body
    console.log(parentId)
    database.list = list.filter(item => item.p_dept_id === parentId).sort((a, b) => a.sort_id > b.sort_id)
    res.status(200).json(database)
  },
}
