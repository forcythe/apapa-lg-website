export interface Project {
  id: number;
  title: string;
  progress: number;
  expectedCompletion: string;
  objectives: string[] | string;
  results: string[];
  imageSrc: string;
}
