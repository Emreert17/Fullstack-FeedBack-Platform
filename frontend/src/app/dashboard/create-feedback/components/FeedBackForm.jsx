"use client";
import { useState } from "react";
import Button from "../../../../components/ui/Button";
import { createFeedback } from "../../../data/data";
import FeedbackInput from "../components/FeedbackInput";
export default function FeedBackForm() {
  const [form, setForm] = useState({
    title: "",
    category: "feature",
    description: "",
  });

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
            title: form.title,
            description: form.description,
            category: form.category,
          }),
        },
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data);
        console.log("Fetch is not working");
      }
      setForm({ title: "", category: "feature", description: "" });
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
            {createFeedback.map((field) => (
              <FeedbackInput
                key={field.id}
                label={field.label}
                name={field.name}
                type={field.type}
                value={form[field.name]}
                onChange={(e) =>
                  setForm({ ...form, [field.name]: e.target.value })
                }
                placeholder={field.placeholder}
                options={field.options}
              />
            ))}
            <Button width="w-50" type="submit" variant="primary">
              Submit Feedback
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
