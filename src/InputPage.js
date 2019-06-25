import React from 'react'


class InputPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputValue : '',
            inputList : []
            
        }
    }
    handleChange = (event) =>{
        this.setState({inputValue: event.target.value})
    }
    handleClick = (event) => {
        const tempList=this.state.inputList        
        tempList.push(this.state.inputValue);
        this.setState({
            inputList : tempList
        })
        console.log(this.state.inputList+'\n');
        
    }       
    
    render(){
        return(
            <div className="input-box">
                <input type="text" onChange={this.handleChange} value={this.state.inputValue}/>
                <button type="button" onClick={this.handleClick} value={this.state.inputValue}>Button</button>
                <div className="output">
                    {this.state.inputList}
                </div>
            </div>
            
        )
    }
}
export default InputPage;