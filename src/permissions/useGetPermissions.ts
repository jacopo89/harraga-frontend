import {
    AGENZIA_LAVORO_ROLE,
    ASP_ROLE,
    ASSOCIAZIONE_ROLE,
    COMUNE_ROLE,
    CPA_ROLE,
    CPIA_ROLE,
    GARANTE_ROLE,
    MINORE_ROLE,
    REFERENTE_LEGALE_ROLE,
    RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,
    TRIBUNALE_ROLE,
    TUTORE_ROLE,
    USSM_ROLE
} from "./Roles";
import useCurrentUser from "../helpers/authentication/useCurrentUser";

const ANAGRAFICA_WRITE:string[] = [CPA_ROLE, RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE, COMUNE_ROLE]
const ANAGRAFICA_READ:string[] = [CPA_ROLE, RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,TUTORE_ROLE,COMUNE_ROLE,REFERENTE_LEGALE_ROLE,ASP_ROLE,CPIA_ROLE,AGENZIA_LAVORO_ROLE,ASSOCIAZIONE_ROLE,USSM_ROLE,GARANTE_ROLE,TRIBUNALE_ROLE,MINORE_ROLE]

const AMMINISTRATIVA_WRITE:string[] = [CPA_ROLE,RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,COMUNE_ROLE,REFERENTE_LEGALE_ROLE]
const AMMINISTRATIVA_READ:string[] = [CPA_ROLE,RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,TUTORE_ROLE,COMUNE_ROLE,REFERENTE_LEGALE_ROLE,CPIA_ROLE,USSM_ROLE,GARANTE_ROLE,TRIBUNALE_ROLE,MINORE_ROLE]

const STORIA_WRITE:string[] = [CPA_ROLE,RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,COMUNE_ROLE]
const STORIA_READ:string[] = [CPA_ROLE,RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,TUTORE_ROLE,COMUNE_ROLE,REFERENTE_LEGALE_ROLE,ASP_ROLE,USSM_ROLE,GARANTE_ROLE,TRIBUNALE_ROLE]

const ISTRUZIONE_WRITE:string[] = [CPA_ROLE,RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,CPIA_ROLE,AGENZIA_LAVORO_ROLE,ASSOCIAZIONE_ROLE]
const ISTRUZIONE_READ:string[] = [CPA_ROLE,RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,TUTORE_ROLE,COMUNE_ROLE,CPIA_ROLE,AGENZIA_LAVORO_ROLE,ASSOCIAZIONE_ROLE,USSM_ROLE,GARANTE_ROLE,TRIBUNALE_ROLE,MINORE_ROLE]

const SANITARIA_WRITE:string[] = [CPA_ROLE,RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,COMUNE_ROLE,ASP_ROLE]
const SANITARIA_READ:string[] = [CPA_ROLE,RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,TUTORE_ROLE,COMUNE_ROLE,ASP_ROLE,GARANTE_ROLE,TRIBUNALE_ROLE]

const LAVORO_WRITE:string[] = [CPA_ROLE,RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,CPIA_ROLE,AGENZIA_LAVORO_ROLE]
const LAVORO_READ:string[] = [CPA_ROLE,RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,TUTORE_ROLE,COMUNE_ROLE,CPIA_ROLE,AGENZIA_LAVORO_ROLE,GARANTE_ROLE,TRIBUNALE_ROLE,MINORE_ROLE]

const COMPETENZE_WRITE:string[] = [CPA_ROLE,RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,TUTORE_ROLE,CPIA_ROLE,AGENZIA_LAVORO_ROLE,ASSOCIAZIONE_ROLE]
const COMPETENZE_READ:string[] = [CPA_ROLE,RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,TUTORE_ROLE,COMUNE_ROLE,CPIA_ROLE,AGENZIA_LAVORO_ROLE,ASSOCIAZIONE_ROLE,USSM_ROLE,GARANTE_ROLE,TRIBUNALE_ROLE,MINORE_ROLE]

const PENALE_WRITE:string[] = [CPA_ROLE,RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,USSM_ROLE,COMUNE_ROLE]
const PENALE_READ:string[] = [CPA_ROLE,RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,TUTORE_ROLE,COMUNE_ROLE,USSM_ROLE]

const DESIDERI_WRITE:string[] = [CPA_ROLE,RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,TUTORE_ROLE,CPIA_ROLE,AGENZIA_LAVORO_ROLE]
const DESIDERI_READ:string[] = [CPA_ROLE,RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,TUTORE_ROLE,COMUNE_ROLE,CPIA_ROLE,AGENZIA_LAVORO_ROLE,ASSOCIAZIONE_ROLE,USSM_ROLE,GARANTE_ROLE,TRIBUNALE_ROLE,MINORE_ROLE]

const SOCIALITA_WRITE:string[] = [CPA_ROLE,RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,TUTORE_ROLE,CPIA_ROLE,ASSOCIAZIONE_ROLE]
const SOCIALITA_READ:string[] = [CPA_ROLE,RESPONSABILE_SECONDA_ACCOGLIENZA_ROLE,TUTORE_ROLE,COMUNE_ROLE,CPIA_ROLE,ASSOCIAZIONE_ROLE,USSM_ROLE]

export default function useGetPermission(){
    const user = useCurrentUser();

    const canReadAnagrafica = user.roles.some((role:string) => ANAGRAFICA_READ.includes(role))
    const canWriteAnagrafica = user.roles.some((role:string) => ANAGRAFICA_WRITE.includes(role))

    const canReadAmministrativa = user.roles.some((role:string) => AMMINISTRATIVA_READ.includes(role))
    const canWriteAmministrativa = user.roles.some((role:string) => AMMINISTRATIVA_WRITE.includes(role))

    const canReadStoria = user.roles.some((role:string) => STORIA_READ.includes(role))
    const canWriteStoria = user.roles.some((role:string) => STORIA_WRITE.includes(role))

    const canReadIstruzione = user.roles.some((role:string) => ISTRUZIONE_READ.includes(role))
    const canWriteIstruzione = user.roles.some((role:string) => ISTRUZIONE_WRITE.includes(role))

    const canReadSanitaria = user.roles.some((role:string) => SANITARIA_READ.includes(role))
    const canWriteSanitaria = user.roles.some((role:string) => SANITARIA_WRITE.includes(role))

    const canReadLavoro = user.roles.some((role:string) => LAVORO_READ.includes(role))
    const canWriteLavoro = user.roles.some((role:string) => LAVORO_WRITE.includes(role))

    const canReadCompetenze = user.roles.some((role:string) => COMPETENZE_READ.includes(role))
    const canWriteCompetenze = user.roles.some((role:string) => COMPETENZE_WRITE.includes(role))

    const canReadPenale = user.roles.some((role:string) => PENALE_READ.includes(role))
    const canWritePenale = user.roles.some((role:string) => PENALE_WRITE.includes(role))

    const canReadDesideri = user.roles.some((role:string) => DESIDERI_READ.includes(role))
    const canWriteDesideri = user.roles.some((role:string) => DESIDERI_WRITE.includes(role))

    const canReadSocialita = user.roles.some((role:string) => SOCIALITA_READ.includes(role))
    const canWriteSocialita = user.roles.some((role:string) => SOCIALITA_WRITE.includes(role))

    return {
        canReadAnagrafica, canWriteAnagrafica,
        canReadAmministrativa, canWriteAmministrativa,
        canReadStoria, canWriteStoria,
        canReadIstruzione, canWriteIstruzione,
        canReadSanitaria, canWriteSanitaria,
        canReadCompetenze, canWriteCompetenze,
        canReadPenale, canWritePenale,
        canReadDesideri,canWriteDesideri,
        canReadLavoro,canWriteLavoro,
        canReadSocialita, canWriteSocialita
    }
}
