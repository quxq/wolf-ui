import react from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

export default class FileBox extends react.Component {
  constructor (props) {
    super(props)

    // console.log(props)
  }
  state={
    checkboxvisibility: false,
  }
  /*
  const rowSelection = {
    selectedRowKeys,
    hideDefaultSelections: true,
    onChange: (selectedRowKeys, selectedRows) => {
      if (this.props.selectedFiles) {
        this.props.selectedFiles(selectedRows)
      }

      if (selectedRowKeys.length > 1) {
        this.setState({ selectedRowKeys, overkey: 0 })
      } else {
        this.setState({ selectedRowKeys })
      }
    },
    onSelection: (!this.state.editable ? this.onSelection : () => {}),
    getCheckboxProps: record => ({
      disabled: record.f_t === 1 || this.state.editable, // Column configuration not to be checked
    }),
  } */
  onChange=(event) => {
    const target = event.target
    if (target.checked) {
      this.props.rowSelection.selectedRowKeys.push(this.props.datasource.key)
    } else {
      // this.props.rowSelection.selectedRowKeys=this.props.rowSelection.selectedRowKeys.filter(item => item!== this.props.datasource.key)
      this.props.rowSelection.selectedRowKeys.splice(this.props.rowSelection.selectedRowKeys.findIndex(item => item === this.props.datasource.key), 1)
    }
    this.props.flush()
  }

  fileico=(row) => {
    if (row.f_t === 1) {
      return (<i className="forderavd" />)
    }
    if (row.ext) {
      return (<i className={row.ext} />)
    }
    return (<i />)
  }

  mouseEnter=() => {
    this.setState({ checkboxvisibility: true })
  }
  mouseLeave=() => {
    this.setState({ checkboxvisibility: false })
  }

  checkBox=(row) => {
    let check = this.props.rowSelection.selectedRowKeys.findIndex((value, index, arr) => {
      console.log(value)
      return value === row.key
    }) !== -1 ? { defaultChecked: true } : ''
    if (row.f_t !== 1) {
      if (check === '' && !this.state.checkboxvisibility) {
        return ''
      }else {
        this.state.checkboxvisibility=true
      }
      return <Checkbox style={{ position: 'absolute', left: 10, top: 10 }} {...check} onClick={this.onChange} />
    }
  }

  render () {
    const row = this.props.datasource


    return (
      <div className="forderbox" onMouseLeave={this.mouseLeave} onMouseEnter={this.mouseEnter}>
        {this.checkBox(row)}
        {this.fileico(row)}
        <div>{row.name}</div>
      </div>
    )
  }
}
