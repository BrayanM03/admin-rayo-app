import React, { Component } from 'react'
import Header from "./header.js"
import Menu from "./menu.js"


export default class App extends Component {
    render() {
        return (
            <div id="wrapper">
            <Menu/> 
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                 <Header/>  
                 </div>
                 </div>          
                
                
            </div>
        )
    }
}
