import {auth} from 'express-oauth2-jwt-bearer'


const jwtCheck = auth({
    audience: "https://kings-real-estate-agency/",
    issuerBaseURL: "https://dev-omjwupug7w2kbo8z.us.auth0.com/",
    tokenSigningAlg: "RS256"
})

export default jwtCheck