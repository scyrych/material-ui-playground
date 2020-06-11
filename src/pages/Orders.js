import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import classNames from "classnames";

const styles = (theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    }
});

const Orders = ({classes}) => {
    const fixedHeightPaper = classNames(classes.paper, classes.fixedHeight);
    return (
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                    <Typography component="h1" variant="h1" color="inherit" noWrap>
                        Orders
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(Orders);
