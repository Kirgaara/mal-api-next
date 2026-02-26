import { MAL_API_KEY } from "@/common/keys";
import { fetchMultipleTitles } from "@/common/types/animeFetch";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const response = await fetch(
    "https://api.myanimelist.net/v2/anime/season/2026/winter?limit=10&sort=anime_num_list_users",
    { headers: { "X-MAL-CLIENT-ID": MAL_API_KEY } },
  );
  const result: fetchMultipleTitles = await response.json();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <ol>
          {result.data.map((item, index) => (
            <li key={index}>
              <Link href={`/${item.node.id}`}>
                <h2>{item.node.title}</h2>
                <div
                  style={{
                    position: "relative",
                    width: "250px",
                    height: "350px",
                  }}
                >
                  <Image
                    src={item.node.main_picture.medium}
                    alt="Anime Poster"
                    fill={true}
                    sizes="(max-width: 250px) 100vw"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
