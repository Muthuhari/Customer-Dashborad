import axios from 'axios';

class APIService {
    constructor(authToken,apiBaseURL,path) {
        this.authToken = authToken;
        this.apiBaseURL = apiBaseURL;
        this.path = path;
    }

    async getData() {
        try {
            const response = await axios.get(`${this.apiBaseURL}/api/`+this.path, {
                headers: {
                    Authorization: `Bearer ${this.authToken}`,
                },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default APIService;
