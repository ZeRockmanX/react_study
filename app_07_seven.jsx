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

class CommentBox extends React.Component{
  constructor(props) {
      super();
      this.state={
        commentBox_comment_attribute:props.comment_attribute || []
      };

  }
  loadDataFromServer(){
    $.ajax({
      url:this.props.url,
      dataType:"json",
      // success:function(return_data){
      //   this.setState({commentBox_comment_attribute:return_data});
      // }.bind(this),
      success:return_data=>{
        this.setState({commentBox_comment_attribute:return_data});
      },
      error:(status,err)=>{
        this.setState({commentBox_comment_attribute:return_data});
      },
    })
  }
  componentDidMount(){
    this.loadDataFromServer();
  }
  render() {
    return (
      <div className="comment-box">
        <h1>Comment</h1>
        <CommentList comments={this.state.commentBox_comment_attribute} />
      </div>
    );
  }
}

var box = ReactDOM.render(
  <CommentBox url="comments.json"/>,
  document.getElementById('content')
);
