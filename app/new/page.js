'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config.js";
import { CardListSection } from "../components/CardListSection/CardListSection";
import { Preloader } from "../components/Preloader/Preloader"; 

export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    <main className="main-inner">
      {newGames ? (
        <CardListSection id="new" title="Новые" data={newGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
} 