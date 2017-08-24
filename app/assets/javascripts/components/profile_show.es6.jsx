class ProfileShow extends React.Component {
  constructor(props){
    super(props)
    this.renderMain = this.renderMain.bind(this)
    this.modal = {
      id: "modal_new_twit",
      size: "modal-xs",
      icon: "<i class='fa fa-edit'></i>",
      title: "New Twit"
    }
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
      <div>
        <Modal modal={this.modal}>
          <h1>modalto</h1>
        </Modal>
        <Lagayan>
          <h1>asdjkfl;asfd</h1>
          <ul>
            {this.state.twits.map(this.renderTwits)}
          </ul>
        </Lagayan>
      </div>
    )
  }
  render () {
    return this.renderMain()
  }
}
