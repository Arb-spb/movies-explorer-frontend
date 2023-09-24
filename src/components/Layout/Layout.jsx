import { Outlet  } from 'react-router-dom';
import Header from '../Header/Header';
import MobileMenu from '../MobileMenu/MobileMenu';

function Layout() {
  return (
    <>
      <Header />
      <MobileMenu />
      <Outlet />
    </>
  )
}

export default Layout;
