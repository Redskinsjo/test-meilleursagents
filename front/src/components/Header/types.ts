import { SetStateAction, Dispatch } from 'react';

export interface HeaderProps {
  agencies: Option[];
  setSelectedAgencyId: Dispatch<SetStateAction<string | undefined>>;
  count: number;
  selectedAgencyId: string | undefined;
}

export interface Option {
  id: number;
  logo: string;
  name: string;
  unread_messages: number;
}
