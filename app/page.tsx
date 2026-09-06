import Image from "next/image";

export default function Home() {
  const hager: string = "Hager";
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold text-black dark:text-white">
          Welcome to <span className="text-brand">Taskly</span>!
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 text-brand">
          Hello, {hager}! This is a simple task management app built with
          Next.js and Tailwind CSS.
        </p>
      </main>
    </div>
  );
}
