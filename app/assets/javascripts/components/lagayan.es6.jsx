class Lagayan extends React.Component {
  render () {
    return(
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          {this.props.children}
        </div>
        <div className="col-sm-3"></div>
      </div>
    )
  }
}
