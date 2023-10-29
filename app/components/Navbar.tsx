import Link from "next/link"
import SidebarContent from "./SidebarContent"

export default function Navbar() {
  return (
    <nav>
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="w-full navbar bg-base-300">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>

        <div className="mx-5">
          <Link href="/">
            <h1 className="text-2xl">MINARD</h1>
          </Link>
        </div>
      </div>

      <div className="drawer-side lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <SidebarContent />
      </div>
    </nav>
  )
}
