import {Violazione} from "./Violazione";

interface GenericResponseInterface{
    type: string;
    content: any;
}

export class GenericResponse{
    content: any;
    constructor({type, content}:GenericResponseInterface) {
        switch(type){
            case "VIOLATION":{
                this.content = content;
                break;
            }
            case "WORKFLOW_VIOLATION":{
                Violazione.fromResponse(content)
                break;
            }
        }
    }

    static fromResponse(response:object){
        // @ts-ignore
        return new GenericResponse(response.data);
    }
}
