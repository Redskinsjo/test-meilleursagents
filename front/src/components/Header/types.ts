import { SetStateAction, Dispatch } from 'react';

export interface HeaderProps {
  agencies: Option[];
  setSelectedAgencyId: Dispatch<SetStateAction<string>>;
}

export interface Option {
  id: number;
  logo: string;
  name: string;
  unread_messages: number;
}
