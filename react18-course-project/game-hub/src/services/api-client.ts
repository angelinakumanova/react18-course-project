import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd215fc474eca4fcc8d7165890a4f94d2'
    }
})


