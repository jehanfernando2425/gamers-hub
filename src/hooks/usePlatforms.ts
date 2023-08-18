import { useQuery } from "@tanstack/react-query";
import APIClient,{ FetchResponse }  from "../services/api-client";
import { Platforms } from "./Platforms";

const apiClient = new APIClient<Platforms>('/platforms/lists/parents')

const usePlatforms = () => useQuery ({
     queryKey : ['platforms'],
     queryFn: apiClient.getAll,
     staleTime: 24 * 60 * 60 * 1000, //24h
})

export default usePlatforms;