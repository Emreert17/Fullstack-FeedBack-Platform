import Comment from "./Comment";

export default function CommentList({ comment }) {
  return (
    <div className="flex flex-col gap-4">
      {comment.map((c) => (
        <Comment key={c._id} comment={c} />
      ))}
    </div>
  );
}
