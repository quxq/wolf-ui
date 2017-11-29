import react from 'react'

export default class MessageBook extends react.Component {
  constructor (props) {
    super(props)

    console.log(props)
  }
  render () {
    const row = this.props.datasource
    return (
      <div className="messagebox">
        <span >
          <i className={row.head} />
          {row.name}
        </span>
        <span >
          <p>
            {row.message}
          </p>
          <dl>
            <dt>创建时间:{row.cdate}</dt>
            <dt><a href="javascript:void(0)" onClick={() => { if (this.props.callBack) { this.props.callBack(row) } }}>回复</a>:{row.callback}条</dt>
          </dl>
        </span>
      </div>
    )
  }
}
