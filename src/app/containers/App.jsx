//匯入react模組
import React, { Component } from 'react';

class App extends Component {
  //建構式 - props屬性、state狀態
  //props是外部傳入的值，只能讀不能寫。state是私有值，用setState來改值
  constructor(props){
    super(props)
    this.state = {
      total: 1
    }
  }
  //生命週期方法
  componentDidMount(){
    //已掛載到真實DOM中時要執行的程式碼
  }
  componentWillUnmount(){
    //即將卸載出真實DOM時要執行的程式碼
  }
  AddClick = () =>{
    this.setState({ total: this.state.total + 1})
  }
  SubClick = () =>{
    this.setState({ total: this.state.total - 1})
  }
  //渲染方法 - 只能有一個根元素
  render(){
    return(
      <div>
        <h1>{this.state.total}</h1>
        <button onClick={this.AddClick}>+</button>
        <button onClick={this.SubClick}>-</button>
      </div>
    )
  }
}

//輸出元件
export default App;
