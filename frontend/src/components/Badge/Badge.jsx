export default function Badge({ children }) {
  return (
    <>
      <span className="text-sm font-semibold tracking-wider text-blue-700">
        {children}
      </span>
    </>
  );
}
