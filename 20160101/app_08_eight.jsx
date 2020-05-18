class CommentForm extends React.Component{
  handleSubmit(e){
    e.preventDefault();//防止表单按钮提交 To prevent form buttom submit
    const form_author = this.refs.form_author.value.trim();
    const form_body = this.refs.form_body.value.trim();
    const form_form = this.refs.form_form;
    this.props.onSubmit({author:form_author,body:form_body});
    form_form.reset();
  }
  render(){
    return (
      <form className="comment-form" ref="form_form" onSubmit={e=>{this.handleSubmit(e)}}>
        <input type="text" placeholder="Your name" ref="form_author" />
        <input type="text" placeholder="Input your comment" ref="form_body" />
        <input type="submit" value="Add Comment" />
      </form>
    );
  }
}

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

  handleNewComment(form_data){
    const Show_comments = this.state.commentBox_comment_attribute;
    const newShow_comments = Show_comments.concat([form_data]);//concat是拼接文件
    this.setState({commentBox_comment_attribute:newShow_comments})

setTimeout(()=>{
    $.ajax({
      url:this.props.url,
      dataType:"json",
      type:"POST",//post拿不到文件，所以走的是error，it will go in to error
      data:form_data,
      success:return_data=>{
        this.setState({commentBox_comment_attribute:return_data})
      },
      error:(newShow_comments)=>{
        this.setState({commentBox_comment_attribute:Show_comments});
      },
    })
  },2000);
  }

  render() {
    return (
      <div className="comment-box">
        <h1>Comment</h1>
        <CommentList comments={this.state.commentBox_comment_attribute} />
        <CommentForm onSubmit={form_data => this.handleNewComment(form_data)} />
      </div>
    );
  }
}

var box = ReactDOM.render(
  <CommentBox url="comments.json"/>,
  document.getElementById('content')
);
