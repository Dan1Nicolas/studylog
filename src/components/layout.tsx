import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <nav >
        <div>
          <Link to="/"> Home </Link>
          <Link to="/add"> Nova Tarefa</Link>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
