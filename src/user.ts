
export interface UserProfile { 
  uid: string;
  email: string;
  phoneNumber: string;  
  displayName: string;
  photoUrl: string;
  isActive: boolean;
  bio: string;
  interests: string[];
  darkMode: boolean;
  language: string;
  notificationsEnabled: boolean;
  metadata: object;
  authProviders: string[];
  lastActiveChatId?: string;  // ID of the last active chat
  createdAt: Date;
  updatedAt: Date;
}

export interface Contact {
  id: string;
  uid: string;  // The user who owns this contact
  contactId: string;  // The user being added as contact
  status: 'pending' | 'accepted' | 'blocked';
  createdAt: Date;
  updatedAt: Date;
}

export interface Invite{
  id: string;
  chatId: string;
  email: string;
  accountid: string;
  inviterUid: string;
  inviteeUid: string;
  code: string;
  status: "pending" | "accepted" | "declined";
  createdAt: Date;
  updatedAt: Date;
  acceptedAt?: Date;

}

export interface LLMUsage{
  uid: string;
  model: string;
  endpoint: string;
  messageid: string;
  chatid: string;
  type: "prompt" | "response" | "tool" | "error";
  status: "success" | "error";
  error?: string;

  promptTokens?: number;
  responseTokens?: number;
  tokensUsed?: number;
  duration?: number;        // Duration in milliseconds
  source: "api" | "client"; // Where the request originated from
  cost?: number;           // Cost in USD
  metadata?: {            // Additional context-specific data
    toolName?: string;    // If type is "tool", which tool was used
    retryCount?: number;  // Number of retries if any
    [key: string]: any;   // Allow for future extensibility
  };
}

export interface UserUsage {
  uid: string;
  tokensUsed: number;
  tokensQuota: number
  messagesSent: number;
  periodStart: Date;
  updatedAt: Date;
  
}

/* export interface UserSubscription {
  uid: string;
  offeringid: string;
  productid: string;
  price: number;
  status: "active" | "expired";
  nextReset: Date;
  expiresAt: Date;
  lastPurchase: Date;
  createdAt: Date;
  updatedAt: Date;
} */