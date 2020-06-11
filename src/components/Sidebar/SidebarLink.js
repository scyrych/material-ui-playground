import React, {useState} from "react";
import {
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    withStyles
} from "@material-ui/core";
import {Inbox as InboxIcon} from "@material-ui/icons";
import {Link} from "react-router-dom";
import classNames from "classnames";
import Dot from "./Dot";

const styles = (theme) => ({
    link: {
        textDecoration: "none",
        "&:hover, &:focus": {
            backgroundColor: theme.palette.background.light,
        },
    },
    linkActive: {
        backgroundColor: theme.palette.background.light,
    },
    linkNested: {
        paddingLeft: 0,
        "&:hover, &:focus": {
            backgroundColor: "#FFFFFF",
        },
    },
    linkIcon: {
        marginRight: theme.spacing(1),
        color: theme.palette.text.secondary + "99",
        transition: theme.transitions.create("color"),
        width: 24,
        display: "flex",
        justifyContent: "center",
    },
    linkIconActive: {
        color: theme.palette.primary.main,
    },
    linkText: {
        padding: 0,
        color: theme.palette.text.secondary + "CC",
        transition: theme.transitions.create(["opacity", "color"]),
        fontSize: 16,
    },
    linkTextActive: {
        color: theme.palette.text.primary,
    },
    linkTextHidden: {
        opacity: 0,
    },
    nestedList: {
        paddingLeft: theme.spacing(2) + 30,
    },
    sectionTitle: {
        marginLeft: theme.spacing(4.5),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
        height: 1,
        backgroundColor: "#D8D8D880",
    },
});

const SidebarLink = ({
                         classes,
                         link,
                         icon,
                         label,
                         children,
                         location,
                         isSidebarOpened,
                         nested,
                         type
                     }) => {

    const [isOpen, setIsOpen] = useState(location.pathname.indexOf(link) !== -1);
    const isLinkActive =
        link &&
        (location.pathname === link || location.pathname.indexOf(link) !== -1);

    if (type === "title")
        return (
            <Typography
                className={classNames(classes.linkText, classes.sectionTitle, {
                    [classes.linkTextHidden]: !isSidebarOpened,
                })}
            >
                {label}
            </Typography>
        );

    if (type === "divider") return <Divider className={classes.divider}/>;

    if (!children)
        return (
            <ListItem
                button
                component={link && Link}
                to={link}
                className={classes.link}
                classes={{
                    root: classNames({
                        [classes.linkActive]: isLinkActive && !nested,
                        [classes.linkNested]: nested,
                    }),
                }}
                disableRipple
            >
                <ListItemIcon
                    className={classNames(classes.linkIcon, {
                        [classes.linkIconActive]: isLinkActive,
                    })}
                >
                    {nested ? <Dot color={isLinkActive && "primary"}/> : icon}
                </ListItemIcon>
                <ListItemText
                    classes={{
                        primary: classNames(classes.linkText, {
                            [classes.linkTextActive]: isLinkActive,
                            [classes.linkTextHidden]: !isSidebarOpened,
                        }),
                    }}
                    primary={label}
                />
            </ListItem>
        );

    return (
        <>
            <ListItem
                button
                component={link && Link}
                onClick={toggleCollapse}
                className={classes.link}
                to={link}
                disableRipple
            >
                <ListItemIcon
                    className={classNames(classes.linkIcon, {
                        [classes.linkIconActive]: isLinkActive,
                    })}
                >
                    {icon ? icon : <InboxIcon/>}
                </ListItemIcon>
                <ListItemText
                    classes={{
                        primary: classNames(classes.linkText, {
                            [classes.linkTextActive]: isLinkActive,
                            [classes.linkTextHidden]: !isSidebarOpened,
                        }),
                    }}
                    primary={label}
                />
            </ListItem>
            {children && (
                <Collapse
                    in={isOpen && isSidebarOpened}
                    timeout="auto"
                    unmountOnExit
                    className={classes.nestedList}
                >
                    <List component="div" disablePadding>
                        {children.map(childrenLink => (
                            <SidebarLink
                                key={childrenLink && childrenLink.link}
                                location={location}
                                isSidebarOpened={isSidebarOpened}
                                classes={classes}
                                nested
                                {...childrenLink}
                            />
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );

    function toggleCollapse(e) {
        if (isSidebarOpened) {
            e.preventDefault();
            setIsOpen(!isOpen);
        }
    }
}

export default withStyles(styles)(SidebarLink);
