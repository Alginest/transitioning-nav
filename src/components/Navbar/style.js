import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  navbar: {
    display: "flex",
    position: "relative",
  },
  appBar: {
    backgroundColor: "#1b242f",
    height: 60,
  },
  toolBar: {
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  li: {
    listStyle: "none",
    margin: "0 20px",
  },
  link: {
    textTransform: "uppercase",
    fontFamily: "Raleway",
    fontWeight: 400,
    color: "white",
  },
  bigCont: {
    [theme.breakpoints.down("xs")]: {
      height: "60px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  },
  faBars: {
    fontSize: "40px",
    transition: "all 0.3s ease-in-out",
  },
  faBarsActive: {
    transform: "rotate(90deg)",
  },
}));
