import react from 'react'

export default class FileBox extends react.Component {
  constructor (props) {
    super(props)

    console.log(props)
  }
  render () {
    const row = this.props.datasource
    return (
      <div className="messagebox">
        {row.name}
      </div>
    )
  }
}
