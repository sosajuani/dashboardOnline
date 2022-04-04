import React from 'react'

const Modal = (props) => {
  return (
    <div className='modalCont'>
        <div className='modalView'>
            <div className='modalTitle'>¿Esta seguro de eliminar este producto?</div>
            <div className='modalButtons'>
                <button onClick={props.modelDelete} className='btnRed'>Si</button>
                <button onClick={props.modelHidden} className='btnGray'>No</button>
            </div>
        </div>
    </div>
  )
}

export default Modal