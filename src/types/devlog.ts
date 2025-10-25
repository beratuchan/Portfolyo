// types/devlog.ts
export interface DevlogContent {
  id: number;
  title: string;
  date: string;
  author: string;
  coverImage: string;
  content: DevlogBlock[];
}

export type DevlogBlock = 
  | { type: 'paragraph'; content: string }
  | { type: 'heading'; level: 2 | 3; text: string; className?: string }
  | { type: 'code'; language: string; code: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'quote'; text: string; author?: string };