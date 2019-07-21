/*
頁面的頂端，圖片輪流替換
*/
import React from 'react'
import '../css/main.css'
import p1 from '../img/p1.jpg'
import p2 from '../img/p2.jpg'
import p3 from '../img/p3.jpg'
import p4 from '../img/p4.jpg'
import p5 from '../img/p5.jpg'
import p6 from '../img/p6.jpg'
import p7 from '../img/p7.jpg'
import p8 from '../img/p8.jpg'
import p9 from '../img/p9.jpg'
import p10 from '../img/p10.jpg'
import p11 from '../img/p11.jpg'
import p12 from '../img/p12.jpg'
const picList1 = [p1, p2, p3, p4, p5, p6]
const picList2 = [p7, p8, p9, p10, p11, p12]

class Header extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            picNum1: 0,
            picNum2: 0,
            whoTurn: 0,
            opacity1: 1,
            timer1_counter: 0
        }
    }

    timer_plus() {
        this.setState({timer1_counter: this.state.timer1_counter+1})
        //圖片深淺交替
        if (this.state.timer1_counter >= 350) {
            if (this.state.whoTurn === 0) this.setState({opacity1: 1-((this.state.timer1_counter-350)/150)})
            else this.setState({opacity1: ((this.state.timer1_counter-350)/150)})
        }

        //500次換一張圖片
        if (this.state.timer1_counter === 500) {
            if (this.state.whoTurn === 0) {
                if (this.state.picNum1 < 5) {
                    this.setState({picNum1: this.state.picNum1+1})
                }
                else this.setState({picNum1: 0})
            }
            else {
                if (this.state.picNum2 < 5) {
                    this.setState({picNum2: this.state.picNum2+1})
                }
                else this.setState({picNum2: 0})
            }
            this.setState({timer1_counter: 0})
            this.setState({whoTurn: this.state.whoTurn ? 0 : 1})
        }
    }

    componentDidMount() {
        this.timer1 = setInterval(this.timer_plus.bind(this), 10);
    }

    componentWillUnmount() {
        clearInterval(this.timer1);
    }

    render() {
        let dystyle1 = {
            opacity: this.state.opacity1
        }
        let dystyle2 = {
            opacity: 1
        }
        return (
            <header>
                <img id="pic1" style={dystyle1} alt="" src={picList1[this.state.picNum1]}></img>
                <img id="pic2" style={dystyle2} alt="" src={picList2[this.state.picNum2]}></img>
            </header>
        )
    }
}
export default Header