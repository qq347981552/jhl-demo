
import React, {Component} from 'react';

import Router from "./router"
import Top from './common/top'
import {BackTop,Layout } from 'antd'
import './App.css';



const {
    Header, Footer, Content,
} = Layout;

class App extends Component {
    render() {

        return (
            <div className="App" >

                <Layout>
                    <Header  style={{background:"#ffffff"}} >
                        <Top/>
                    </Header>
                    <Content>

                        <Router/>

                    </Content>
                    <Footer>
                        京海联（北京）科技有限公司 京备ICPxxxxxx号
                    </Footer>
                </Layout>


                <BackTop/>
            </div>
        );
    }
}

export default App;
