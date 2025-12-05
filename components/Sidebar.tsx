import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-1/2 -translate-y-1/2 w-24 h-[400px] bg-black py-8 flex flex-col items-center justify-center z-50">
      <nav className="h-full p-10 flex flex-col justify-between items-center">
        <Link href="/" className="transform -rotate-90 text-white hover:text-blue-300 text-sm tracking-widest font-bold">
          HOME
        </Link>
        <Link href="/#about" className="transform -rotate-90 text-white hover:text-blue-300 text-sm tracking-widest font-bold">
          ABOUT ME
        </Link>
        <Link href="/#projects" className="transform -rotate-90 text-white hover:text-blue-300 text-sm tracking-widest font-bold">
          PROJECTS
        </Link>
      </nav>
    </aside>
  );
}