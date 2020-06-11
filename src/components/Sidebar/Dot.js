import React from "react";
import classNames from "classnames";
import {useTheme, withStyles} from "@material-ui/core";
import * as PropTypes from "prop-types";


const styles = (theme) => ({
    dotBase: {
        width: 8,
        height: 8,
        backgroundColor: theme.palette.text.hint,
        borderRadius: "50%",
        transition: theme.transitions.create("background-color"),
    },
    dotSmall: {
        width: 5,
        height: 5
    },
    dotLarge: {
        width: 11,
        height: 11,
    }
});

const Dot = ({classes, size, color}) => {
    const theme = useTheme();

    return (
        <div
            className={classNames(classes.dotBase, {
                [classes.dotLarge]: size === "large",
                [classes.dotSmall]: size === "small",
            })}
            style={{
                backgroundColor:
                    color && theme.palette[color] && theme.palette[color].main,
            }}
        />
    );
};

Dot.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string
};

export default withStyles(styles)(Dot);
