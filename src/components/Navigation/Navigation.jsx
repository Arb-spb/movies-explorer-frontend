import './Navigation.css';
import { NavLink  } from 'react-router-dom';
import { NAVIGATION_DESKTOP } from '../../constants';

function Navigation({ list, isSidebar }) {
  return (
    <nav className="Navigation">
      <ul className="Navigation_list">
        {NAVIGATION_DESKTOP.map(item => (
          <li key={item.id}>
            <NavLink  className="Navigation__link" to={item.to}>{item.text}</NavLink >
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation;
