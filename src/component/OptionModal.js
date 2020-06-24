import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) =>(
        <Modal
            ariaHideApp={false}
            isOpen={!!props.selectedOption}
            contentLabel='Selected Option'
            onRequestClose={props.handleOptionModal}
            closeTimeoutMS={200}
            className='modal'
        >
            <h3 className='modal__title'>Selected Option</h3>
            {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
            <button className='modal__button'onClick={props.handleOptionModal}>Okay</button>
        </Modal>
)

export default OptionModal;