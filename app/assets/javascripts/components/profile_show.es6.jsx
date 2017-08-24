class ProfileShow extends React.Component {
  constructor(props){
    super(props)
    this.renderMain = this.renderMain.bind(this)
    this.state = {
      twits: props.twits
    }
  }

  componentDidMount(){
    console.log(this.state.twits)
  }

  renderTwits(){
    return(
      <div>
        <ul>
        </ul>
      </div>
    )
  }
  renderMain(){
    return(
      <div className="row">
        <div className="col-xs-12">
          <h1>asdjkfl;asfd</h1>
        </div>
      </div>

    )
  }
  render () {
    return this.renderMain()
  }
}
