import { AppBar, Container, Link, Toolbar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../../contextApi";
import useStyles from "./style";
const MobileNav = () => {
  const { openMenu, setOpenMenu } = useGlobalContext();
  console.log(openMenu);
  const [XWidth, setXwidth] = useState(0);
  const classes = useStyles(openMenu);
  console.log(XWidth);
  const changeMenu = () => {
    let width = window.innerWidth;
    setXwidth(width);
    setOpenMenu(true);
  };
  useEffect(() => {
    window.addEventListener("resize", changeMenu);
    return () => {
      window.removeEventListener("resize", changeMenu);
    };
  }, []);

  return (
    <section
      className={
        XWidth > 600
          ? classes.mobileRem
          : !openMenu
          ? `${classes.mobileNav} ${classes.mobileNavActive}`
          : classes.mobileNav
      }
    >
      <ul className={classes.mobilePaw}>
        <li className={classes.mobileLi}>
          <Link className={classes.mobileLink}>Home</Link>
        </li>
        <li className={classes.mobileLi}>
          <Link className={classes.mobileLink}>About</Link>
        </li>
        <li className={classes.mobileLi}>
          <Link className={classes.mobileLink}>Home</Link>
        </li>
        <li className={classes.mobileLi}>
          <Link className={classes.mobileLink}>Contact</Link>
        </li>
        <li className={classes.mobileLi}>
          <Link className={classes.mobileLink}>Home</Link>
        </li>
      </ul>
    </section>
  );
};

export default MobileNav;
