import { MAL_API_KEY } from "@/common/keys";
import { AnimeData } from "@/common/types/animeFetch";
import Image from "next/image";

async function fetchAnime(id: string) {
  const response = await fetch(
    `https://api.myanimelist.net/v2/anime/${id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`,
    {
      headers: { "X-MAL-CLIENT-ID": MAL_API_KEY },
    },
  );
  return await response.json();
}

export default async function AnimePage({
  params,
}: {
  params: Promise<{ animeId: string }>;
}) {
  const { animeId } = await params;
  const { title, main_picture }: AnimeData = await fetchAnime(animeId);
  return (
    <div>
      <h1>{title}</h1>
      <Image
        src={main_picture.large}
        alt="Anime Poster"
        width={250}
        height={350}
        loading="eager"
      ></Image>
    </div>
  );
}
