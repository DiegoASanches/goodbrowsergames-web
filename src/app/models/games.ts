export interface Games {
  results?: (ResultsEntity)[] | null;
  page: number;
  total_results: number;
  dates: Dates;
  total_pages: number;
}
export interface ResultsEntity {
  vote_count: number; // avaliação (0 a 5)
  poster_path: string; //imagem de capa para o jogo (url publica)
  id: number;
  title: string;
  overview: string;
  release_date: string;
}
export interface Dates {
  maximum: string;
  minimum: string;
}
