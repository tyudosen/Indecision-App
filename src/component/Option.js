import React from 'react'

const Option = (props) =>{
    return(
        <div className='option'>
            {<p className='option__text'>{`${props.index}. ${props.optionText}`}</p>}
            <button 
                className='button button--link'
                onClick={(e)=>{
                    props.handleSingularDelete(props.optionText)
                }}>
                Remove
            </button>
        </div>
    ) 
}

export default Option;