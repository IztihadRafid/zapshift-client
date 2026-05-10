import axios from "axios";

const useAxiosSecure = () => {

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:8082',

    })
    return axiosSecure
};

export default useAxiosSecure;


