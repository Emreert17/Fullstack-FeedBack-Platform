import Link from "next/link";
import Logo from "../../../components/Logo/Logo";
export default function LoginHeader() {
  return (
    <>
      <Link href="/">
        <Logo />
      </Link>
      <h3 className="font-medium text-lg">Log in to your account</h3>
    </>
  );
}
