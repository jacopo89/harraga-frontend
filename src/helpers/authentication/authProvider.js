import jwt_decode from "jwt-decode";
import client from "../../api/client";

export const AUTH_ENTRYPOINT = process.env.REACT_APP_ENTRYPOINT;

export const check_login = AUTH_ENTRYPOINT + "/authentication_token"
export const registration = AUTH_ENTRYPOINT + "/register"
export const refreshToken = AUTH_ENTRYPOINT + "/api/token/refresh"


export const authProvider = {
    login: ({ email, password }) =>  {
        return client.post(check_login,JSON.stringify({email, password}))
            .then(response =>
            {
                localStorage.setItem('token', JSON.stringify(response.data.token));
                localStorage.setItem('refreshToken', JSON.stringify(response.data["refresh_token"]));
                return jwt_decode(response.data.token)
            })
    },
    register: (values) =>  {
        return client.post(registration,JSON.stringify(values))
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }

            }).catch(error=>{

            })
    },
    refresh:()=>{
        return client.post(refreshToken,JSON.stringify({"refresh_token": localStorage.getItem('refreshToken').slice(1,-1)}))
            .then(response =>
            {
                localStorage.setItem('token', JSON.stringify(response.data.token));
                localStorage.setItem('refreshToken', JSON.stringify(response.data["refresh_token"]));
                return jwt_decode(response.data.token)
            })
    },
    logout: ()=>{
        localStorage.removeItem("token");
        return Promise.resolve().then(()=>window.location.href="/login");
    } ,
    checkAuth: () => localStorage.getItem('token')
        ? Promise.resolve()
        : Promise.reject(),
    checkError: error => Promise.resolve(),
    getPermissions: ()=>{
        const token = localStorage.getItem("token");
        const decodedToken = jwt_decode(token);
        const {roles} = decodedToken;
        return roles ? Promise.resolve(roles) : Promise.reject();

    },
    getIdentity: () =>{
        const token = localStorage.getItem("token");
        const decodedToken = jwt_decode(token);
        console.log("decoded token", decodedToken)
        const {username: fullName, roles, id} = decodedToken;
        return  {fullName, roles, id};

    },
    checkTokenValidity: () => {
        const token = localStorage.getItem("token");
        if(token){
            const decodedToken = jwt_decode(token);
            const {exp} = decodedToken;
            const timeNow = Date.now();

            return timeNow/1000 < exp;
        }else{
            return false;
        }
    }
};
