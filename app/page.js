"use client";

import { useEffect, useState } from "react";

const API = "https://pokeapi.co/api/v2/pokemon/${id}";

export default function PokemonPage() {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCharacterById = async (id) => {
    setLoading(true);
    setError("");
    try {
      const characterApi = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
      );
      if (characterApi.ok) {
        const response = await characterApi.json();
        setHero(response);
      } else {
        setError("iim pokemon oldsongui");
      }
    } catch (err) {
      setError("check internet");
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchCharacterById(1);
  }, []);
  const randomBtn = () => {
    const randomNumber = Math.floor(Math.random() * 159) + 1;
    fetchCharacterById(randomNumber);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-900 px-6 py-12 text-white">
      <h1 className="text-3xl font-bold">⚡ Покемон карт</h1>

      <div className="flex h-[440px] w-80 flex-col items-center justify-center rounded-3xl bg-white p-6 text-slate-900 shadow-xl">
        {loading && <div>Achaalj bn</div>}
        {!loading && error && <p>error</p>}
        {hero !== null && !loading && !error && (
          <div>
            <img src={hero.sprites.other["official-artwork"].front_default} />
            <div>{hero.name}</div>
          </div>
        )}
      </div>

      <button
        onClick={randomBtn}
        className="rounded-xl bg-yellow-400 px-8 py-3 text-lg font-bold text-slate-900 hover:bg-yellow-300 disabled:opacity-50"
      >
        🎲 Санамсаргүй
      </button>
    </main>
  );
}
