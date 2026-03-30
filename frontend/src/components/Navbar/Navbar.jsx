"use client";
import { useAuth } from "../../app/context/authContext";
import BeforeLogin from "./BeforeLogin/BeforeLogin";

export default function Navbar() {
  const { user, loading } = useAuth();
  if (loading) return null;

  return <>{!user && <BeforeLogin />}</>;
}
