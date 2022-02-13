import { MessageData } from '../components/Message/types';
import moment from 'moment/min/moment-with-locales';

export const formatDateForDetailedMessage = (data: MessageData | undefined) => {
  let d;
  if (data) {
    new Date(data.date);
  }
  return moment(d).format('lll');
};
