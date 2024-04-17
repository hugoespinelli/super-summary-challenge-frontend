import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;


const apiClient = axios.create({
  baseURL: "https://api.nytimes.com/svc/books/v3",
  headers: {
    "Content-Type": "application/json",
  },
});


class BestSellersAPI {
  static async fetchTopBestSellers() {
    try {
      const response = await apiClient.get("/lists/overview.json", {
        params: {
          "api-key": API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching TopBestSeller:", error);
      throw error;
    }
  }

  static async fetchGenres() {
    try {
      const response = await apiClient.get("/lists/names.json", {
        params: {
          "api-key": API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching TopBestSeller:", error);
      throw error;
    }
  }
}

export default BestSellersAPI;
