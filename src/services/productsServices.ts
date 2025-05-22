import api, { VITE_BACK_END_URL } from "./api";
import { ProductProps } from "../components/Product";
import axios from "axios";

export const getAllProducts = async () => {
  try {
    const response = await axios.get<ProductProps[]>(VITE_BACK_END_URL, {
      params: {
        action: "getAll",
      },
    });

    // console.log("getAllProducts", response.data);

    return response.data;
  } catch (error) {
    console.error("Error getAllProducts data:", error);
    return [];
  }
};
