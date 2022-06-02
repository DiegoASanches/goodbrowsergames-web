export interface Games {
  results?: (ResultsEntity)[] | null;
  total_results: number;
}
export interface ResultsEntity {
  voteCount: number; // avaliação (0 a 5)
  posterPath: string; //imagem de capa para o jogo (url publica)
  id: number;
  title: string;
  overview: string;
  releaseDate: string;
}
export interface Dates {
  maximum: string;
  minimum: string;
}
