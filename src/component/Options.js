import React from 'react'
import Option from './Option'


const Options = (props) =>{
    return(
        
        <div>
            
            <div className='widget-header'>
                <h3 className='widget-header__title'>Your Options</h3>
            

                <button 
                    onClick={props.handleDeleteOptions}
                    className='button button--link'
                >
                    Remove all
                </button>
            </div>
            <div className='widget__promptText'>{props.options.length === 0 && <p>Please add an option</p>}</div>
            { 
                props.options.map((option,index)=>{
                    return(
                        <Option 
                            key={option} 
                            handleSingularDelete={props.handleSingularDelete} 
                            optionText={option}
                            index={index + 1}
                        />
                    )
                        
                })
            }
         
        </div>
    )
} ;

export default Options;