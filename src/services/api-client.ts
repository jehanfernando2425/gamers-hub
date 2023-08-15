import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:"4f780fb609e741aea5e848a2269179cc",
    }
})

export interface FetchResponse<T>{
    count:number;
    results:T[];
}