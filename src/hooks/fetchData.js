import axios from "axios";
import { useQuery } from "react-query";

const axiosInstance = axios.create({
  baseURL: " http://localhost:3004",
});

export const getInsideData = async () => {
  return await axiosInstance.get("/Indata");
};

export const getOutsideData = async () => {
  return await axiosInstance.get("/outData");
};

export const useFetch = (name, fn) => {
  const { data, isLoading, isError } = useQuery(name, fn, {
    retry: 3,
    refetchOnReconnect: true,
  });

  return { data, isLoading, isError };
};
