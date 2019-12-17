# 安装 React
````````````````````````````````````````````````````````````````````````````````````````
npm install -g create-react-app
create-react-app my-app
cd my-app
npm start
````````````````````````````````````````````````````````````````````````````````````````
## React 元素渲染
````````````````````````````````````````````````````````````````````````````````````````
const element = <h1>Hello, world!</h1>;

ReactDOM.render(
    element,
    document.getElementById('example')
);

var myStyle = {color:'red',textAlign:'center'}

class Name extends React.Component {
  render() {
    return <h1 style={myStyle}>网站名称：{this.props.name}</h1>;
  }
}

class Url extends React.Component {
  render() {
    return <h1>网站地址：{this.props.url}</h1>;
  }
}

class Nickname extends React.Component {
  render() {
    return <h1>网站地址：{this.props.nickname}</h1>;
  }
}

function App(props) {
    return (
        <div>
            <Name name={props.name}/>
            <Url  url={props.url}/>
            <Nickname  nickname={props.nickname}/>
        </div>
    );
}

ReactDOM.render(
     <App name={"菜鸟教程"} url={"http://www.runoob.com"} nickname={"Runoob"}/>,
    document.getElementById('example')
);
````````````````````````````````````````````````````````````````````````````````````````

````````````````````````````````````````````````````````````````````````````````````````
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('example')
  );
}

setInterval(tick, 1000);
````````````````````````````````````````````````````````````````````````````````````````

````````````````````````````````````````````````````````````````````````````````````````
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('example')
  );
}

setInterval(tick, 1000);
````````````````````````````````````````````````````````````````````````````````````````
# React JSX
````````````````````````````````````````````````````````````````````````````````````````
const element = <h1>Hello, world!</h1>;
````````````````````````````````````````````````````````````````````````````````````````
这种看起来可能有些奇怪的标签语法既不是字符串也不是 HTML。它被称为 JSX

我们可以在 JSX 中使用 JavaScript 表达式。表达式写在花括号 {} 中。实例如下：
````````````````````````````````````````````````````````````````````````````````````````
ReactDOM.render(
    <div>
      <h1>{1+1}</h1>
    </div>
    ,
    document.getElementById('example')
);
````````````````````````````````````````````````````````````````````````````````````````
在 JSX 中不能使用 if else 语句，但可以使用 conditional (三元运算) 表达式来替代。

以下实例中如果变量 i 等于 1 浏览器将输出 true, 如果修改 i 的值，则会输出 false.
````````````````````````````````````````````````````````````````````````````````````````
ReactDOM.render(
    <div>
      <h1>{i == 1 ? 'True!' : 'False'}</h1>
    </div>
    ,
    document.getElementById('example')
);
````````````````````````````````````````````````````````````````````````````````````````
## 样式
React 推荐使用内联样式。我们可以使用 camelCase 语法来设置内联样式. React 会在指定元素数字后自动添加 px 。以下实例演示了为 h1 元素添加 myStyle 内联样式：
````````````````````````````````````````````````````````````````````````````````````````
var myStyle = {
    fontSize: 100,
    color: '#FF0000'
};
ReactDOM.render(
    <h1 style = {myStyle}>菜鸟教程</h1>,
    document.getElementById('example')
);
````````````````````````````````````````````````````````````````````````````````````````
## 注释
注释需要写在花括号中，实例如下：
````````````````````````````````````````````````````````````````````````````````````````
ReactDOM.render(
    <div>
    <h1>菜鸟教程</h1>
    {/*注释...*/}
     </div>,
    document.getElementById('example')
);
````````````````````````````````````````````````````````````````````````````````````````
## 数组
JSX 允许在模板中插入数组，数组会自动展开所有成员：
````````````````````````````````````````````````````````````````````````````````````````
var arr = [
  <h1>菜鸟教程</h1>,
  <h2>学的不仅是技术，更是梦想！</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);
````````````````````````````````````````````````````````````````````````````````````````
## React 组件
````````````````````````````````````````````````````````````````````````````````````````
function HelloMessage(props) {
    return <h1>Hello World!</h1>;
}

const element = <HelloMessage />;

ReactDOM.render(
    element,
    document.getElementById('example')
);
````````````````````````````````````````````````````````````````````````````````````````
注意，原生 HTML 元素名以小写字母开头，而自定义的 React 类名以大写字母开头，比如 HelloMessage 不能写成 helloMessage。
除此之外还需要注意组件类只能包含一个顶层标签，否则也会报错。

我们不能把样式写在该组件中,需要分开写
````````````````````````````````````````````````````````````````````````````````````````
var myStyle = {color:'red',textAlign:'center'}
class HelloMessage extends React.Component {
    render() {
        return <h1 style={myStyle}>Hello World！</h1>;
    }
}
````````````````````````````````````````````````````````````````````````````````````````
## React State(状态)
````````````````````````````````````````````````````````````````````````````````````````
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('example')
);
````````````````````````````````````````````````````````````````````````````````````````
componentDidMount() 与 componentWillUnmount() 方法被称作生命周期钩子。

在组件输出到 DOM 后会执行 componentDidMount() 钩子，我们就可以在这个钩子上设置一个定时器。

this.timerID 为定时器的 ID，我们可以在 componentWillUnmount() 钩子中卸载定时器。

关于挂载时的 setInterval 中调用 tick() 的方式 ()=>this.tick()：

#### 1、()=>this.tick()
()=>this.tick() 是 ES6 中声明函数的一种方式，叫做箭头函数表达式，引入箭头函数有两个方面的作用：更简短的函数并且不绑定 this。
````````````````````````````````````````````````````````````````````````````````````````
var f = ([参数]) => 表达式（单一）
// 等价于以下写法
var f = function([参数]){
   return 表达式;
}
````````````````````````````````````````````````````````````````````````````````````````
箭头函数的基本语法如下：
````````````````````````````````````````````````````````````````````````````````````````
(参数1, 参数2, …, 参数N) => { 函数声明 }
(参数1, 参数2, …, 参数N) => 表达式（单一）
//相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }

// 当只有一个参数时，圆括号是可选的：
(单一参数) => {函数声明}
单一参数 => {函数声明}

// 没有参数的函数应该写成一对圆括号。
() => {函数声明}
根据以上概念，尝试将 setInterval 中调用 tick() 的方式改为通常声明方式：

this.timerID = setInterval(function(){
    return this.tick();
  },1000
);
但是会报错，tick() 不是一个方法。
````````````````````````````````````````````````````````````````````````````````````````
#### 2、this.tick()
this.tick() 中的 this 指代的是 function，而不是我们想要的指代所在的组件类 Clock，所以我们要想办法让 this 能被正常指代。这里我们采用围魏救赵的办法:
````````````````````````````````````````````````````````````````````````````````````````
let that = this;
this.timerID = setInterval(function () {
  return that.tick();
},1000);
````````````````````````````````````````````````````````````````````````````````````````
在闭包函数的外部先用 that 引用组件 Clock 中挂载组件方法 componentDidMount() 中 this 的值，然后在 setInterval 中闭包函数中使用that，that 无法找到声明，就会根据作用域链去上级（上次层）中继承 that，也就是我们引用的组件类 Clock 中的 this。到此为止，将 () => this.tick()等价代换为了我们熟悉的形式。

## React Props
state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变
````````````````````````````````````````````````````````````````````````````````````````
class WebSite extends React.Component {
  constructor() {
      super();
 
      this.state = {
        name: "菜鸟教程",
        site: "https://www.runoob.com"
      }
    }
  render() {
    return (
      <div>
        <Name name={this.state.name} />
		// 将this.props.name以name名称传给Name组件，Name通过this.props.title来使用其值
        <Link site={this.state.site} />
      </div>
    );
  }
}

class Name extends React.Component {
  render() {
    return (
      <h1>{this.props.name}</h1>
	  // 将this.props.name以name名称传给Name组件，Name通过this.props.title来使用其值
    );
  }
}

class Link extends React.Component {
  render() {
    return (
      <a href={this.props.site}>
        {this.props.site}
      </a>
    );
  }
}

ReactDOM.render(
  <WebSite />,
  document.getElementById('example')
);
````````````````````````````````````````````````````````````````````````````````````````
## React 事件处理
React 元素的事件处理和 DOM 元素类似。但是有一点语法上的不同:

React 事件绑定属性的命名采用驼峰式写法，而不是小写。
如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM 元素的写法)
````````````````````````````````````````````````````````````````````````````````````````
HTML 通常写法是：
<button onclick="activateLasers()">
  激活按钮
</button>

React 中写法为：
<button onClick={activateLasers}>
  激活按钮
</button>
````````````````````````````````````````````````````````````````````````````````````````
## React 条件渲染 (if else)
````````````````````````````````````````````````````````````````````````````````````````
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('example')
);
````````````````````````````````````````````````````````````````````````````````````````
## React 列表 & Keys
````````````````````````````````````````````````````````````````````````````````````````
onst numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('example')
);
````````````````````````````````````````````````````````````````````````````````````````
### 用keys提取组件
元素的 key 只有在它和它的兄弟节点对比时才有意义。
比方说，如果你提取出一个 ListItem 组件，你应该把 key 保存在数组中的这个 `<ListItem />` 元素上，而不是放在 ListItem 组件中的 `<li>` 元素上。
````````````````````````````````````````````````````````````````````````````````````````
function ListItem(props) {
  // 这里不需要指定key:
  return <li>{props.value}</li>;
}
 
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // key应该在数组的上下文中被指定
    <ListItem key={number.toString()}
              value={number} />
 
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
 
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('example')
);
````````````````````````````````````````````````````````````````````````````````````````
## React AJAX
````````````````````````````````````````````````````````````````````````````````````````
class UserGist extends React.Component {
  constructor(props) {
      super(props);
      this.state = {username: '', lastGistUrl: ''};
  }
 
 
  componentDidMount() {
    this.serverRequest = $.get(this.props.source, function (result) {
      var lastGist = result[0];
      this.setState({
        username: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
    }.bind(this));
  }
 
  componentWillUnmount() {
    this.serverRequest.abort();
  }
 
  render() {
    return (
      <div>
        {this.state.username} 用户最新的 Gist 共享地址：
        <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
      </div>
    );
  }
}
 
ReactDOM.render(
  <UserGist source="https://api.github.com/users/octocat/gists" />,
  document.getElementById('example')
);
````````````````````````````````````````````````````````````````````````````````````````