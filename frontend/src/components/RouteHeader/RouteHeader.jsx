import { poppins } from "../../app/layout";

export default function RouteHeader({ children, specialPadding }) {
  return (
    <>
      <h3
        className={`${poppins.className} ${specialPadding} text-xl font-semibold tracking-wider text-stone-900`}
      >
        {children}
      </h3>
    </>
  );
}
