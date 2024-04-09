import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='min-h-screen w-screen bg-main'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
