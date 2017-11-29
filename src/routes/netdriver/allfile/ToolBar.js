/**
 * Created by quxiangqian on 2017/11/29.
 */
import React from 'react'
import styles from './Toolbar.less'
import { Button, Input, Icon, Popover } from 'antd'

const Search = Input.Search

export default class ToolBar extends React.Component {
  state={
    sortid: 0,
    visible: false,
  }
  hide = () => {
    this.setState({
      visible: false,
    })
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible })
  }

  render () {
    return (
      <div className={styles.Toolbar}>
        <div>
          <Button type="primary" icon="plus" size="large" onClick={this.props.addHandle} >上传</Button>
          <Button style={{ marginLeft: 10 }} icon="plus" size="large" onClick={this.props.addSubHandle} >新建文件夹</Button>
          <Button style={{ marginLeft: 10 }} icon="plus" size="large" onClick={this.props.delHandle} >离线下载</Button>
          {
            this.props.filesnum > 0 ?
              (<Button.Group size="large" style={{ marginLeft: 10 }}>
                <Button value="large">分享</Button>
                <Button value="default">共享</Button>
                <Button value="small">下载</Button>
              </Button.Group>
              ) : (<span />)
          }
        </div>
        <div>
          <Search
            placeholder="请输入搜索的条件"
            style={{ width: 200 }}
            onSearch={value => console.log(value)}
          />
          <Popover placement="bottom"
            overlayClassName={styles.Popover1}
            visible={this.state.visible}
            onVisibleChange={this.handleVisibleChange}
            content={(
              <div className={styles.sortbar}>
                <div onClick={() => { this.setState({ sortid: 1 }); this.hide() }}>{this.state.sortid == 1 ? <Icon type="check" /> : <span style={{ paddingLeft: 12 }} />}<span style={{ paddingLeft: 10 }}>文件名</span></div>
                <div onClick={() => { this.setState({ sortid: 2 }); this.hide() }}>{this.state.sortid == 2 ? <Icon type="check" /> : <span style={{ paddingLeft: 12 }} />}<span style={{ paddingLeft: 10 }}>大小</span></div>
                <div onClick={() => { this.setState({ sortid: 3 }); this.hide() }}>{this.state.sortid == 3 ? <Icon type="check" /> : <span style={{ paddingLeft: 12 }} />}<span style={{ paddingLeft: 10 }}>修改日期</span></div>
              </div>
            )}
            trigger="hover"
          >
            <Button style={{ marginLeft: 10 }}>
              <Icon type="arrow-down" />
            </Button>
          </Popover>
          <Button style={{ marginLeft: 10 }}>
            <Icon type="appstore" />
          </Button>
        </div>
      </div>)
  }
}
