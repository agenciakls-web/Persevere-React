export interface PhotosType {
    URLArquivo: string;
    Principal: number; // 1 para verdadeiro, 0 para falso
    Alterada: number;  // 1 para verdadeiro, 0 para falso
}

export interface ImovelType {
    id?: number;
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
    PrecoCondominio?: number | null;
    AreaUtil: number;
    AreaTotal: number;

    // Quantidades e Datas
    QtdDormitorios: number;
    QtdSuites: number;
    QtdBanheiros: number;
    QtdSalas: number;
    QtdVagas: number;
    QtdElevador: number;
    QtdUnidadesAndar: number;
    QtdAndar: number;
    AnoConstrucao?: number | null;

    Observacao: string;
    titulo: string;
    TipoOferta: string; // "N" no XML

    // Características / Atributos (0 ou 1)
    AceitaPermuta: number;
    ArCondicionado: number;
    Cerca: number;
    Churrasqueira: number;
    Esgoto: number;
    EstacionamentoRotativo: number;
    EstacionamentoVisitantes: number;
    Heliponto: number;
    InfraInternet: number;
    Jardim: number;
    Lago: number;
    Lavoura: number;
    Pasto: number;
    Piscina: number;
    Playground: number;
    QuadraTenis: number;
    QuadraPoliEsportiva: number;
    RuaAsfaltada: number;
    SalaGinastica: number;
    SalaoFestas: number;
    SalaoJogos: number;
    Sauna?: number | null;
    Silos: number;
    Telefone: number;
    TVCabo: number;
    Varanda?: number | null;
    CasaCaseiro: number;
    EnergiaEletrica: number;
    Interfone: number;
    PocoArtesiano: number;
    Paiol: number;
    ProntoMorar?: number | null;
    Curral: number;
    UtilizeFGTS: number;
    Terraco?: number | null;
    Lavabo?: number | null;
    campodefutebol?: number | null;
    NomeCondominio?: string | null;

    // Lista de Fotos
    Photos: PhotosType[];
}