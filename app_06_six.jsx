var CommentList = React.createClass({
  render(){
    var commentsNode = this.props.comments.map(function(comment_attribute,index){
      return <Comment key={'index-'+index} author={comment_attribute.author}>{comment_attribute.body}</Comment>
    });
    return(
      <div>
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
var other_comment_attribute=[
  {author:"qiliang3",body:"this is my comment3"},
];

var CommentBox = React.createClass({
  getInitialState() {
    return(
      this.state={
        commentBox_comment_attribute:comment_attribute
      }
    );
  },
  run(){
    this.setState({
      commentBox_comment_attribute:other_comment_attribute
    });
  },
  render() {
    return (
      <div className="comment-box">
        <h1>Comment</h1>
        <CommentList comments={this.state.commentBox_comment_attribute} />
      </div>
    );
  }
});

var box = ReactDOM.render(
  <CommentBox/>,
  document.getElementById('content')
);
box.run();
