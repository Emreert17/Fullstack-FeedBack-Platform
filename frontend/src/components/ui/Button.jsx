export default function Button({ children, type, variant, width }) {
  const base =
    "text-sm font-medium rounded-md cursor-pointer transition duration-200 px-[16px] py-[6px]";
  const variants = {
    primary: "text-stone-50 bg-indigo-600 hover:bg-indigo-700 active:scale-95",
    secondary:
      "text-stone-50 bg-stone-800 border border-stone-800 hover:bg-stone-50 hover:text-stone-800",
  };
  return (
    <>
      <button type={type} className={`${width} ${base} ${variants[variant]}`}>
        {children}
      </button>
    </>
  );
}
