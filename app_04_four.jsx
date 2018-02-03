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
        <Comment author="qiliang1">
          This is my comment.
        </Comment>
        <Comment author="qiliang2">
          This is my comment.
        </Comment>
        <Comment author="qiliang3">
          This is my comment.
        </Comment>
      </div>
    );
  }
});

var Comment = React.createClass({
  render(){
    return(
      <div>
        <div className="comment-body">
          {this.props.children}
        </div>
        <div className="comment-author">
          {this.props.author}
        </div>
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
