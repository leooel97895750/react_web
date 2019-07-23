import React from 'react'
import '../css/main.css'
import member from '../img/member.png'

class Member extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuDisplay: 'none',
        }
    }
    memberClick = () => {
        if (this.state.menuDisplay === 'none') {
            this.setState({menuDisplay: 'block'})
        }
        else {
            this.setState({menuDisplay: 'none'})
        }
    }
    render() {
        let style = {
            width: '60px',
            height: '60px'
        }
        let menu = {
            display: this.state.menuDisplay,
        }
        return(
            <div className="member">
                <img style={style} className="member_img" alt="會員功能" src={member} onClick={this.memberClick}></img>
                <div style={menu} className="member_menu">
                    <ul>
                        <li>搜尋紀錄</li>
                        <li>歷史貢獻</li>
                        <li>主題設定</li>
                        <li>提供意見</li>
                        <li>帳號登出</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Member