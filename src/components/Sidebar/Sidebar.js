import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import classNames from "classnames";
import {withStyles} from "@material-ui/core";
import * as PropTypes from "prop-types";
import {DRAWER_WIDTH} from "../constants";
import SidebarLink from "./SidebarLink";
import {sidebarStructure} from "./sidebarStructure";
import { withRouter } from "react-router-dom";

const styles = (theme) => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: DRAWER_WIDTH,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
});

const SideBar = ({classes, drawerOpen, onDrawerCloseClick, location}) => {
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: classNames(classes.drawerPaper, !drawerOpen && classes.drawerPaperClose),
            }}
            open={drawerOpen}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={onDrawerCloseClick}>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <Divider/>
            <List>
                {sidebarStructure.map(link => (
                    <SidebarLink
                        key={link.id}
                        location={location}
                        isSidebarOpened={drawerOpen}
                        {...link}
                    />
                ))}
            </List>
        </Drawer>
    );
};

SideBar.propTypes = {
    drawerOpen: PropTypes.bool,
    onDrawerCloseClick: PropTypes.func
};

export default withRouter(withStyles(styles)(SideBar));
