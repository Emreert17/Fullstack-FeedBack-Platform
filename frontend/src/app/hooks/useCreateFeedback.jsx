import { useState } from "react";
import { toast } from "sonner";
import { createFeedbackService } from "../services/feedbackService";

export function useCreateFeedback() {
  const [form, setForm] = useState({
    title: "",
    category: "feature",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFeedBackForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createFeedbackService({
        title: form.title,
        description: form.description,
        category: form.category,
      });

      setSubmitted(true);
      toast.success("Feedback submitted. Thanks for sharing!");
      setTimeout(() => setSubmitted(false), 3000);

      setForm({ title: "", category: "feature", description: "" });
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    setForm,
    isSubmitting,
    setIsSubmitting,
    submitted,
    setSubmitted,
    handleFeedBackForm,
  };
}
