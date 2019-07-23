//匯入react模組
import React from 'react';
import Header from '../components/Header'
import Member from '../components/Member'
//import GoogleMaps from '../components/GoogleMaps';
import ReactMaps from '../components/ReactMap'
import Search from '../components/Search'
import Footer from '../components/Footer'

class App extends React.Component {
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
        <Header />
        <Member />
        <div className="map">
          <ReactMaps />
          <Search />
        </div>
        <Footer />
      </div>
    )
  }

}

//輸出元件
export default App;
