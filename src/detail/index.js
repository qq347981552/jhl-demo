import React, {Component} from "react"
import {Row, Col, Card, Button} from 'antd';
import {httpGet} from "../util/http";
import Login from '../common/login'

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
                            <div>
                                {demo_title}
                            </div>
                            <div>
                                {demo_context}
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