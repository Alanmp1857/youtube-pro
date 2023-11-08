import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-gray-300 border-y-white border-r-white ml-5">
        {/* <Comment key={index} data={comment} />
        <Comment key={index} data={comment} />
        <Comment key={index} data={comment} /> */}
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
