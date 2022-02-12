import { SetStateAction, Dispatch } from 'react';

// index.tsx
export interface MessageProps {
  key: any;
  data: MessageData;
  setSelectedMessageId: Dispatch<SetStateAction<string>>;
}

export interface MessageData {
  body: string;
  contact: MessageContact;
  date: Date;
  id: number;
  read: boolean;
  subject: string;
  type: string | undefined;
}

interface MessageContact {
  email: string;
  firstname: string | undefined | null;
  lastname: string | undefined | null;
  phone: string | undefined | null;
}

// index.styled.ts
export interface IMessageProps {
  read: boolean | undefined;
}
