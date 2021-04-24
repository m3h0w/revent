/** @jsx jsx */
import { jsx, Box, Container, MenuButton, Flex, Button, Text } from 'theme-ui';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import Sticky from 'react-stickynode';
import Logo from 'components/logo';
import { NavLink } from 'components/link';
import menuItems from './header.data';
import theme from 'gatsby-plugin-theme-ui';
import { ScrollRotate } from 'react-scroll-rotate';
import IWantToHelpButton from 'components/IWantToHelp';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

export default function Header() {
  // const [menuItemsState, setMenuItemsState] = useState([...menuItems]);
  const result = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `);
  // console.log({ result });
  // // Handle errors
  // if (
  //   result.errors ||
  //   !result.allMarkdownRemark ||
  //   !result.allMarkdownRemark.edges ||
  //   !result.allMarkdownRemark.edges.length
  // ) {
  //   console.error(`Error while running markdown header GraphQL query.`);
  // } else {
  //   const newMenuItems = [...menuItemsState];
  //   result.allMarkdownRemark.edges.forEach(({ node }) => {
  //     newMenuItems.push({
  //       path: node.frontmatter.slug,
  //       label: node.frontmatter.title,
  //       separatePage: true,
  //     });
  //   });
  //   setMenuItemsState(newMenuItems);
  // }
  // console.log({ menuItemsState });

  const [mobileMenu, setMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <Box sx={styles.headerWrapper}>
      <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={30}>
        <Box as="header" sx={styles.header} className={mobileMenu ? 'is-mobile-menu' : ''}>
          <Container>
            <Box sx={styles.headerInner}>
              <ScrollRotate
                animationDuration={0.6}
                method={'perc'}
                loops={2}
                style={{
                  width: '32px',
                  height: '45px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}
              >
                <Logo />
              </ScrollRotate>

              <Text as="p" sx={styles.logoName}>
                Borderland.Land
              </Text>

              <Flex as="nav" sx={styles.navbar} className={mobileMenu ? 'navbar active' : 'navbar'}>
                <Box as="ul" sx={styles.navList} className={mobileMenu ? 'active' : ''}>
                  {menuItems.map(({ path, label }, i) => {
                    return (
                      <li key={i}>
                        <NavLink path={path} label={label} onClick={closeMobileMenu} />
                      </li>
                    );
                  })}
                  {result.allMarkdownRemark.edges.map(({ node, i }) => {
                    return (
                      <li key={i}>
                        <Link to={node.frontmatter.slug} onClick={closeMobileMenu}>
                          {node.frontmatter.title}
                        </Link>
                      </li>
                    );
                  })}
                </Box>
                {/* <IWantToHelpButton stylesOverwrite={styles.hiddenOnMobile} /> */}
              </Flex>
              {mobileMenu ? (
                <Button variant="text" sx={styles.closeButton}>
                  <GrClose onClick={closeMobileMenu} size="20px" />
                </Button>
              ) : (
                <MenuButton aria-label="Toggle Menu" onClick={openMobileMenu} />
              )}
            </Box>
          </Container>
        </Box>
      </Sticky>
    </Box>
  );
}

const styles = {
  headerWrapper: {
    backgroundColor: 'transparent',
    '.is-sticky': {
      header: {
        backgroundColor: '#fff',
        boxShadow: '0 6px 13px rgba(38, 78, 118, 0.1)',
        py: [10],
        color: 'text_secondary',
        opacity: 0.95,
      },
    },
  },
  header: {
    opacity: 0,
    // fontFamily: 'Parisienne, cursive',
    position: 'fixed',
    left: 0,
    right: 0,
    py: [20],
    transition: 'all 0.3s ease-in-out 0s',
    '&.is-mobile-menu': {
      backgroundColor: '#fff',
      color: 'text_secondary',
    },
    color: 'text_secondary',
  },
  headerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media only screen and (max-width: 768px)': {
      '.navbar': {
        position: 'absolute',
        top: '100%',
        backgroundColor: '#fff',
        width: '100%',
        left: 0,
        p: '20px 30px',
        display: 'block',
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
        opacity: 0,
        visibility: 'hidden',
        transition: 'all 0.3s ease-in-out 0s',
        '&.active': {
          opacity: 1,
          visibility: 'visible',
        },
        ul: {
          display: 'block',
          'li + li': {
            marginTop: 5,
          },
        },
        button: {
          marginTop: 8,
          width: '100%',
        },
      },
    },
  },
  navbar: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  navList: {
    display: ['flex'],
    listStyle: 'none',
    marginLeft: 'auto',
    p: 0,
    '.nav-item': {
      cursor: 'pointer',
      fontWeight: 500,
      padding: 0,
      margin: '0 20px',
    },
    '.active': {
      borderBottom: `3px solid ${theme.colors.secondary}`,
      paddingBottom: '2px',
    },
  },
  link: {
    fontWeight: 700,
    padding: '15px',
    cursor: 'pointer',
  },
  joinNow: {
    marginLeft: 'auto',
  },
  closeButton: {
    height: '32px',
    padding: '4px',
    minHeight: 'auto',
    width: '32px',
    ml: '3px',
  },
  logoName: {
    // fontFamily: 'Parisienne, cursive',
    fontSize: '20px',
    fontWeight: 700,
    paddingLeft: [null, '15px'],
    color: theme.colors.text,
  },
  hiddenOnMobile: {
    display: ['none', 'none', 'block'],
  },
};
