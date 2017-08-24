class Lagayan extends React.Component {

  renderAdditionalInfo(){
    const p = this.props
    return(
      <div>
        <h3 className="text-center">Profile</h3>
        <ul className="list-group">
          <li className="list-group-item text-primary"><label>{this.props.user.email}</label></li>
          <li className="list-group-item"><label>Total Tweets: </label> <text className="pull-right">{p.total_twits}</text></li>
          <li className="list-group-item"><label>Following: </label> <text className="pull-right">0</text></li>
          <li className="list-group-item"><label>Followers: </label> <text className="pull-right">0</text></li>
          <li className="list-group-item"><label>Member Since: </label> <text className="pull-right">{this.format_date(p.user.created_at)}</text></li>
          <li className="list-group-item"><button className="btn btn-primary btn-block">
            <i className="fa fa-twitter"></i> Follow</button></li>
        </ul>
      </div>
    )
  }

  format_date(created_at){
    let since = new Date(created_at)
    since = `${since.getMonth()+1}/${since.getDate()}/${since.getFullYear()}`
    return since
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
