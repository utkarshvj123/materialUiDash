import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { HeaderCompo, HeaderDetail } from "../../styledComponent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import RightContent from "../RightContent";
import SideBar from "../SideBar";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: "white",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Wrapper() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{ background: "white" }}
      >
        <HeaderCompo isOpen={open}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <HeaderDetail className="header-class">
            <SearchIcon style={{ marginRight: "35px" }} />
            <div className="manageIcon">
              <NotificationsIcon />
              <span
                className="upper-container"
                style={{ background: "rgb(55, 117, 242)" }}
              >
                4
              </span>
            </div>
            <div className="manageIcon">
              <QuestionAnswerIcon />
              <span
                className="upper-container"
                style={{ background: "rgb(66, 41, 154)" }}
              >
                4
              </span>
            </div>
            <div className="manageIcon">
              <ShoppingCartIcon />
              <span
                className="upper-container"
                style={{ background: "rgb(247, 93, 129)" }}
              >
                4
              </span>
            </div>
            <div className="profile-image">
              <img
                className="imgVisible"
                src={
                  "https://isomorphic.redq.io/static/media/user1.56a1f25e.png"
                }
              />
              <span className="img-online" />
            </div>
          </HeaderDetail>
        </HeaderCompo>
      </AppBar>
      <SideBar classes={classes} theme={theme} open={open} />
      <RightContent
        contentClass={classes.content}
        toolBarClass={classes.toolbar}
      />
    </div>
  );
}
