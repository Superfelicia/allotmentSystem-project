
const Modal = (props) => {

    if (!props.showModal) {
        return null;
    }

    return (
        <div className="modal" onClick={props.closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">{props.title}</h2>
                    <button className="modal-button" onClick={props.closeModal}>X</button>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                <div className="modal-footer"/>
            </div>
        </div>
    )
}

export default Modal;