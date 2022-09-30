import axios from "axios";

const api=axios.create({baseURL:"http://localhost:4000"})


export const logIn=(formdata)=>api.post('/auth/login',formdata);

export const signUp=(formdata)=>api.post('/auth/signup',formdata);