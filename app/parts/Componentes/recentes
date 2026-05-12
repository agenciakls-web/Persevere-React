import Image from 'next/image';
import Link from 'next/link';

interface Tip {
  id: number | string;
  title: string;
  slug: string;
  thumbnailUrl?: string;
}

interface LatestTipsProps {
  tips: Tip[]; // Os 4 posts viriam da sua API ou busca no banco
}

export default function LatestTips({ tips }: LatestTipsProps) {
  return (
    <aside className="w-full">
      {/* Título da Seção */}
      <h3 className="text-xl my-2 font-medium text-red-700 uppercase">
        Mais Recentes
      </h3>

      {/* Lista de Posts (Equivalente ao WP_Query) */}
      <div className="flex flex-col">
        {tips && tips.length > 0 ? (
          tips.map((tip) => (
            <div key={tip.id} className="w-full py-2">
              <Link href={`/dicas/${tip.slug}`} className="group block">
                <div className="rounded-xl overflow-hidden shadow-lg shadow-gray-300 flex bg-white h-24 md:h-28">
                  
                  {/* Div da Imagem (Equivalente ao w-1/3 com bg-cover) */}
                  <div className="w-1/3 relative overflow-hidden">
                    {tip.thumbnailUrl ? (
                      <Image
                        src={tip.thumbnailUrl}
                        alt={tip.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 33vw, 20vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200" /> // Placeholder se não houver imagem
                    )}
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="w-2/3 px-4 pt-4 pb-1 uppercase flex flex-col justify-between">
                    <h3 className="text-sm text-gray-400 font-medium line-clamp-2 leading-tight">
                      {tip.title}
                    </h3>
                    
                    <div className="text-red-700 text-right py-2 text-xs font-bold group-hover:text-red-500 transition-colors">
                      VER MAIS
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm italic">Nenhuma dica encontrada.</p>
        )}
      </div>
    </aside>
  );
}