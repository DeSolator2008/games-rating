'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config.js";
import { CardListSection } from "../components/CardListSection/CardListSection";
import { Preloader } from "../components/Preloader/Preloader"; 

export default function New () {
const popularGames = useGetDataByCategory(endpoints.games, "popular");
return (
  <main className="main-inner">
    {popularGames ? (
    <CardListSection id="popular" title="Популярное" data={popularGames} />
    ) : (
        <Preloader />
      )}
  </main>
);
}