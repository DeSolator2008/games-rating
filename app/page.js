"use client";
import { useEffect } from "react";
import { getNormalizedGamesDataByCategory } from "./api/api-utils.js";
import { endpoints } from "./api/config.js";
import { Banner } from "./components/Banner/Banner";
import { CardList } from "./components/CardListSection/CardList.jsx";
import { Promo } from "./components/Promo/Promo";

export default async function Home() {
  useEffect(() => {
    const getData = async (url) => {
      try {
        const response = await fetch(url);
        if (response.status !== 200) {
          throw new Error("Ошибка получения данных");
        }
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        return error;
      }
    };
    getData("https://api-code-2.practicum-team.ru/games");
  }, []);
  const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, "popular");
  const newGames = await getNormalizedGamesDataByCategory(endpoints.games, "new"); 
  return (
    <main className="main">
      <Banner/>
      <CardList id="popular" title="Популярное" data={popularGames} />
      <CardList id="new" title="Новинки" data={newGames} />
      <Promo/>
    </main>
  );
}
