/* eslint-disable no-trailing-spaces */
/**
 * Created by quxiangqian on 2017/10/22.
 */
import reqwest from 'reqwest'
import Cookies from 'universal-cookie'
import {AppConfig} from  'config'

class HttpUtil {
  constructor () {
    //this.baseAddr = 'http://192.168.1.240:8517'
    this.baseAddr =AppConfig.ApiBaseUrl
    // this.baseAddr = '/breipapi'
    this.url = ''
    this.method = 'post'
    this.data = {}
    this.type = 'json'
  }
  getHeader =() => {
    let h = {}
    let cookies = new Cookies()
    let sid = cookies.get('sid')
    if (sid) {
      h.Cookie = `JSESSIONID=${sid}`
    }
    return h
  }

  setPram= (f) => {
    reqwest({
      url: this.baseAddr + this.url,
      method: this.method,
      data: this.data,
      type: this.type,
      crossOrigin: true,
      withCredentials: true,
      headers: {
        ...this.getHeader(),
      },
      error: this.error,
      success: f,
    })
  }
  error = (err) => {
    console.log(err)
  }
  post = (success) => {
    this.method = 'post'
    this.setPram(success)
  }
  get = (success) => {
    this.method = 'get'
    this.setPram(success)
  }
}
export default HttpUtil
