import { IoIosSend } from "react-icons/io";
export default function CommentInput({ handleComment, setText, text }) {
  return (
    <>
      <form onSubmit={handleComment} className="w-full flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-11/12 text-sm border-b-2 border-stone-200 p-[6px] outline-none"
          type="text"
          placeholder="Write a comment..."
        />
        <button
          className="flex justify-center items-center w-1/12 text-stone-50 bg-stone-800 rounded-lg active:scale-90 cursor-pointer"
          type="submit"
        >
          <IoIosSend size={20} />
        </button>
      </form>
    </>
  );
}
