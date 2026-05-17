import { IoIosSend } from "react-icons/io";

export default function CommentInput({ handleComment, setText, text }) {
  return (
    <form
      onSubmit={handleComment}
      className="
        flex items-center gap-3
        rounded-2xl border border-slate-200
        bg-slate-50 px-4 py-3
        transition-all duration-200
        focus-within:border-violet-300
        focus-within:bg-white
        focus-within:shadow-sm
      "
    >
      {/* INPUT */}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Write a comment..."
        className="
          flex-1 bg-transparent
          text-sm text-slate-700
          placeholder:text-slate-400
          outline-none
        "
      />

      {/* SEND BUTTON */}
      <button
        type="submit"
        disabled={!text.trim()}
        className="
          flex h-10 w-10 items-center justify-center
          rounded-xl bg-black text-white
          transition-all duration-200

          hover:bg-slate-800
          active:scale-95

          disabled:cursor-not-allowed
          disabled:bg-slate-200
          disabled:text-slate-400
        "
      >
        <IoIosSend size={18} />
      </button>
    </form>
  );
}
