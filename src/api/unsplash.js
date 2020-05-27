import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            "Client-ID rrPjAOx5ajcGUGpS32rpcfa9-2-ytSiiTSCb3Wv46SQ",
    }
})
