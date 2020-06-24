console.log('hello from app.js');

const appRoot = document.getElementById('app');

const appObj = {
    title: 'A title',
    subTitle: '',
    options: []
}

const onFormSubmit = (e)=>{
    e.preventDefault()
    const option = e.target.elements.option.value // grab value from input
    if(option){appObj.options.push(option); e.target.option.value = '';}
    render()
    
    
}

const decide = ()=>{
    const index = Math.random() * appObj.options.length;
    const option = appObj.options[Math.floor(index)]
    alert(option);
    
};

const removeAll = ()=>{
    appObj.options = []
    render()
}
let listKey = 1;
const render = ()=>{
    const template = (
        <div>
            <h1>{appObj.title}</h1>
            {appObj.subTitle && <p>{appObj.subTitle}</p>}
            {/*<p>{appObj.options.length > 0 ? 'Here are your options: ' + appObj.options : 'No options' }</p> */}
            <button disabled={appObj.options.length === 0} onClick={decide}>What should I do</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {appObj.options.map((option)=>{
                    return <li key={listKey++}>{option}.</li>;
                    
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
}

render()













