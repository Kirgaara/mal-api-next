import { MAL_API_KEY } from "@/common/keys";
import { fetchMultipleTitles } from "@/common/types/animeFetch";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const response = await fetch(
    "https://api.myanimelist.net/v2/anime/season/2026/winter?limit=10&sort=anime_num_list_users&fields=synopsis",
    { headers: { "X-MAL-CLIENT-ID": MAL_API_KEY } },
  );
  const result: fetchMultipleTitles = await response.json();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <ol className="min-w-screen">
          {result.data.map((item, index) => (
            <li
              key={index}
              className="border-2 border-gray-200 rounded-lg m-3 mx-5 p-2"
            >
              <Link href={`/${item.node.id}`}>
                <h2 className="text-xl mb-2 pl-1 font-bold border-b">
                  {item.node.title}
                </h2>
              </Link>
              <div className="h-88 flex justify-center items-center gap-4">
                <div className="w-2/10 flex justify-center">
                  <Link href={`/${item.node.id}`}>
                    <Image
                      src={item.node.main_picture.medium}
                      alt="Anime Poster"
                      width={225}
                      height={320}
                      style={{ width: "225px", height: "320px" }}
                    />
                  </Link>
                </div>
                <h3 className="w-8/10">
                  {item.node.synopsis || "This anime has no synopsis"}
                </h3>
              </div>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
