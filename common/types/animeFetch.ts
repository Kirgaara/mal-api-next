type DaysOfTheWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";
type MAL_API_Pictures = {
  large: string;
  medium: string;
};
interface ShortAnimeData {
  id: number;
  title: string;
  main_picture: MAL_API_Pictures;
}

export interface AnimeData {
  id: number;
  title: string;
  main_picture: MAL_API_Pictures;
  alternative_titles?: { synonyms: [string]; en: string; ja: string };
  average_episode_duration?: number;
  background?: string;
  broadcast?: { day_of_the_week: DaysOfTheWeek; start_time: string };
  created_at?: string;
  genres?: [{ id: number; name: string }];
  mean?: number;
  media_type?: string;
  nsfw?: string;
  num_episodes?: number;
  num_list_users?: number;
  num_scoring_users?: number;
  pictures?: [MAL_API_Pictures];
  popularity?: number;
  rank?: number;
  rating?: string;
  recommendations?: [{ node: ShortAnimeData; num_recomendations: number }];
  related_anime?: [
    {
      node: ShortAnimeData;
      relation_type: string;
      relation_type_formatted: string;
    },
  ];
  related_manga?: [];
  source?: string;
  start_date?: string;
  start_season?: {
    year: number;
    season: "winter" | "spring" | "summer" | "fall";
  };
  statistics?: {
    status: {
      completed: string;
      dropped: string;
      on_hold: string;
      plan_to_watch: string;
      watching: string;
    };
    num_list_users: number;
  };
  status?: string;
  studios?: [{ id: number; name: string }];
  synopsis?: string;
  updated_at?: string;
}

export interface fetchMultipleTitles {
  data: [
    {
      node: AnimeData;
    },
  ];
  paging: {
    next: string;
  };
  season: {
    year: number;
    season: string;
  };
}
