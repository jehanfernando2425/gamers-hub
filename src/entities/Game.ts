import { Platforms } from "./Platforms";


export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platforms; }[];
  metacritic: number;
  description_raw: string;
}
