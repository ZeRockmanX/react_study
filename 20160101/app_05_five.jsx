var CommentList = React.createClass({
  render(){
    var commentsNode = this.props.comments.map(function(comment_attribute,index){
      return <Comment key={'index-'+index} author={comment_attribute.author}>{comment_attribute.body}</Comment>
    });
    return(
      <div className="comment-list">
      {commentsNode}
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

var comment_attribute=[
  {author:"qiliang1",body:"this is my comment1"},
  {author:"qiliang2",body:"this is my comment2"}
];

var CommentBox = React.createClass({
  render() {
    return (
      <div className="comment-box">
        <h1>Comment</h1>
        <CommentList comments={comment_attribute} />
      </div>
    );
  }
});

var Show = ReactDOM.render(
  <CommentBox/>,
  document.getElementById('content')
);
