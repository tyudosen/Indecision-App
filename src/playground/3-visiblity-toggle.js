
// const appRoot = document.getElementById('app')

// let buttonText = 'Show details'
// let flag = false;

// const buttonClick = ()=>{
//     if(buttonText === 'Show details'){flag = true; buttonText = 'Hide me';}
//     else{flag = false; buttonText = 'Show details'}
//     render()
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={buttonClick}>{buttonText}</button>
//             {flag && <p>Now you can see me</p>}
//         </div>
//     );

//     ReactDOM.render(template,appRoot);
// };

// render()
class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visible: false,
        }
    }
    toggleVisibility(){
        this.setState((prevState)=>{
            return {
                visible: !prevState.visible
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visible ? 'Hide Me!' : 'Show Details!'}</button>
                {this.state.visible && <p>Now you see me</p>}
            </div>
        )
    }
}
ReactDOM.render(<Visibility/>,document.getElementById('app'))