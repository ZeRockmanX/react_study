import React, { Component } from 'react';
//npm install -save axios 或者用yarn add axios (需要安装yarn)
import axios from 'axios';
class Tx13 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'init',
            list: []
        }
    }

    // 最好在最后这个生命周期里面使用
    componentDidMount() {
        axios.post('https://www.baidu.com')
            .then((res) => {
                console.log("axios 获取数据成功(then是回调函数)" + JSON.stringify(res))
                this.setState({
                    list: res.data
                })
            })
            .catch((error) => { console.log("axios 获取数据失败(catch捕获)" + error) })
    }

    render() {
        console.log(list)
        return (<div>Hello World</div>);
    }
}

export default Tx13;

/*
安装到当前项目下，但是不再package.json中关联
npm install axios

安装到全局目录下，react配置中prefix到地方
npm install -g axios

推荐使用 安装到当前项目下并且在package.json中追加关联(dependencies)处
npm install -save axios
或者用yarn add axios (需要安装yarn)

安装到当前项目下并且在package.json中追加关联(devDependencies)处
npm install -save-dev axios
*/