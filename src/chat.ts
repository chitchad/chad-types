
export interface Chatroom {
  id: string;
  title: string;
  aiTitle: boolean;
  manualTitle: boolean;
  members: string[];
  uid: string;
  model: string;
  instructions?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastMessage?: ChatMessage;
  status?: {
    type: 'typing' | 'generating' | 'thinking' | 'idle';
    name?: string;
    uid?: string;  // For typing status, who is typing
    modelId?: string;  // For generating status, which model is generating
    createdAt: Date;
  }[];
}

export interface MessageRating {
  uid: string;
  rating: number;
  createdAt: Date;
}

export interface ChatMessage {
  id: string;
  chatid: string;
  uid: string;
  model: string;
  role: string;
  content: string;
  tokenCount: number;
  createdAt: Date;
  rating?: MessageRating[];
}

export type PromptMessage = {
  role: string;
  content: string;
  toolCallId?: string;
  name?: string;
};

export interface ChatroomStatus {
  name: string;
  uid: string;
  modelId: string;
  type: string;
  createdAt: Date;
} 