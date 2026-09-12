"use client";
import { useState } from "react";
import Image from "next/image";
import LoadingScreen from "@/app/LoadingScreen";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    localStorage.setItem(
      "novaUser",
      JSON.stringify({
        username,
        password,
      }),
    );

    e.currentTarget.reset();
    setIsLoading(true);

    setTimeout(() => {
      router.push("/");
    }, 1500);
  };
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="login-page flex min-h-screen items-center justify-center bg-[linear-gradient(150deg,#020419,#020417,#050a3e)] px-4 py-10">
      <div className="login-card w-full max-w-md">
        <form
          onSubmit={handleLogin}
          className="fieldset rounded-[30px] border border-[var(--nova-border)] bg-[var(--nova-glass)] p-6 shadow-[var(--nova-shadow)] backdrop-blur-[60px] sm:p-8"
        >
          <div className="mb-6 flex flex-col items-center text-center">
            <Image
              src="/images/icons/nova~3.png"
              alt="Nova"
              width={90}
              height={40}
              className="mb-4"
            />

            <h1 className="text-2xl font-semibold text-white">
              Welcome to Nova
            </h1>

            <h6 className="mt-2 text-sm text-[var(--nova-text-muted)]">
              Sign in to continue
            </h6>
          </div>

          <fieldset className="fieldset">
            <span className="label">Username :</span>

            <input
              type="text"
              className="input validator w-full border-[var(--nova-border-light)] bg-[var(--nova-input)] text-white placeholder:text-[var(--nova-text-muted)] focus:border-[#ffffff00]"
              required
              placeholder="Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minLength={3}
              maxLength={30}
              title="Only letters, numbers or dash"
              name="username"
            />

            <p className="validator-hint">
              Must be 3 to 30 characters
              <br />
              containing only letters, numbers or dash
            </p>
          </fieldset>

          <label className="fieldset mt-4">
            <span className="label">Password</span>

            <input
              type="password"
              className="input validator w-full border-[var(--nova-border-light)] bg-[var(--nova-input)] text-white placeholder:text-[var(--nova-text-muted)] focus:border-[#ffffff00]"
              required
              placeholder="Password"
              minLength={8}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              name="password"
            />

            <p className="validator-hint">
              Must be more than 8 characters, including
              <br />
              At least one number
              <br />
              At least one lowercase letter
              <br />
              At least one uppercase letter
            </p>

            <span className="validator-hint hidden">Required</span>
          </label>

          <a
            href="#"
            className="mt-2 inline-block text-sm text-[var(--nova-text-secondary)] transition-colors hover:text-white"
          >
            Forgot password?
          </a>

          <div className="mt-4">
            <button
              className="group relative h-12 w-full rounded-xl bg-[linear-gradient(150deg,#d036c8,#d433c6,rgb(151,60,199),rgb(94,55,202),rgb(20,114,234))] p-px text-sm font-semibold text-white transition-all duration-300"
              type="submit"
            >
              {" "}
              <span className="relative flex h-full w-full items-center justify-center rounded-[11px] bg-transparent transition-all duration-300 group-hover:bg-[var(--nova-bg-middle)] group-hover:text-[#b137c3]">
                {" "}
                Sign In{" "}
              </span>{" "}
            </button>
          </div>

          <button
            className="btn mt-2 w-full border-[var(--nova-border-light)] bg-transparent text-[var(--nova-text-secondary)] hover:bg-white/5 hover:text-white"
            type="reset"
          >
            Reset
          </button>

          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-[var(--nova-border-light)]" />

            <span className="mx-4 text-xs uppercase tracking-wider text-[var(--nova-text-muted)]">
              or
            </span>

            <div className="flex-grow border-t border-[var(--nova-border-light)]" />
          </div>

          <button
            className="btn w-full border-[#e5e5e5] bg-white text-black hover:bg-gray-100"
            type="button"
          >
            <svg
              aria-label="Email icon"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="black"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </g>
            </svg>
            Login with Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
