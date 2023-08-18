import Genre from './Genre'
import { Platforms } from "../hooks/Platforms";
import Publisher  from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres:Genre[];
  publishers:Publisher[];
  background_image: string;
  parent_platforms: { platform: Platforms; }[];
  metacritic: number;
  description_raw: string;
}
