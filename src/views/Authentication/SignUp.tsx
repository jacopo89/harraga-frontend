import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {FormikValues, useFormik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router";
import {authProvider} from "../../helpers/authentication/authProvider";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const initialValues = {
    companyName:"",
    email:"",
    password:""
}

const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("Inserisci il nome della compagnia"),
    email: Yup.string().required("Inserisci almeno una keyword"),
    password: Yup.string().required("Inserisci almeno una keyword")
});

export default function SignUp() {
    const navigate = useNavigate();
    const onSubmit = (values:FormikValues) => authProvider.register(values).then((response:any) => navigate("/signin")) //MANCA IL CATCH

    // @ts-ignore
    const { values, handleSubmit, handleChange, touched, errors, setFieldValue, setValues,validateForm } = useFormik({initialValues, onSubmit,validationSchema});
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up to Werooms!
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="companyName"
                            label="Company name"
                            name="companyName"
                            autoComplete="no"
                            value={values.companyName}
                            onChange={handleChange}
                            error={touched.companyName && Boolean(errors.companyName)}
                            helperText={touched.companyName && errors.companyName}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={values.email}
                            onChange={handleChange}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={values.password}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/signin" variant="body2">
                                    {"You already have an account? Sign in"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
