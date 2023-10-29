export default function SidebarContent() {
  return (
    <div className="menu min-h-full w-64 bg-purple-900 py-5">
      <div className="flex flex-col gap-2 mb-8">
        {["MOVIES", "TV SHOWS", "TOP IMDB"].map((v, i) => (
          <div
            key={i}
            className="h-10 bg-base-300 rounded-md flex items-center justify-center"
          >
            {v}
          </div>
        ))}
      </div>

      <div>
        <h4>Genre</h4>
        <div className="mt-1 grid grid-cols-2 gap-1">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <button key={i} className="text-start px-2 py-1 ">
                lorem
              </button>
            ))}
        </div>
      </div>
    </div>
  )
}
