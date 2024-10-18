import classNames from 'classnames';
import Link from 'next/link';

const NavItem = ({ title, link, isActive }) => {
  return (
    <li className={classNames("navbarLinks", { "isLinkActive": isActive })}>
      <Link href={link}><b>{title.slice(0, 2)} </b> {title}</Link>
    </li>
  );
};

export default NavItem;
