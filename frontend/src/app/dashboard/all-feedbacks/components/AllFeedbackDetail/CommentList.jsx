import Comment from "./Comment";

export default function CommentList({ comment }) {
  return (
    <>
      <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto p-6">
        {comment.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
    </>
  );
}
