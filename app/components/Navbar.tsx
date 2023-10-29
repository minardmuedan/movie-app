import Link from "next/link"
import { LuSearch } from "react-icons/lu"

export default function Navbar() {
  return (
    <nav className="h-14 bg-base-300 flex items-center gap-10 px-5">
      <Link href="/">
        <h2 className="text-xl font-bold text-cyan-500">MINARD</h2>
      </Link>

      <ul className="flex items-center gap-5">
        <li>MOVIES</li>
        <li>TV SHOWS</li>
        <li>PEOPLE</li>
        <li>MORE</li>
      </ul>

      <div className="flex-1 flex items-center justify-end">
        <div className="border w-fit flex items-center py-1 px-2 rounded-md">
          <input
            type="text"
            className="px-2 bg-transparent focus:outline-none"
          />
          <LuSearch />
        </div>
      </div>
    </nav>
  )
}
