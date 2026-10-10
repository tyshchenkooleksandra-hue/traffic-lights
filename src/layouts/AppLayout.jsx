import { NavLink, Outlet } from 'react-router';

function AppLayout() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Світлофор</h1>
        <nav className="app-nav">
          <NavLink to="/" end>
            Головна
          </NavLink>
          <NavLink to="/traffic-light">Світлофор</NavLink>
          <NavLink to="/stats">Статистика</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
