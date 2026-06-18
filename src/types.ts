/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  seoKeyword: string;
  description: string;
  longDescription: string;
  benefits: string[];
  image: string;
  techStack?: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  logoText: string;
  author: string;
  role: string;
  rating: number;
  text: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
  isQuickReply?: boolean;
}

export interface QuickReplyOption {
  key: string;
  label: string;
  prompt: string;
}
