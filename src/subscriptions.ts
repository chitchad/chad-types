export interface SubscriptionAccount {
  id: string;
  ownerid: string;
  productid: string;
  offeringid: string;

  members: string[];  // uids of members under this account
  
  createdAt: Date;
  updatedAt: Date;
}

export interface UserSubscription {
  uid: string;
  teamid: string;
  accountid: string;  // Reference to the billing account
  role: 'owner' | 'member';
  isActive: boolean;
  offeringsid: string;
  productid: string;
  planName: string;
  seats: number;
  members: string[];
  nextRenewal: Date;
  nextReset: Date;
  expiresAt: Date;
  lastPurchase: Date;
  monthly_max_tokens: number;
  createdAt: Date;
  updatedAt: Date;
}


export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  monthly: number;
  monthly_url: string;
  yearly: number;
  yearly_url: string;
  test_url: string;
  discount: string;
  seats: number;
  order: number;
  offeringsid: string;
  monthly_max_tokens: number;
  isActive: boolean;
}