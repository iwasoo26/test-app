export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        My First Claude Code App
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        Claude Codeで作った最初のWebアプリです
      </p>
    </div>
  );
}
