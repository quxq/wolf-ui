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
            <Menu.Item key="5"><Link to="/netdriver/dept"><Icon type="file-text" />全部文件</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/netdriver/dept"><span style={{marginLeft:'22px'}}>图片</span></Link></Menu.Item>
            <Menu.Item key="7"><Link to="/netdriver/dept"><span style={{marginLeft:'22px'}}>文档</span></Link></Menu.Item>
            <Menu.Item key="8"><Link to="/netdriver/dept"><span style={{marginLeft:'22px'}}>视频</span></Link></Menu.Item>
            <Menu.Item key="9"><Link to="/netdriver/dept"><span style={{marginLeft:'22px'}}>种子</span></Link></Menu.Item>
            <Menu.Item key="10"><Link to="/netdriver/dept"><span style={{marginLeft:'22px'}}>音乐</span></Link></Menu.Item>
            <Menu.Item key="11"><Link to="/netdriver/dept"><span style={{marginLeft:'22px'}}>其他</span></Link></Menu.Item>
          <Menu.Item key="2" >
            <Link to="/netdriver/person"><Icon type="share-alt" /><span>我的分享</span></Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/netdriver/person"><Icon type="delete" /><span>回收站</span></Link>
          </Menu.Item>
        </Menu>
        <div className={styles.df}><Progress percent={50} style={{paddingRight:0}} format={percent => `\n${percent}mb/2005G 扩容至5T`}/></div>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>

        </Header>
        <Content style={{ padding: 0,position:'relative',top:0,bottom:0,margin:'0px'}}>
          <DynamicSubRoute {...this.props}/>
        </Content>
      </Layout>
    </Layout>
    )
  }
}
