var Count = React.createClass({
getInitialState: function() {
  return(this.state={count:0});
},
update: function(){
  this.setState({
    countShow:++this.state.count
  });
},
  render: function() {
    return (
      <div>
        <h1>Count</h1>
        <h3>{this.state.count}</h3>
        <label>
        <input type="button" value="ClickMe" onClick={this.update} />
        </label>
      </div>
    );
  }
});
var manual = ReactDOM.render(
  <Count/>,
  document.getElementById('content')
);
//Chrome Console please use $r.update,but first click react plug-in
manual.update();
