class TwitForm extends React.Component {
  constructor(props){
    super(props)
    this.renderMain = this.renderMain.bind(this)
    this.tweet = this.tweet.bind(this)
  }

  tweet(){
    // if(e.key === 'Enter'){
      const tweet =
      document.getElementById("tweet").value
      if(tweet!=""){
        this.props.tweet(tweet)
      }
    // }
  }

  renderMain(){
    return(
      <div className="row">
        <div className="col-xs-12">
          <div className="form-group">
            <textarea
              className="form-control"
              rows="5"
              id="tweet"
              placeholder="What's Happening?"/>
          </div>
          <button
            className="btn btn-primary pull-right"
            onClick={this.tweet}>
            Tweet <i className="fa fa-twitter"></i>
          </button>
        </div>
      </div>
    )
  }

  render () {
    return this.renderMain()
  }
}
