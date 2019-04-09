import React, {Component} from "react"
import {Row, Col} from 'antd'
import {Card} from 'antd'
import './index.css'

export default class content extends Component {
    render() {
        let data = this.props.data;
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    {
                        data.map((item, index) => {
                            var a=(<a href={'/'+item.demo_id}>查看详情</a>)
                            return (
                                <Col className="gutter-row" style={{marginBottom:"20px"}} key={index} span={8}>
                                    <Card
                                        title={item.demo_title}
                                        extra={a}
                                    >
                                        {item.demo_introduce}
                                    </Card>
                                </Col>
                            )
                        })
                    }


                </Row>
            </div>

        )
    }
}