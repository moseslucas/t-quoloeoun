class Lagayan extends React.Component {

  renderAdditionalInfo(){
    const p = this.props
    return(
      <div>
        <h3 className="text-center">Profile</h3>
        <ul className="list-group">
          <li className="list-group-item text-primary"><label>{this.props.user.email}</label></li>
          <li className="list-group-item"><label>Total Tweets: </label> <text className="pull-right">{p.total_twits}</text></li>
          <li className="list-group-item"><label>Following: </label> <text className="pull-right">4</text></li>
          <li className="list-group-item"><label>Followers: </label> <text className="pull-right">4</text></li>
          <li className="list-group-item"><label>Member Since: </label> <text className="pull-right">Aug 20, 2017</text></li>
        </ul>
      </div>
    )
  }

  render () {
    return(
      <div className="row">
        <div className="col-sm-3">
          {this.renderAdditionalInfo()}
        </div>
        <div className="col-sm-6">
          {this.props.children}
        </div>
        <div className="col-sm-3"></div>
      </div>
    )
  }
}
