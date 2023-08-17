import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Platforms } from "./usePlatforms";

const apiClient = new APIClient<Game>('/games');

export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platforms}[];
    metacritic: number;
  }

const useGames = () => {
  const gameQuery=  useGameQueryStore(s=> s.gameQuery)

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey:['games', gameQuery],
    queryFn : ({pageParam = 1})=>
      apiClient
      .getAll({
        params:{
          genres:gameQuery.genreID, 
          parent_platforms :gameQuery.platformID, 
          ordering : gameQuery.sortOrder,
          search : gameQuery.searchText,
          page: pageParam,
      },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ?  allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000
    
  })

}
  

export default useGames