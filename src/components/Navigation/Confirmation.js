import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function SystemAdminHome() {
    return (
      <Typography variant="body2" color="textPrimary" align="center">
        <Link 
        color="inherit" 
        href="SystemAdminDashboard"
        underline ="hover"
        >
          Back to system Admin Dashborad
        </Link>{''}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
    backgroundColor: 'green',
    fontSize: 'large',
    width: theme.spacing(10),
    height: theme.spacing(10),

  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CheckCircleIcon className={classes.avatar}/>
        </Avatar>
        </div>
        <div className={classes.paper}>
        <Typography 
            variant="h4"
            style={{margin: "10px" }}
            >Role was successfully granted!</Typography>
        </div>
        <div>
        <Box mt={5}>
                <Button>
                <SystemAdminHome />
                </Button>
            </Box>
        </div>
    </Container>
  );
}