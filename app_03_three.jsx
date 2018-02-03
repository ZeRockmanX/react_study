class CommentForm extends React.Component{
  render(){
    return(
      <div className="comment-form">
      comment-form
      </div>
    );
  }
}

var CommentList = React.createClass({
  render(){
    return(
      <div className="comment-list">
      comment-list
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render() {
    return (
      <div className="comment-box">
        <h1>Comment</h1>
        <CommentList/>
        <CommentForm/>
      </div>
    );
  }
});
var Show = ReactDOM.render(
  <CommentBox/>,
  document.getElementById('content')
);
