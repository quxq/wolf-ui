
import React from 'react'
import styles from './AdminFindLayout.less'
/**
 *
 */
export default class AdminFindLayout extends React.Component{

  componentDidMount()
  {
    console.log(this.refs.toppanel)
  }
  render(){
    if(this.props.children.length!=2){
       console.error("当前布局必须拥有两个子节点 ");
    }

    return (
      <div  className={styles.adminfindlayout}>
        <div  className={styles.top} style={{height:this.props.topHeight+"px"}}>
            {this.props.children[0]}
        </div>
        <div  className={styles.content} style={{top:(this.props.topHeight+10)+"px"}}>

            {this.props.children[1]}

        </div>
      </div>
    )
  }
}

