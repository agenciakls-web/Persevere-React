

export interface PhotosType {
    URLArquivo: string;
    Principal: boolean | number; // 1 para true, 0 para false
    Alterada: boolean | number;
}

export interface ImovelType {
    CodigoCliente?: string | null;
    CodigoImovel: string;
    TipoImovel: string;
    SubTipoImovel: string;
    CategoriaImovel: string;
    Cidade: string;
    Bairro: string;
    CEP: string;
    PrecoVenda: number;
    PrecoLocacao: number;
    PrecoLocacaoTemporada: number;
    AreaUtil: number;
    AreaTotal: number;

    // Quantidades
    QtdDormitorios: number;
    QtdSuites: number;
    QtdBanheiros: number;
    QtdSalas: number;
    QtdVagas: number;
    QtdElevador: number;
    QtdUnidadesAndar: number;
    QtdAndar: number;

    Observacao: string;
    titulo: string;
    TipoOffer: string; // Ex: "N"

    // Características / Booleanos (0 ou 1)
    AceitaPermuta: boolean | number;
    ArCondicionado: boolean | number;
    Cerca: boolean | number;
    Churrasqueira: boolean | number;
    Esgoto: boolean | number;
    EstacionamentoRotativo: boolean | number;
    EstacionamentoVisitantes: boolean | number;
    Heliponto: boolean | number;
    InfraInternet: boolean | number;
    Jardim: boolean | number;
    Lago: boolean | number;
    Lavoura: boolean | number;
    Pasto: boolean | number;
    Piscina: boolean | number;
    Playground: boolean | number;
    QuadraTenis: boolean | number;
    QuadraPoliEsportiva: boolean | number;
    RuaAsfaltada: boolean | number;
    SalaGinastica: boolean | number;
    SalaoFestas: boolean | number;
    SalaoJogos: boolean | number;
    Silos: boolean | number;
    Telefone: boolean | number;
    TVCabo: boolean | number;
    CasaCaseiro: boolean | number;
    EnergiaEletrica: boolean | number;
    Interfone: boolean | number;
    PocoArtesiano: boolean | number;
    Paiol: boolean | number;
    Curral: boolean | number;
    UtilizeFGTS: boolean | number;

    // Lista de Fotos
    Photos: PhotosType[];
}
