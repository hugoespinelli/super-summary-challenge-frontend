import axios from "axios";

import mockBestSellers from "../api_mock_responses/overview.json"
import mockGenres from "../api_mock_responses/names.json"


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
      // return mockBestSellers
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
      // return mockGenres
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
