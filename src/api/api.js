import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
        const token = localStorage.getItem("token")

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
            console.log("header set:", config.headers.Authorization)
        } else {
            console.log("NO TOKEN — header not set")
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)


api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
        const status  = error.response?.status;
        const message = error.response?.data?.message || "Something went wrong";
 
        switch (status) {
            case 401:
                // Token expired or invalid
                // Clear storage and redirect to login
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                // window.location.href = "/login";
                break;
 
            case 403:
                // Authenticated but not authorized
                console.error("Access denied:", message);
                break;
 
            case 404:
                // Resource not found
                console.error("Not found:", message);
                break;
 
            case 409:
                // Conflict — e.g. email already registered
                console.error("Conflict:", message);
                break;
 
            case 422:
                // Business rule violation — e.g. insufficient balance
                console.error("Business rule:", message);
                break;
 
            case 500:
                // Server error
                console.error("Server error:", message);
                break;
 
            default:
                console.error("API error:", message);
                break;
        }

    return Promise.reject(error);
  }
);

export default api;