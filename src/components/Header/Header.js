import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import * as PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import classNames from "classnames";
import {DRAWER_WIDTH} from "../constants";

const styles = (theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: DRAWER_WIDTH,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
});

const Header = ({classes, appBarShifted, onClick}) => {
    return (
        <AppBar position="absolute"
                className={classNames(classes.appBar, appBarShifted && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onClick}
                    className={classNames(classes.menuButton, appBarShifted && classes.menuButtonHidden)}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    Spartacus
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    appBarShifted: PropTypes.bool,
    onClick: PropTypes.func
};

export default withStyles(styles)(Header);
