"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LoadingScreen from "@/app/LoadingScreen";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("novaUser");

    if (!user) {
      router.push("/login");
      return;
    }

    setChecking(false);
  }, [router]);

  if (checking) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}