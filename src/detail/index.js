import React, {Component} from "react"
import {Row, Col, Card, Button,Typography } from 'antd';
import {httpGet} from "../util/http";
import Login from '../common/login'
const { Title,Text } = Typography;

export default class Detail extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        // var {demoId} = this.props.params;
        httpGet("/detail.json")
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({
                    data: data
                })
            })

    }

    render() {
        let {demo_title, demo_context, domo_url, dome_getUser} = this.state.data;
        var cardContext;
        if (domo_url) {
            cardContext = (
                <div >
                    <Button style={{marginBottom:"20px"}} type="primary">进入演示系统</Button>
                    <Button type="primary">获取登录密码</Button>
                </div>
            );
        } else {
            cardContext = (
                <div>
                    登录后获得演示账号及演示地址
                    <br/>
                    <Login/>
                </div>
            );
        }

            return (

                <div style={{width: "1200px", margin: "0 auto"}}>
                    <Row>
                        <Col span={18}>
                            <div style={{ width:"100%",height:"24px" }}></div>
                            <Title>
                                <h4 >{demo_title}</h4>
                            </Title>
                            <div style={{ padding:"0 20px",boxSizing:"border-box" }}>
                                <Text  >{demo_context}</Text>
                            </div>
                        </Col>
                        <Col span={6}>
                            <Col span={20}>
                                <Card title="案例名称平台名称" bordered={false}>
                                    {cardContext}
                                </Card>
                            </Col>
                        </Col>
                    </Row>
                </div>
            )
        }
    }