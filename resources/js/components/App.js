import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component { 
    constructor(props){
        super()
        this.state = {
            counter: 0
        }
    }

    componentDidMount(){
       this.count() 
       console.log('holaaaaa');
       
    }


    count(){
        console.log(('sipe'));
        
        setInterval(() => {            
           this.setState({
            counter: this.state.counter + 1
           }) 
        }, 1000)    
    }

    render(){
    return (<div className="container">The counter:  {this.state.counter}</div>)
    }
}


export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
