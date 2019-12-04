import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

import BannerHamburger from "./BannerHamburger";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1,
    borderBottom: "2px solid #ff5100"
  },
  buttons: {
    display: "flex",
    flex: 1
  },
  storeName: {
    color: "#ddd",
    marginTop: "16px",
    display: "inline-block"
  },
  menuButton: {
    marginRight: "30px",
    textDecoration: "none"
  },
  appbar: {
    padding: "0 60px",
    [theme.breakpoints.down("md")]: {
      padding: "0 10px"
    }
  }
});

class Banner extends Component {
  render() {
    const { classes, quantity, config } = this.props;
    const number = quantity ? ` (${quantity})` : "";

    const productLink = (
      <Link to={`/product`} className={classes.menuButton}>
        <Typography variant="button" className="typeButton shopButton">
          Shop
        </Typography>
      </Link>
    );

    let menu;
    if (isWidthDown("sm", this.props.width)) {
      //switch between mobile menu and desktop menu if the screen size is small
      menu = <BannerHamburger productLink={productLink} number={number} />;
    } else {
      menu = (
        <span className={classes.buttons}>
          <div style={{ display: "flex", flex: 1 }}>{productLink}</div>
          <Link
            to={`/cart`}
            className={classes.menuButton}
            style={{ marginRight: 0, color: "#f0f0f0" }}
          >
            <Typography variant="button" className="typeButton">
              Cart{number}
            </Typography>
          </Link>
        </span>
      );
    }

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary" className={classes.appbar}>
          <Toolbar>
            <Link to={`/`} className={classes.menuButton}>
              <div className="logo" />
              <h3 className={classes.storeName}>{config.store_name}</h3>
            </Link>
            {menu}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withWidth()(withStyles(styles)(Banner));
