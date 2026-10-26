import { Mark } from './components/Mark';

export function NotFound() {
  return (
    <main className="not-found">
      <Mark size={48} />
      <h1>Page not found</h1>
      <p>The page you were looking for does not exist or has moved.</p>
      <a className="button" href="/">
        Go to the Syntropy Sciences home page
      </a>
    </main>
  );
}
