import React, {Component} from 'react';
import MyMenu from './index/menu'
import {BackTop,Layout } from 'antd'
import './App.css';

const {
    Header, Footer, Sider, Content,
} = Layout;

class App extends Component {
    render() {
        return (
            <div className="App">

                <Layout>
                    <Header >

                    </Header>
                    <Content>

                        <MyMenu/>
                        <br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

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
