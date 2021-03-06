import React, {Component} from "react"
import { Carousel} from 'antd';
import Login from '../login'
import {httpGet} from "../../util/http";
import "./index.css"


export default class Top extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        httpGet("/img.json").then(res => {
            return res.json()
        }).then(data => {
            this.setState({
                data: data["data"]
            })
        })
    }

    render() {

        let data = this.state.data;

        let dataShow=[];
        for(var index in data){
            var  item=data[index];
            dataShow.push(
                <a href={item.url} key={index}>
                    <div title={item.title}>

                        <img src={item.src}  alt=""/>

                    </div>
                </a>
            )
        }

        return (
            <div>
                <div style={{textAlign: "left", float: "left", width: "100%"}}>
                    <img src="/img/logo.png" style={{float: "left"}}  alt=""/>
                    <div style={{float: "right"}}>
                        <Login type="top" />
                    </div>
                </div>
                <div style={{textAlign: "left", float: "left", width: "100%"}}>
                    <Carousel autoplay>
                        {
                            dataShow
                        }
                    </Carousel>
                </div>
            </div>
        )
    }

}