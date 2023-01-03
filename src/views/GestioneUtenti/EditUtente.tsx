import React, {useEffect, useMemo, useState} from 'react'
import {useParams} from "react-router-dom";
import {Col, Modal, Row} from "react-bootstrap";
import TabellaAssociazioneUtenteCartelle, {
    AssociazioneUtenteCartella
} from "./AssociazioneUtenteCartella/TabellaAssociazioneUtenteCartelle";
import {Button} from "@mui/material";
import Select, {SingleValue} from "react-select";
import {
    creaAssociazioneUtenteCartella,
    getCartelleSocialiUtente,
    getUtente,
    patchUtente
} from "../../api/utente/utenteApi";
import {CartellaSociale, CartellaSocialeData} from "../CartellaSociale/TabellaCartelleSocialiPage";
import {getCartelleSociali} from "../../api/cartellaSociale/cartellaSocialeApi";
import FormGeneratorContextProvider from "../../form-generator/form-context/FormGeneratorContextProvider";
import FormGeneratorContext from "../../form-generator/form-context/FormGeneratorContext";
import * as Yup from "yup";
import {signupFormElements} from "../Authentication/SignUp";
import FormElement from "../../form-generator/form-elements/FormElement";

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


type Option = {label: string;value: string; } | undefined
export default function EditUtente(){
    const {id} = useParams();
    const [show, setShow] = useState<boolean>(false);
    const [associazioni, setAssociazioni] = useState<AssociazioneUtenteCartella[]>([])
    const [cartelleSociali, setCartelleSociali] = useState<CartellaSociale[]>([])
    const [chosenOption,setChosenOption] = useState<SingleValue<Option>>()
    const idCartelleAssociate = associazioni.map(associazione => associazione.cartellaSocialeId);
    const [userInfo, setUserInfo] = useState()
    const getAssociazioniHandler = () => {
        if(id) getCartelleSocialiUtente(id).then(response => setAssociazioni(response.data["hydra:member"].map((associazione:any) => {
            return {
                id: associazione.id,
                cartellaSocialeId:associazione.cartellaSociale["@id"],
                nome:associazione.cartellaSociale.anagrafica.nome,
                cognome:associazione.cartellaSociale.anagrafica.cognome,

            }
        })))
    }

    const editUtenteHandler = (values:any) => {
        // @ts-ignore
        return patchUtente(id,values)
    }


    const getUtenteInfo = () => {
        if(id) return getUtente(id)
    }

    const options = useMemo(()=>{
        return cartelleSociali.filter(cartella => !idCartelleAssociate.includes(cartella["@id"])).map(cartella => {
            return {
                label: `${cartella.nome} ${cartella.cognome}`,
                value: cartella.id
            }
        })
    },[idCartelleAssociate, cartelleSociali])

    useEffect(()=>{

        getCartelleSociali([]).then(response => setCartelleSociali(response.data["hydra:member"].map((cartellaSociale:CartellaSocialeData)=>{
            return {
                "@id": cartellaSociale["@id"],
                id:cartellaSociale.id,
                nome:cartellaSociale.anagrafica.nome,
                cognome:cartellaSociale.anagrafica.cognome,
                numeroTutela:cartellaSociale.anagrafica.numeroTutela,
            }
        })))

        getUtenteInfo()?.then(response => setUserInfo(response.data))
    },[])


    useEffect(()=>{
        getAssociazioniHandler()
    },[])


    if(id){
        return <>
            <section className={"mb-3"}>
                <h3>Informazioni utente</h3>
                <FormGeneratorContextProvider elements={signupFormElements} initialValues={initialValues} existingValue={userInfo} onSubmit={editUtenteHandler}>
                    <FormGeneratorContext.Consumer>
                        {({values}:any)=>{
                            return <>
                                <Row>
                                    <Col xs={6}>
                                        <FormElement accessor={"nome"}></FormElement>
                                    </Col>
                                    <Col xs={6}>
                                        <FormElement accessor={"cognome"}></FormElement>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs={6}>
                                        <FormElement accessor={"email"}></FormElement>
                                    </Col>
                                    <Col xs={6}>
                                        <FormElement accessor={"telefono"}></FormElement>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button variant="contained" type="submit">Salva</Button>
                                    </Col>

                                </Row>
                            </>
                        }}
                    </FormGeneratorContext.Consumer>
                </FormGeneratorContextProvider>
            </section>
            <section>
                <h3>Associazioni</h3>
                <Button className={"mb-1"} variant={"contained"} onClick={()=>setShow(true)}>Associa cartella sociale</Button>
                <Row>
                    <Col>
                        <TabellaAssociazioneUtenteCartelle id={id} associazioni={associazioni} getAssociazioni={getAssociazioniHandler}/>
                    </Col>
                </Row>
                <Modal centered show={show} onHide={()=>{setShow(false)}}>
                    <Modal.Header closeButton>
                        <Modal.Title>Associa cartella a utente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Select classNamePrefix="react-select" options={options} value={chosenOption} onChange={(element)=>{setChosenOption(element)}} placeholder={"Cerca "} />
                        <Button className={"my-2"} variant={"contained"} onClick={()=>{
                            if(chosenOption){
                                creaAssociazioneUtenteCartella({
                                    utente:id,
                                    cartellaSociale:chosenOption.value,
                                    ruolo: ""
                                }).then(()=>{
                                    getAssociazioniHandler()
                                    setChosenOption(undefined)

                                })}}}>Salva</Button>

                    </Modal.Body>
                </Modal>
            </section>

        </>
    }

    return <div>No id.</div>
}

/*

 */
