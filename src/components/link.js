/** @jsx jsx */
import { jsx, Link as A } from 'theme-ui';
import { Link as GatsbyLink } from 'gatsby';
import { Link as MenuLink } from 'react-scroll';

export function NavLink({ path, label, children, ...rest }) {
  return (
    <MenuLink
      to={path}
      spy={true}
      offset={-50}
      delay={0.1}
      smooth={true}
      duration={500}
      className="nav-item"
      activeclass="active"
      {...rest}
    >
      {children ? children : label}
    </MenuLink>
  );
}

// export function NavLink({ path, label, children, ...rest }) {
//   return (
//     <MenuLink as={GatsbyLink} to={path} {...rest}>
//       {children ? children : label}
//     </MenuLink>
//   );
// }

export function Link({ path, label, children, ...rest }) {
  return (
    <A as={GatsbyLink} to={path} {...rest}>
      {children ? children : label}
    </A>
  );
}
