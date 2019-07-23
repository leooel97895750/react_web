import React from 'react'
import '../css/search.css'
//import open from '../img/searchbox.png'
import hide from '../img/searchbox_up.png'
import find from '../img/find.png'
import change from '../img/upsidedown.png'

class Search extends React.Component {
    render() {
        return(
            <div className="search">
                <img className="toggle" alt="" src={hide}></img>
                <br />
                <input className="input" placeholder="輸入起始點"></input>
                <br />
                <input className="input" placeholder="輸入目的地"></input>
                <img className="find" alt="" src={find}></img>
                <img className="change" alt="" src={change}></img>
            </div>
        )
    }
}

export default Search