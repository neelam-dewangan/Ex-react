import React from 'react'
import InputPage from './InputPage'
import DisplayPage from './DisplayPage'


class App extends React.Component{
  render(){
    return(
      <div>
        <InputPage/>
        <DisplayPage/>
      </div>
    )
  }
}

export default App;