export default function LoginInput({ input, handleChange, value }) {
  return (
    <>
      <input
        className="text-sm border-2 border-stone-300  border p-[6px] rounded-md"
        onChange={handleChange}
        value={value}
        type={input.type}
        name={input.name}
        placeholder={input.placeholder}
        required
      />
    </>
  );
}
