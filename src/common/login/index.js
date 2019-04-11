import React, {Component} from "react"
import {Button,Avatar } from "antd"
import cookie from 'react-cookies'
import {httpGet} from "../../util/http";
import {Encrypt, Decrypt} from "../../util/aes";


export default class Login extends Component {
    constructor() {
        super();
        var data = cookie.load('user_data');
        if (!data) {
            data = {}
        } else {
            data = JSON.parse(JSON.parse(Decrypt(data)));
        }

        this.state = {
            data: data
        }
        ;
    }

    submit = (e, data) => {

        httpGet("/login.json")
            .then(res => {
                return res.json()
            })
            .then(data => {
                let a = Encrypt(JSON.stringify(data));
                cookie.save('user_data', a, 60);
                this.setState({
                    data:data
                })
            });

        ///删除cookie
        ///
        // cookie.remove('userId');
    };

    render() {
        var {data} = this.state;
        var {type} =this.props;
        console.log(typeof(data),data["openid"])
        if (data["openid"]) {
            if(type=="top"){

                return (
                   <div>
                       <Avatar style={{ marginTop:"-6.5px" }} src={data["headimgurl"]} />
                       <div style={{ marginLeft:"6px",float:"right" }}>{data["nickname"]}</div>
                   </div>

                )
            }else{
                return (
                   <div>

                   </div>

                )
            }

        }else{
            return (

                <Button type="primary" onClick={this.submit.bind(this)} icon="login">微信登陆</Button>
            )
        }


    }
}