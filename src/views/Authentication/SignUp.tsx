import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme} from '@mui/material/styles';
import {FormikValues} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router";
import {authProvider} from "../../helpers/authentication/authProvider";
import {FormElements} from "../../form-generator/ElementInterface";
import FormGeneratorContextProvider from '../../form-generator/form-context/FormGeneratorContextProvider';
import FormElement from "../../form-generator/form-elements/FormElement";
import {Col, Row} from 'react-bootstrap';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Harraga
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const initialValues = {
    nome:null,
    cognome:null,
    password:null,
    email:null,
    ruolo:"minore"
}

const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Inserisci il nome").nullable(),
    cognome: Yup.string().required("Inserisci il cognome").nullable(),
    email: Yup.string().email().required("Inserisci l'email").nullable(),
    password: Yup.string().required("Inserisci la password"),
    ruolo:Yup.string().required("Inserire il ruolo")
});

const signupFormElements:FormElements = [
    {
        accessor:"nome",
        type:"text",
        Header:"Nome"
    },
    {
        accessor:"cognome",
        type:"text",
        Header:"Cognome"
    },
    {
        accessor:"email",
        type:"text",
        Header:"Email"
    },
    {
        accessor:"telefono",
        type:"text",
        Header:"Telefono",
    },
    {
        accessor:"password",
        type:"text",
        Header:"Password"
    },
    {
        accessor:"ruolo",
        type:"select",
        Header:"Ruolo",
        options:[
            {label:"CPA",value:"cpa"},
            {label:"Responsabile seconda accoglienza",value:"resp_sec_acc"},
            {label:"Tutore",value:"tutore"},
            {label:"Comune",value:"comune"},
            {label:"Referente legale",value:"ref_legale"},
            {label:"ASP",value:"asp"},
            {label:"CPIA",value:"cpia"},
            {label:"Agenzia del lavoro",value:"agenzia_lavoro"},
            {label:"Associazione",value:"associazione"},
            {label:"USSM",value:"ussm"},
            {label:"Garante",value:"garante"},
            {label:"Minore",value:"minore"},
            {label:"Tribunale",value:"tribunale"},
        ]
    }
]

export default function SignUp() {
    const navigate = useNavigate();
    const onSubmit = (values:FormikValues) => authProvider.register(values).then((response:any) => navigate("/signin")) //MANCA IL CATCH

    return <FormGeneratorContextProvider elements={signupFormElements} validationSchema={validationSchema} onSubmit={onSubmit} initialValues={initialValues} existingValue={undefined}>
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
                <Typography component="h1" variant="h5">
                    Benvenuto in Harraga
                </Typography>
                <Row className="w-100 mb-1">
                    <Col xs={12}>
                        <FormElement accessor={"nome"}></FormElement>
                    </Col>
                </Row>
                <Row className="w-100 mb-1">
                    <Col xs={12}>
                        <FormElement accessor={"cognome"}></FormElement>
                    </Col>
                </Row>
                <Row className="w-100 mb-1">
                    <Col xs={12}>
                        <FormElement accessor={"email"}></FormElement>
                    </Col>
                </Row>
                <Row className="w-100 mb-1">
                    <Col xs={12}>
                        <FormElement accessor={"password"}></FormElement>
                    </Col>
                </Row>
                <Row className="w-100 mb-1">
                    <Col xs={12}>
                        <FormElement accessor={"telefono"}></FormElement>
                    </Col>
                </Row>
                <Row className="w-100 mb-1">
                    <Col xs={12}>
                        <FormElement accessor={"ruolo"}></FormElement>
                    </Col>
                </Row>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Registrati
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/signin" variant="body2">
                                {"Hai già un account? accedi"}
                            </Link>
                        </Grid>
                    </Grid>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    </FormGeneratorContextProvider>

}
