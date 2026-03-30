"use client";
import { useState } from "react";
export default function FeedBackForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("feature");

  const handleFeedBackForm = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title,
            description,
            category,
          }),
        },
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data);
        console.log("Fetch is not working");
      }
      setTitle("");
      setDescription("");
      setCategory("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
          <form
            onSubmit={handleFeedBackForm}
            className="w-150 flex flex-col gap-5 pt-2"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold" htmlFor="title">
                Title
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="text-sm border-3 border-stone-200 p-[6px] rounded-md"
                type="text"
                name="title"
                required
                placeholder="Enter a title"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold" htmlFor="category">
                Category
              </label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="text-sm border-3 border-stone-200 p-[6px] rounded-md"
                name="category"
                id="category"
              >
                <option value="feature">Feature</option>
                <option value="bug">Bug</option>
                <option value="ui">UI</option>
                <option value="ux">UX</option>
                <option value="enhancement">Enhancement</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold" htmlFor="description">
                Description
              </label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="text-sm border-3 border-stone-200 h-[150px] p-[8px] rounded-md"
                name="description"
                id="description"
                placeholder="Describe your feedback..."
              ></textarea>
            </div>

            <button
              className="w-50 text-sm text-stone-50 bg-indigo-600 hover:bg-indigo-700 px-[15px] py-[5px] rounded-md cursor-pointer"
              type="submit"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
