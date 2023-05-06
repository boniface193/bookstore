import { Link } from 'react-router-dom';

const Layout = () => (
  <header className="d-flex align-center justify-between container">
    <nav className="d-flex align-center">
      <h1>
        <Link to="/">Bookstore CMS</Link>
      </h1>
      <ul className="d-flex">
        <li><Link to="/">Books</Link></li>
        <li><Link to="/categories">Categoties</Link></li>
      </ul>
    </nav>
    <aside className="avatar">
      <i className="fa-solid fa-user d-flex" />
    </aside>
  </header>
);

export default Layout;
