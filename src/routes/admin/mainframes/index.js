import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon,Progress } from 'antd';
const { Header, Sider, Content } = Layout;
import { DynamicSubRoute } from 'utils'
import styles from './index.less'
const SubMenu = Menu.SubMenu;

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
        <div className={styles.logo} />

        <Menu theme="dark" mode="inline" defaultOpenKeys={['sub0']} defaultSelectedKeys={['1']}>

          <SubMenu
              key="sub0"
              title={<span><Icon type="user" /><span>管理端常用</span></span>}
          >
            <Menu.Item key="sub0_1"><Link to="/admin/dept"><Icon type="user" />常规查询(分页)</Link></Menu.Item>
            <Menu.Item key="sub0_2"><Link to="/admin/dept"><Icon type="user" />常规查询(不分页)</Link></Menu.Item>
            <Menu.Item key="sub0_3"><Link to="/admin/dept"><Icon type="user" />树形表格</Link></Menu.Item>
            <Menu.Item key="sub0_4"><Link to="/admin/dept"><Icon type="file-text" />树形</Link></Menu.Item>
            <Menu.Item key="sub0_5"><Link to="/admin/dept"><Icon type="file-text" />关联查询</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub1"
            title={<span><Icon type="user" /><span>异形设计</span></span>}
          >
            <Menu.Item key="sub1_1"><Link to="/admin/dept"><Icon type="user" />表格模版1</Link></Menu.Item>
            <Menu.Item key="sub1_2"><Link to="/admin/dept"><Icon type="user" />表格模版1</Link></Menu.Item>
            <Menu.Item key="sub1_3"><Link to="/admin/dept"><Icon type="user" />表格模版1</Link></Menu.Item>
            <Menu.Item key="sub1_4"><Link to="/admin/dept"><Icon type="file-text" />表格模版1</Link></Menu.Item>
            <Menu.Item key="sub1_5"><Link to="/admin/dept"><Icon type="file-text" />表格模版1</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="user" /><span>wolf组件参考</span></span>}
          >
            <Menu.Item key="sub2_1"><Link to="/admin/dept"><Icon type="user" />布局</Link></Menu.Item>
            <Menu.Item key="sub2_2"><Link to="/admin/dept"><Icon type="user" />多层动态路由</Link></Menu.Item>
          </SubMenu>
        </Menu>
        <div className={styles.df}><Progress percent={50} style={{paddingRight:0}} format={percent => `\n${percent}mb/2005G 扩容至5T`}/></div>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className={styles.trigger}
            type={this.state.collapsed ? 'appstore-o' : 'appstore'}
            onClick={this.toggle}
          />
        </Header>
        <Content style={{ padding: 0,position:'relative',top:0,bottom:0,margin:'10px'}}>
          <DynamicSubRoute {...this.props}/>
        </Content>
      </Layout>
    </Layout>
    )
  }
}
