//匯入react模組
import React, { Component } from 'react';
import TodoInput from '../components/TodoInput'
import TodoItem from '../components/TodoItem'

class App extends Component {
  //建構式 - props屬性、state狀態
  //props是外部傳入的值，只能讀不能寫。state是私有值，用setState來改值
  constructor(props){
    super(props)
    this.state = {
      items: [],
      inputValue: ''
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
        <TodoInput
          initText="輸入文字"
          onKeyPress={this.handleTodoInputKeyPress}
          onChange={this.handleTodoInputChange}
          value={this.state.inputValue}
        />
        <ul>
          {
            this.state.items.map((value, index) => (
              <TodoItem
                key={index}
                text={value}
                deleteMethod={() => {this.handleTodoItemDelete(index)}}
              />
            ))
          }
        </ul>
      </div>
    )
  }

  handleTodoItemDelete = (id) =>{
    const newItems = this.state.item.filter((value, index) => (
      index !== id
    ))
    this.setState({ item: newItems})
  }
}

//輸出元件
export default App;
