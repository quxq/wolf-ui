/**
 * Created by quxiangqian on 2017/10/23.
 */
require('./common')

let list = [
  { messageid: '1', name: '老屈', head: 'head1', message: '容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。 \n' +
  '项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。 \n' +
  '主要记住 “容器”、“项目”、“主轴（横轴）”和“交叉轴（纵轴）”的意思和指向就行。', cdate: '2010-10-11', callback: 2 },
  { messageid: '2', name: '老李', head: 'head2', message: 'sdfsdf', cdate: '2010-10-11', callback: 2 },
  { messageid: '3', name: '老张', head: 'head3', message: 'sdfsdf', cdate: '2010-10-11', callback: 2 },
  { messageid: '4', name: '老屈1', head: 'head1', message: 'sdfsdf', cdate: '2010-10-11', callback: 2 },
  { messageid: '5', name: '老屈2', head: 'head1', message: 'sdfsdf', cdate: '2010-10-11', callback: 2 },
  { messageid: '6', name: '老屈3', head: 'head1', message: 'sdfsdf', cdate: '2010-10-11', callback: 2 },
]
let database = {
  total: 15,
  list: list,

}

module.exports = {

  'POST /api/v1/message': function (req, res) {
    // console.log(req)
    //const { parentId } = req.body
    //console.log(parentId)
    //database.list = list.filter(item => item.p_dept_id === parentId).sort((a, b) => a.sort_id > b.sort_id)
    res.status(200).json(database)
  },
}
