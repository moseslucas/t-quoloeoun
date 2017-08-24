class ProfileShow extends React.Component {
  constructor(props){
    super(props)
    this.renderMain = this.renderMain.bind(this)
    this.getTwits = this.getTwits.bind(this)
    this.tweet = this.tweet.bind(this)
    this.modal = {
      id: "modal_new_twit",
      size: "modal-xs",
      icon: "fa fa-edit",
      title: "New Tweet"
    }
    this.state = {
      twits: props.twits,
      total_twits: props.total_twits,
      twit: ""
    }
  }

  componentDidMount(){
  }

	getTwits(){
		self = this
		$.ajax({
			url: `/twits/my_twits`,
			type: "GET",
			success: (s)=>{
				self.setState({twits: s})
			},
			error: (xhr, status, error)=>{
				console.log(`xhr: ${xhr.status}, status: ${status}, error: ${error}`)
			}
		})
	}

  tweet(tweet){
    self = this
		$.ajax({
			url: `/twits`,
			data: {content: tweet},
			type: "POST",
			success: (s)=>{
				switch(s.status){
					case "success":
            //will refresh only on profiles#index
            if(self.props.restate){
              self.getTwits()
              //add one to total twits only for profile
              self.setState({total_twits: ++self.state.total_twits})
            }
            self.after_tweet()
						// self.getAjaxRecords()
						// toastr.success(`New Discount`,`Saved`)
					break
					case "error":
						for(let err in s.error){
							s.error[err].map((message)=>{
                $.notify({
                  message: err
                },{
                  type: 'danger'
                });
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

  after_tweet(){
    $('#tweet').val('')
    $('#modal_new_twit').modal('hide')
    $.notify({
      message: "Your tweet has been posted"
    },{
      type: 'success',
      placement: {from: "top", align: "center"},
    });
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
        <Lagayan
          total_twits={this.state.total_twits}>
          <h3 className="text-center">My Tweets</h3>
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
