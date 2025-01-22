import Link from "next/link";
import GetStarted from "./get-started";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-[50] border-b bg-background/30 backdrop-blur">
      <div className="mx-auto flex max-w-[77.5rem] items-center justify-between px-4 py-2 pr-6">
        <Link
          href="/"
          className="-ml-1 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          

          <span className="inline-block text-lg font-bold uppercase text-accent">
            Resume Builder
          </span>
        </Link>

        <GetStarted />
      </div>
    </header>
  );
}
