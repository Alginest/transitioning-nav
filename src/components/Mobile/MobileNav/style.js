import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  mobileRem: {
    display: "none",
  },
  mobileNav: {
    backgroundColor: "#333",
    width: "100%",
    height: 0,
    zIndex: 10,
    position: "absolute",
    top: 0,
    right: 0,
    transition: "height 0.3s ease-in-out",
    flexDirection: "column",
    overflow: "hidden",
  },
  mobileNavActive: {
    backgroundColor: "#333",
    width: "100%",
    height: "500px",
    position: "absolute",
    top: 0,
    zIndex: 10,
    right: 0,
  },
  mobilePaw: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
  },
}));
