import React from 'react'

export default class AddOptions extends React.Component{
    state = {
        error: undefined
    }
    formSubmit = (e)=>{
        e.preventDefault();//prevent full page refresh
        const option = e.target.elements.formInput.value.trim();
        console.log(option);
        
        

        
        const error = this.props.handleAddOption(option)
        console.log(error);
        
        this.setState(()=>{
            return {error}
        })
        if(!error){e.target.elements.formInput.value = ''}
    }
    render(){
        return(
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form onSubmit={this.formSubmit} className='add-option'>
                    <input className='add-option__input'type="text" name="formInput"></input>
                    <button className='button'>Submit</button>
                </form>
                
            </div>
        )
    }
}

