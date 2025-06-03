export interface LanguageModel { 
  id: string;
  name: string;
  description: string;
  modelId: string;
  provider: string;
  baseUrl: string;
  costIn: number;
  costOut: number;
  flare: string[];
  maxTokens: number;
  isActive: boolean;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
}
