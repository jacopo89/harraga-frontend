import {toast} from "react-toastify";

export class Violazione{
    static fromResponse(response:object){
        Object.entries(response).map(([key, value])=>
            toast.error(`${value}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        )
    }

    static fromMessage(message:string){
        toast.error(`${message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
}
