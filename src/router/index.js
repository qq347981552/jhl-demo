import React,{Component} from "react"
import {Router,Route,hashHistory} from "react-router"
import Index from "../index/menu"
import Detail from "../detail"

export default class App extends Component{
    render(){
        // <ul>
        //   <li><a href="#/">首页</a></li>
        //     <li><a href="#/login">登陆</a></li>
        //       <li><a href="#/detail">详情页</a></li>
        // </ul>
        return (
            <div>

                <Router history={hashHistory}>
                    <Route path="/"  component={Index}></Route>
                    <Route path="/detail/:demoId"  component={Detail}></Route>
                </Router>
            </div>
        )
    }
}
