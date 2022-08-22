import './Modal.scss'
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ titulo, close, children }) => {
    return(
        <div className="backshadow">
            <div className='custom-modal'>
                <CloseIcon onClick={() => close(false)}/>
                <h2>{titulo}</h2>
                {children}
            </div>
        </div>
    )
}

export default Modal
