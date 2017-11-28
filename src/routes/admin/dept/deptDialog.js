/**
 * Created by quxiangqian on 2017/11/28.
 */
/**
 * Created by quxiangqian on 2017/10/19.
 */
import { Dialog } from 'wolf'
import _DeptForm from './deptForm'
import { AntForm } from 'wolf'

export default class DeptDialog extends Dialog {
  handleOk = (e) => {
    // console.log(this.refs.form)
    let bl=false;
    this.refs.form.validateFields((err, values) => {
      if (!err) {
        this.props.submitOk(values)
        bl= true
      }
    })
    return bl;
  }
  subRender = () => {
    const DeptForm = AntForm.create()(_DeptForm)
    return <DeptForm ref="form" />
  }
}

