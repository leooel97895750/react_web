//匯入react模組
import React, { Component } from 'react';
import CalcDisplay from '../components/CalcDisplay';
import CalcButton from '../components/CalcButton';
const buttonData = [
  '7', '8', '9', '+',
  '4', '5', '6', '-',
  '1', '2', '3', '*',
  'c', '0', '=', '/'
]
class App extends Component {
  //建構式 - props屬性、state狀態
  //props是外部傳入的值，只能讀不能寫。state是私有值，用setState來改值
  constructor(props){
    super(props)
    this.state = {
      displayValue: 0
    }
  }
  //生命週期方法
  componentDidMount(){
    //已掛載到真實DOM中時要執行的程式碼
  }
  componentWillUnmount(){
    //即將卸載出真實DOM時要執行的程式碼
  }
  
  btnClick = value =>{
    this.setState({displayValue:value})
  }
  
  //渲染方法 - 只能有一個根元素
  render(){
    return(
      <div className="app-layout">
        <CalcDisplay text={this.state.displayValue} text2={this.state.displayValue*2} />
        <div className="calc-button-area">
          {
            buttonData.map((value, index) => (
              <CalcButton
                key={index}
                text={value}
                onClick={() => {this.btnClick(value)}}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

//輸出元件
export default App;
