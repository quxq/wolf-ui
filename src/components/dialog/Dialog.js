import Component from '../Component'
import { Modal } from 'antd'
/**
 * Created by quxiangqian on 2017/11/28.
 */
export default class Dialog extends Component {
  state = {
    title:'未标题',
    visible: false,
  }
  /**
   * 显示窗口
   */
  show =() => {
    this.setState({ visible: true })
  }
  /**
   * 设置窗口标题
   * @param title 标题
   */
  setTitle =(title) => {
    this.setState({ title })
  }
  render () {
    return (
      <Modal
        title={this.state.title}
        visible={this.state.visible}
        {...this.props}
        onCancel={()=>{
          this.setState({ visible: false })
        }}
        onOk={(e)=>{
          if(this.handleOk){
            if(this.handleOk(e)){
              this.setState({ visible: false })
            }
          }
        }}
      >
        {this.subRender()}
      </Modal>

    )
  }
}
