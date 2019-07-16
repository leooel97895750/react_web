//匯入react模組
import React, { Component } from 'react';
import TextInput from '../components/TextInput'

class App extends Component {
  //建構式 - props屬性、state狀態
  //props是外部傳入的值，只能讀不能寫。state是私有值，用setState來改值
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  //生命週期方法
  componentDidMount(){
    //已掛載到真實DOM中時要執行的程式碼
  }
  componentWillUnmount(){
    //即將卸載出真實DOM時要執行的程式碼
  }
  
  //渲染方法 - 只能有一個根元素
  render(){
    return(
      <div>
        <TextInput initText="輸入文字吧" />
      </div>
    )
  }
}

//輸出元件
export default App;
