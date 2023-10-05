export default function Nav() {
  return (
    <>
      <div className="max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 px-8">
            <li className="mr-1 px-2">
              <a
                className="inline-block px-6 py-3 text-white bg-blue-600 rounded-3xl active"
                aria-current="page"
              >
                New York
              </a>
            </li>
            <li className="mr-2 px-2">
              <a className="inline-block px-6 py-3 rounded-3xl text-black bg-blue-100 hover:bg-blue-200  dark:hover:bg-gray-900 dark:hover:text-white">
                Mumbai
              </a>
            </li>
            <li className="mr-2 px-2">
              <a className="inline-block px-6 py-3 rounded-3xl text-black bg-blue-100 hover:bg-blue-200  dark:hover:bg-gray-900 dark:hover:text-white">
                Paris
              </a>
            </li>
            <li className="mr-2 px-2">
              <a className="inline-block px-6 py-3 rounded-3xl text-black bg-blue-100 hover:bg-blue-200  dark:hover:bg-gray-900 dark:hover:text-white">
                London
              </a>
            </li>
          </ul>
          <button className="btn font-bold text-thin w-auto h-auto bg-white text-blue-700 border border-blue-600 border-solid rounded-3xl p-2 pl-4 pr-4 m-3 ">
            View All 🡺
          </button>
        </div>
      </div>
    </>
  );
}
