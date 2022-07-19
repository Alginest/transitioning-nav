import { AppBar, Container, Link, Toolbar } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import MenuIcon from "@material-ui/icons/Menu";
import { useGlobalContext } from "../../contextApi";
import MobileNav from "../Mobile/MobileNav/MobileNav";
const Navbar = () => {
  const { openMenu, openToggle } = useGlobalContext();
  const classes = useStyles(openMenu);

  return (
    <div className={classes.navbar}>
      <AppBar className={classes.appBar} position="static" elevation={0}>
        <Container className={classes.bigCont}>
          <Toolbar className={classes.toolBar}>
            <li className={classes.li}>
              <Link className={classes.link}>Home</Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.link}>About</Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.link}>Portfolio</Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.link}>Blog</Link>
            </li>
            <li className={classes.li}>
              <Link className={classes.link}>Contact</Link>
            </li>
          </Toolbar>
          <MenuIcon
            onClick={openToggle}
            className={
              openMenu
                ? classes.faBars
                : `${classes.faBars} ${classes.faBarsActive}`
            }
          />
        </Container>
      </AppBar>
      <MobileNav />
    </div>
  );
};

export default Navbar;
