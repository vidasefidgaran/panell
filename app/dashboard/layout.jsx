// app/dashboard/layout.jsx
import Sidebar from './sidebar/sidebar';

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}
