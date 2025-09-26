import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <nav >
        <div className="flex justify-center items-center gap-9 font-bold text-blue-600 border-b-2 border-gray-400 p-3 text-xl mb-5 ">
          <Link className="hover:text-blue-300 hover:underline" to="/"> Home </Link>
          <Link className="hover:text-blue-300 hover:underline " to="/add"> Nova Tarefa</Link>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
