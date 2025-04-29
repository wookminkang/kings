import { Outlet } from 'react-router-dom';
export const ClubPage: React.FC = () => {
  return (
    <div className="club-container">
      <h1>클럽안내</h1>
      <Outlet />
    </div>
  )
};
