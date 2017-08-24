class Modal extends React.Component {
  constructor(props){
    super(props)
    this.renderMain = this.renderMain.bind(this)
  }
  renderMain(){
    const modal = this.props.modal
    return(
      <div id={modal.id} className="modal fade" >
        <div className={`modal-dialog ${modal.size}`}>
          <div className="modal-content" >
            <div className="modal-header">
              <button type="butt on"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true">
                &times;
              </button>
              <h4 className="modal-title">
                <i className={modal.icon}></i>  {modal.title}
              </h4>
            </div>
            <div className="modal-body" >
              <div id="div_modal_form" className="row">
                <div className="col-xs-12" >
                  <div className="content">
                    {this.props.children}
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
  render () {
    return this.renderMain()
  }
}
