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
              title={<span><Icon type="user" /><span>文件</span></span>}
          >
            <Menu.Item key="5"><Link to="/netdriver/dept"><Icon type="file-text" />全部文件</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/netdriver/dept"><Icon type="user" />图片</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/netdriver/dept"><Icon type="user" />文档</Link></Menu.Item>
            <Menu.Item key="8"><Link to="/netdriver/dept"><Icon type="user" />视频</Link></Menu.Item>
            <Menu.Item key="9"><Link to="/netdriver/dept"><Icon type="user" />种子</Link></Menu.Item>
            <Menu.Item key="10"><Link to="/netdriver/dept"><Icon type="user" />音乐</Link></Menu.Item>
            <Menu.Item key="11"><Link to="/netdriver/dept"><Icon type="user" />其他</Link></Menu.Item>

          </SubMenu>
          <Menu.Item key="2" >

            <Link to="/netdriver/person"><Icon type="share-alt" /> <span>我的分享</span></Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/netdriver/person"><Icon type="delete" /><span>回收站</span></Link>
          </Menu.Item>
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
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          <DynamicSubRoute {...this.props}/>
        </Content>
      </Layout>
    </Layout>
    )
  }
}
