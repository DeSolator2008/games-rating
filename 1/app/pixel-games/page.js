'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config.js";
import { CardListSection } from "../components/CardListSection/CardListSection";
import { Preloader } from "../components/Preloader/Preloader"; 

export default function Pixel () {
const pixelGames = useGetDataByCategory(endpoints.games, "pixel");
return (
    <main className="main-inner">
    {pixelGames ? (
      <CardListSection id="pixel" title="Пиксельные" data={pixelGames} />
      ) : (
        <Preloader />
      )}
    </main>
)
}