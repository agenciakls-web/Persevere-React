import Image from 'next/image';
import Link from 'next/link';

// Tipagem para os dados do Post
interface Post {
  id: number | string;
  title: string;
  slug: string;
  thumbnailUrl?: string;
}

interface PostGridProps {
  posts: Post[];
  paginationData?: any; // Aqui você passaria os dados da sua paginação
}

export default function PostGridComponent({ posts, paginationData }: PostGridProps) {
  return (
    <section className="w-full">
      {/* Container Principal do Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="px-2 py-4">
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="rounded-xl overflow-hidden shadow-lg shadow-gray-300 h-full flex flex-col bg-white transition-all">
                  
                  {/* Thumbnail (Equivalente ao has_post_thumbnail) */}
                  {post.thumbnailUrl && (
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={post.thumbnailUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  {/* Conteúdo do Card */}
                  <div className="px-4 md:px-8 pt-4 md:pt-8 pb-2 md:pb-4 uppercase flex flex-col justify-between grow">
                    <h3 className="text-base md:text-xl text-gray-400 font-medium pb-3 md:pb-6 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    {/* Botão VER MAIS */}
                    <div className="text-red-700 text-right py-2 text-base md:text-xl font-bold group-hover:text-red-500 transition-colors">
                      VER MAIS
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center py-10 text-gray-500">
            Nenhum post encontrado.
          </p>
        )}
      </div>

      {/* Paginação (Equivalente ao paginateList) */}
      <div className="mt-8 flex justify-center gap-2">
        {/* Exemplo estático de paginação - substitua pela sua lógica de rota */}
        <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50">
          Anterior
        </button>
        <button className="px-4 py-2 bg-red-700 text-white rounded-md">
          1
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
          Próximo
        </button>
      </div>
    </section>
  );
}