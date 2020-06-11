import React from "react";
import {
    Route,
    Switch,
} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import {Header, Sidebar} from "../index";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Dashboard from "../../pages/Dashboard";
import Orders from "../../pages/Orders";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright ©'}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const styles = (theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    }
});

const Layout = ({classes}) => {
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header appBarShifted={open} onClick={handleDrawerOpen}/>
            <Sidebar drawerOpen={open} onDrawerCloseClick={handleDrawerClose}/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="lg" className={classes.container}>
                    <Switch>
                        <Route path="/app/dashboard" component={Dashboard} />
                        <Route path="/app/orders" component={Orders} />
                    </Switch>
                    <Box pt={4}>
                        <Copyright/>
                    </Box>
                </Container>
            </main>
        </div>
    );
};

export default withStyles(styles)(Layout);


