export default function Badge({ children }) {
  return (
    <>
      <span className="text-xs font-semibold tracking-wider text-center text-blue-700">
        {children}
      </span>
    </>
  );
}
