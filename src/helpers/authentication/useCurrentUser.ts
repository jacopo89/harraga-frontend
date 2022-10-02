import {useSelector} from "react-redux";

export default function useCurrentUser(){
    // @ts-ignore
    const {auth} = useSelector(state=>state);
    return auth.currentUser ? auth.currentUser : undefined ;
}
