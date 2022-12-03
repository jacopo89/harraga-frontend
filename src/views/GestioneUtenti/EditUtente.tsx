import React, {useEffect, useMemo, useState} from 'react'
import {useParams} from "react-router-dom";
import {Col, Modal, Row} from "react-bootstrap";
import TabellaAssociazioneUtenteCartelle, {
    AssociazioneUtenteCartella
} from "./AssociazioneUtenteCartella/TabellaAssociazioneUtenteCartelle";
import {Button} from "@mui/material";
import Select, {SingleValue} from "react-select";
import {creaAssociazioneUtenteCartella, getCartelleSocialiUtente} from "../../api/utente/utenteApi";
import {CartellaSociale, CartellaSocialeData} from "../CartellaSociale/TabellaCartelleSociali";
import {getCartelleSociali} from "../../api/cartellaSociale/cartellaSocialeApi";

type Option = {label: string;value: string; } | undefined
export default function EditUtente(){
    const {id} = useParams();
    const [show, setShow] = useState<boolean>(false);
    const [associazioni, setAssociazioni] = useState<AssociazioneUtenteCartella[]>([])
    const [cartelleSociali, setCartelleSociali] = useState<CartellaSociale[]>([])
    const [chosenOption,setChosenOption] = useState<SingleValue<Option>>()
    const idCartelleAssociate = associazioni.map(associazione => associazione.cartellaSocialeId);

    const getAssociazioniHandler = () => {
        if(id)getCartelleSocialiUtente(id).then(response => setAssociazioni(response.data["hydra:member"].map((associazione:any) => {
            return {
                id: associazione.id,
                cartellaSocialeId:associazione.cartellaSociale["@id"],
                nome:associazione.cartellaSociale.anagrafica.nome,
                cognome:associazione.cartellaSociale.anagrafica.cognome,

            }
        })))
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
    },[])


    useEffect(()=>{
        getAssociazioniHandler()
    },[])


    if(id){
        return <>
            <Button onClick={()=>setShow(true)}>Crea</Button>
            <Row>
                <Col>
                    <TabellaAssociazioneUtenteCartelle id={id} associazioni={associazioni}/>
                </Col>
            </Row>
            <Modal centered show={show} onHide={()=>{setShow(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Associa cartella a utente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Select classNamePrefix="react-select" options={options} value={chosenOption} onChange={(element)=>{setChosenOption(element)}} placeholder={"Associa"} />
                        <Button onClick={()=>{
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
        </>
    }

    return <div>No id.</div>
}
