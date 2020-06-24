class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleSingularDelete = this.handleSingularDelete.bind(this)
        this.state = {
            options: props.options
        }
    }
    handleSingularDelete(option){
        console.log('Singular');
        this.setState((prevState)=>({
            options: prevState.options.filter((optionCheck)=> option !== optionCheck)
        }))
        
        
    }
    handlePick(){
        let index = Math.random() * this.state.options.length
        const option = this.state.options[Math.floor(index)]
        alert(option)
    }
    handleDeleteOptions(){
        this.setState(()=>{
            return{
                options: []
            }
        })
    }
    handleAddOption(option){
        if(!option){return 'Enter valid value to add'}
        else if(this.state.options.indexOf(option) > -1){return 'Option already exsit'}
        this.setState((prevState)=>{
            return{
                options: prevState.options.concat([option])
            }
        })
    }
    componentDidMount(){
        console.log('Did mount');
        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if(options){this.setState(()=> ({options}))}
        }catch(e){
            //nothing
        }
       
        
        
    }
    componentDidUpdate(prevProps,prevState){
        console.log('Did update');
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }
        
    }
    render(){
        const subtitle = 'Put your life in the hands of a computer'
        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOption={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleSingularDelete={this.handleSingularDelete}
                    
                />
                <AddOptions
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}
const Header = (props)=>{
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    ) 
}
Header.defaultProps = {
    title: 'Indecision App'
}

const Action = (props) =>{
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOption}
            >
                What should I do ?
            </button>
        </div>
    )
}


const Options = (props) =>{
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an option</p>}
            <ol>
            { 
                props.options.map((option)=>{
                    return(
                        <Option 
                            key={option} 
                            handleSingularDelete={props.handleSingularDelete} 
                            optionText={option}
                        />
                    )
                        
                })
            }
            </ol>
         
        </div>
    )
} 

const Option = (props) =>{
    return(
        <div>
            {props.optionText}
            <button 
                onClick={(e)=>{
                    props.handleSingularDelete(props.optionText)
                }}>
                Remove
            </button>
        </div>
    ) 
}

class AddOptions extends React.Component{
    constructor(props){
        super(props)
        this.formSubmit = this.formSubmit.bind(this)
        this.state = {
            error: undefined
        }
    }
    formSubmit(e){
        e.preventDefault();//prevent full page refresh
        const option = e.target.elements.formInput.value.trim();
        

        
        const error = this.props.handleAddOption(option)
        this.setState(()=>{
            return {error}
        })
        if(!error){e.target.elements.formInput.value = ''}
        
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.formSubmit}>
                    <input type="text" name="formInput"></input>
                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))