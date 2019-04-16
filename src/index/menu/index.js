import React, {Component} from "react"
import {Menu, Icon} from 'antd'
import { httpGet} from "../../util/http"
import Content from "../content"

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;


export default class MyMenu extends Component {
    state = {
        current: '0',
        data: [],
        showData: [],
        typeName: ""
    }

    handleClick = (e) => {
        let data = this.state.data;
        this.setState({
            current: e.key,
            showData: data[e.key]["type_Data"],
            typeName: data[e.key]["type_title"]
        });
    }


    componentDidMount() {
        httpGet("/index.json")
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data["data"].length > 0) {
                    this.setState({
                        data: data["data"],
                        showData: data["data"][0]["type_Data"],
                        typeName: data["data"][0]["type_title"]
                    })
                }
            });
    }

    render() {
        let data = this.state.data;
        let dataShow=[];
        for(var index in data){
            var  item=data[index];
            dataShow.push(
                <Menu.Item key={index} style={{fontSize:"16px"}}>
                    {/*<div style={{fontSize:"16px;"}}>*/}
                    <Icon type={item.type_icon}/>{item.type_title}
                    {/*</div>*/}
                </Menu.Item>
            )
        }
        return (
            <div>
                <Menu onClick={this.handleClick}
                      selectedKeys={[this.state.current]}
                      mode="horizontal">
                    {
                        // data.map((item, index) => {
                        dataShow

                    }
                </Menu>

                <div style={{width:"1200px",margin: "0 auto"}}>
                    <div style={{textAlign:"center",fontSize:"24px",margin:"40px 0 20px 0",color:"#0d1a26"}}>
                        {this.state.typeName}演示案例
                    </div>
                    <Content data={this.state.showData}/>
                </div>

            </div>

        );
    }

}