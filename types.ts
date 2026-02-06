
export interface HoroscopeResult {
  title: string;
  nameGiven: string;
  prediction: string;
  remedy: string;
  funnyNote: string;
}

export interface AppState {
  image: string | null;
  loading: boolean;
  result: HoroscopeResult | null;
  error: string | null;
}
