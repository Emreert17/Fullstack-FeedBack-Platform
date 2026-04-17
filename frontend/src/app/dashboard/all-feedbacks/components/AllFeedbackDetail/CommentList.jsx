import Comment from "./Comment";

export default function CommentList({ comment }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        {comment.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
    </>
  );
}
