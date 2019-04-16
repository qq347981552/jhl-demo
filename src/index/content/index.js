import React, {Component} from "react"
import {Row, Col,Card} from 'antd'
import {Link} from "react-router"
import './index.css'

export default class content extends Component {
    render() {
        let data = this.props.data;
        let dataShow=[];
        for(var index in data){
            var  item=data[index];
            var a=(<Link to={'/detail/'+item.demo_id}>查看详情</Link>)
            dataShow.push(
                <Col className="gutter-row" style={{marginBottom:"20px"}} key={index} span={8}>
                    <Card
                        title={item.demo_title}
                        extra={a}
                    >
                        {item.demo_introduce}
                    </Card>
                </Col>
            )
        }
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    {
                        dataShow
                    }


                </Row>
            </div>

        )
    }
}