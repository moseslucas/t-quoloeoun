class ProfileShow extends React.Component {
  constructor(props){
    super(props)
    this.renderMain = this.renderMain.bind(this)
    this.state = {
      twits: props.twits
    }
  }

  componentDidMount(){
  }

  renderTwits(t,i){
    return(<li key={i}>{t.content}</li>)
  }

  renderMain(){
    return(
      <Lagayan>
        <h1>asdjkfl;asfd</h1>
        <ul>
          {this.state.twits.map(this.renderTwits)}
        </ul>
      </Lagayan>
    )
  }
  render () {
    return this.renderMain()
  }
}
