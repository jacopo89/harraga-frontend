export const AUTH_ENTRYPOINT = process.env.REACT_APP_ENTRYPOINT;

export const createRoute = (route:string) => {
    return AUTH_ENTRYPOINT + route
}
