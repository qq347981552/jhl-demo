import React, {Component} from "react"
import {Button, Carousel} from 'antd';
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
        return (
            <div>
                <div style={{textAlign: "left", float: "left", width: "100%"}}>
                    <img src="/img/logo.png" style={{float: "left"}}/>
                    <div style={{float: "right"}}>
                        <Button type="primary" icon="login">微信登陆</Button>
                    </div>
                </div>
                <div style={{textAlign: "left", float: "left", width: "100%"}}>
                    <Carousel autoplay>
                        {
                            data.map((item, index) => {
                                return (
                                    <a href={item.url} key={index}>
                                        <div title={item.title}>

                                            <img src={item.src}/>

                                        </div>
                                    </a>

                                )
                            })
                        }


                    </Carousel>
                </div>
            </div>
        )
    }

}