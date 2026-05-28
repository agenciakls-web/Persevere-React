'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ImovelType } from '../tipagem/imoveis';

export default function ListImoveisCard({ imovel }: { imovel: ImovelType }) {
  const fotoCapa = imovel.Photos?.find((p) => p.Principal === 1)?.URLArquivo || "/img/sem-foto.png"; 

    return (
        <Link
            href={`/imoveis/codigo/${imovel.CodigoImovel}`}
            key={imovel.CodigoImovel}
            className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1"
        >
            <div className="relative h-64">
                {fotoCapa && (
                    <Image
                        src={fotoCapa}
                        alt={imovel.SubTipoImovel}
                        fill
                        className="object-cover"
                    />
                )}
            </div>
            <div className="p-4">
                <p className="text-sm text-orange-500">
                    {imovel.Bairro} -{' '}
                    {imovel.Cidade}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-blue-500">
                    {imovel.SubTipoImovel}
                </h3>
                <p className="mt-2 text-gray-500">
                    {imovel.QtdDormitorios} quartos •{' '}
                    {imovel.QtdBanheiros} banheiros
                </p>
                <p className="text-gray-500">
                    {imovel.QtdVagas} vagas
                </p>
                {imovel.AreaTotal && (
                    <p className="text-gray-500">
                        {imovel.AreaTotal}m²
                    </p>
                )}
                {imovel.PrecoVenda && (
                    <div className="mt-4 text-2xl font-bold text-blue-500">
                        {imovel.PrecoVenda.toLocaleString(
                            'pt-BR',
                            {
                                style: 'currency',
                                currency: 'BRL',
                            }
                        )}
                    </div>
                )}
            </div>
        </Link>
    );
}