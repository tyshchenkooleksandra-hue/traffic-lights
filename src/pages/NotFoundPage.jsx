import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <div className="page">
      <h2>Сторінку не знайдено</h2>
      <p>За цією адресою нічого немає.</p>
      <Link to="/">Повернутися на головну</Link>
    </div>
  );
}

export default NotFoundPage;
