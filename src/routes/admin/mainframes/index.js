import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon,Progress } from 'antd';
const { Header, Sider, Content } = Layout;
import { DynamicSubRoute } from 'utils'
import styles from './index.less'

export default class MainFrames extends React.Component{

  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render(){
    console.log(this.props)
    return (
    <Layout id="mainframe" className={styles.mainframe}>
      <Sider
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
      >
        <div className={styles.logo}  />
        <div><Progress type="circle" percent={this.state.percent}  />fff</div>
        <Menu  mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span> <Link to="/admin/dept">部门管理</Link>
              </span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span><Link to="/admin/person">人员管理</Link></span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className={styles.trigger}
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          <DynamicSubRoute {...this.props}/>
        </Content>
      </Layout>
    </Layout>
    )
  }
}
