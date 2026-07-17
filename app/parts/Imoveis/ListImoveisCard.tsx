'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ImovelType } from '../tipagem/imoveis';

export default function ListImoveisCard({ imovel }: { imovel: ImovelType }) {
    const fotoCapa = imovel.Photos?.find((p) => p.Principal === 1)?.URLArquivo || "/img/sem-foto.png";

    return (
        <Link
            href={`/imoveis/codigo/${imovel.CodigoImovel}`}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                <Image
                    src={fotoCapa}
                    alt={imovel.SubTipoImovel || "Foto do imóvel"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-1 flex-col p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">
                    {imovel.Bairro} - {imovel.Cidade}
                </p>
                <h3 className="mt-1 text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {imovel.SubTipoImovel}
                </h3>

                <div className="mt-2 space-y-0.5 text-sm text-gray-500">
                    <p>
                        {imovel.QtdDormitorios || 0} quartos • {imovel.QtdBanheiros || 0} banheiros
                    </p>
                    <p>
                        {imovel.QtdVagas || 0} vagas {imovel.AreaTotal ? `• ${imovel.AreaTotal}m²` : ''}
                    </p>
                </div>

                {imovel.PrecoVenda && (
                    <div className="mt-auto pt-4 text-xl font-extrabold text-blue-600">
                        {Number(imovel.PrecoVenda).toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        })}
                    </div>
                )}
            </div>
        </Link>
    );
}