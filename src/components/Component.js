import React from 'react'
import HttpUtil from 'utils/httputil'
import { Modal, Button } from 'antd';
/**
 *
 */
const confirm = Modal.confirm;
export default class Component extends React.Component{

   showError=(message)=> {
    Modal.error({
      title: '系统错误',
      content:message,
    });
  }
  showInfo=(message,onOk)=> {
    Modal.info({
      title: '系统提示',
      content: (
        <div>
          <p>{message}</p>
        </div>
      ),
      if(onOk){onOk}
    });
  }

  showWarning=(message)=> {
    Modal.warning({
      title: '系统警告',
      content:( <p>{message}</p>),
    });
  }
  showConfirm=(message,Confirm)=>{
    confirm({
      title: '系统确认',
      content: ( <p>{message}</p>),
      onOk() {
         if(Confirm){
            Confirm();
         }
      },
      onCancel() {},
    });
  }
   http=()=>{
     let ht=new HttpUtil()
     ht.error= (error) =>{
       //console.log(error)
       this.showError("数据通信错误，请与管理员联系！");
     }
     return ht;
   }
}

