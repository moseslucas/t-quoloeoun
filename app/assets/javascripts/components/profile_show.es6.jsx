class ProfileShow extends React.Component {
  constructor(props){
    super(props)
    this.renderMain = this.renderMain.bind(this)
    this.modal = {
      id: "modal_new_twit",
      size: "modal-xs",
      icon: "fa fa-edit",
      title: "New Tweet"
    }
    this.state = {
      twits: props.twits,
      twit: ""
    }
  }

  componentDidMount(){
  }

  tweet(tweet){
		$.ajax({
			url: `/twits`,
			data: {tweet: tweet},
			type: "POST",
			success: (s)=>{
				switch(s.status){
					case "success":
            console.log("Tweet Created")
						// self.getAjaxRecords()
						// toastr.success(`New Discount`,`Saved`)
					break
					case "error":
						for(let err in s.error){
							s.error[err].map((message)=>{
                console.log(err)
								// toastr.warning(message,err.toUpperCase())
							})
						}
					break
				}
			},
			error: (xhr, status, error)=>{
				// toastr.error(`Something Happended`,`Error`)
				console.log(`xhr: ${xhr.status}, status: ${status}, error: ${error}`)
				// this.refs.btn_save.disabled = false
			}
		})
  }

  renderTwits(t,i){
    return(
      <div className="card" key={i}>
        <label>{t.email}</label> <br/>
        {t.content}
      </div>
    )
  }

  renderMain(){
    return(
      <div>
        <Modal modal={this.modal}>
          <TwitForm tweet={this.tweet}/>
        </Modal>
        <Lagayan>
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
