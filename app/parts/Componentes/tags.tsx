import Link from 'next/link';

interface Tag {
  id: string | number;
  name: string;
  slug: string;
}

interface TagCloudProps {
  tags: Tag[];
}

export default function TagCloud({ tags }: TagCloudProps) {
  return (
    <aside className="w-full">
      {/* Título da Seção */}
      <h3 className="text-xl my-2 font-medium text-red-700 uppercase">
        Tags
      </h3>

      {/* Container de Tags (Equivalente ao flex-wrap md:block) */}
      <div className="my-2 flex flex-wrap md:block">
        {tags && tags.length > 0 ? (
          tags.map((tag) => (
            <div key={tag.id} className="inline-block md:block">
              <Link href={`/dicas/tag/${tag.slug}`}>
                <span className="
                  inline-block 
                  my-1 mx-1 
                  md:mx-0 md:my-2 
                  py-2 px-2 md:px-4 
                  text-xs md:text-lg 
                  text-red-700 font-bold uppercase 
                  border md:border-2 border-red-700
                  hover:bg-red-700 hover:text-white 
                  transition-colors duration-200
                  cursor-pointer
                ">
                  {tag.name}
                </span>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-sm italic">Nenhuma tag encontrada.</p>
        )}
      </div>
    </aside>
  );
}