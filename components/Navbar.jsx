import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-slate-400 flex mb-4 justify-between items-center px-40 p-3 font-bold text-black">
        <Link href="/">
            Home
        </Link>

        <ul>
            <li>
                <Link href="/">
                    Users
                </Link>
            </li>
            <li>
                <Link href="/about">
                    About
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar