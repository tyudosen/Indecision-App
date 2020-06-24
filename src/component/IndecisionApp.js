import React from 'react'
import AddOptions from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component{
    state = {
        options: this.props.options,
        selectedOption: undefined,
    };

    handlePick = ()=>{
        let index = Math.random() * this.state.options.length
        const option = this.state.options[Math.floor(index)]
        this.setState(()=>({selectedOption: option}))
    };

    handleSingularDelete = (option) =>{
        console.log('Singular');
        this.setState((prevState)=>({
            options: prevState.options.filter((optionCheck)=> option !== optionCheck)
        }))
    };

    handleDeleteOptions = () =>{
        this.setState(()=>{
            return{
                options: []
            }
        })
    };

    handleOptionModal = ()=>{
        this.setState( ()=>({selectedOption: undefined}))
    }
    handleAddOption = (option)=>{
        if(!option){return 'Enter valid value to add'}
        else if(this.state.options.indexOf(option) > -1){return 'Option already exsit'}
        this.setState((prevState)=>{
            return{
                options: prevState.options.concat([option])
            }
        })
    };

    componentDidMount(){
        console.log('Did mount');
        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if(options){this.setState(()=> ({options}))}
        }catch(e){
            //nothing
        } 
    };

    componentDidUpdate(prevProps,prevState){
        console.log('Did update');
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        } 
    };

    render(){
        const subtitle = 'Put your life in the hands of a computer'
        return(
            <div>
                <Header subtitle={subtitle}/>
                    <div className="container">
                    
                        <Action 
                            hasOption={this.state.options.length > 0}
                            handlePick={this.handlePick}
                         />
                    <div className='widget'>
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleSingularDelete={this.handleSingularDelete}
        
                        />
                        <AddOptions
                            handleAddOption={this.handleAddOption}
                        />      
                    </div>
                        
                    </div>
               
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleOptionModal={this.handleOptionModal}
                />
            </div>
        )
    };

}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp