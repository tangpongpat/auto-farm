import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Phone from "@material-ui/icons/Phone";

import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <a href="https://www.facebook.com/272469211284945/posts/272475717950961/?d=n">
      <BottomNavigationAction icon={<Facebook />} className={classes.root} />
      </a>,
      <a href="tel:+66827568888">
      <BottomNavigationAction icon={<Phone />} className={classes.root} />
      </a>,
    </BottomNavigation>
                 


  );
};
export default Footer;
