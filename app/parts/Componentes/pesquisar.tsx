'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchForm() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) return;

    // Converte o "action" do PHP para uma navegação do Next.js
    // Substitua '/dicas' pelo caminho da sua rota de arquivo/listagem
    router.push(`/dicas?s=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="flex md:block">
        <h3 className="hidden md:block text-xl my-2 font-medium text-red-700 uppercase">
          Pesquisar
        </h3>
        
        <input
          type="text"
          name="s"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full py-3 px-4 rounded-l-lg md:rounded-lg text-lg font-medium border text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-700/50"
          placeholder="DIGITE SUA BUSCA"
        />
        
        <button
          type="submit"
          className="bg-red-700 text-gray-100 hover:bg-red-800 transition-colors font-medium rounded-r-full md:rounded-full md:my-4 py-2 px-10 block text-base uppercase"
        >
          Pesquisar
        </button>
      </div>
    </form>
  );
}