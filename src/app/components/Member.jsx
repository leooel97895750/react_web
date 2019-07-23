import React from 'react'
import '../css/main.css'
import member from '../img/member.png'
import history from '../img/history.png'
import contribution from '../img/contribution.png'
import setting from '../img/setting.png'
import information from '../img/information.png'
import logout from '../img/logout.png'

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
        let menu = {
            display: this.state.menuDisplay,
        }
        let img_style = {
            width: '22px',
            height: '22px',
            marginLeft: '10px'
        }
        return(
            <div className="member">
                <img className="member_img" alt="會員功能" src={member} onClick={this.memberClick}></img>
                <div style={menu} className="member_menu">
                    <ul>
                        <li><b>訪客</b></li>
                        <hr />
                        <li className="menu_button"><img style={img_style} alt="" src={history}></img> 搜尋紀錄</li>
                        <li className="menu_button"><img style={img_style} alt="" src={contribution}></img> 歷史貢獻</li>
                        <li className="menu_button"><img style={img_style} alt="" src={setting}></img> 主題設定</li>
                        <li className="menu_button"><img style={img_style} alt="" src={information}></img> 提供意見</li>
                        <li className="menu_button"><img style={img_style} alt="" src={logout}></img> 帳號登出</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Member