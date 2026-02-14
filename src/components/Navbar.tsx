import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="py-5 md:py-3">
        <div className="flex items-center justify-between md:hidden">
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center"
          >
            <span className="relative block h-4 w-5">
              <span className="absolute left-0 top-[3px] h-px w-full bg-[hsl(var(--black-hsl))]" />
              <span className="absolute left-0 top-[10px] h-px w-full bg-[hsl(var(--black-hsl))]" />
            </span>
          </button>

          <Link href="/" className="text-[1rem] font-medium leading-none">
            Lilac Template
          </Link>
        </div>

        <div className="hidden items-center justify-between md:flex">
          <Link href="/" className="text-[2rem] font-medium leading-none">
            Lilac Template
          </Link>

          <nav aria-label="Main">
            <ul className="flex items-center gap-9 text-[1rem]">
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
