import { MessageData } from '../components/Message/types';
import moment from 'moment/min/moment-with-locales';

export const msgType = (type: any) =>
  type === 'phone' ? 'Message vocal' : type === 'sms' ? 'SMS' : 'Message';

export const formatMsgContactPhoneNumber = (phone: string | undefined | null) => {
  let count = 0;
  return phone
    ?.split('')
    .map((el: string, index: number, arr: string[]) => {
      count++;
      if (count % 2 === 0) {
        if (index === arr.length - 1) return el;
        return el + ' ';
      }

      return el;
    })
    .join('');
};

export const formatMsgTitle = (data: MessageData | undefined): string | undefined => {
  let title;
  const first = data?.contact.firstname;
  const last = data?.contact.lastname;
  const phone = data?.contact.phone;

  if (first && last && phone) {
    if (data.type !== 'email') {
      title = `${first} ${last} +(${formatMsgContactPhoneNumber(phone)})`;
    } else {
      title = `${first} ${last}`;
    }
  } else if (first && last) {
    title = `${first} ${last}`;
  } else if (phone) {
    title = formatMsgContactPhoneNumber(phone);
  }

  return title;
};

export const formatMsgDate = (data: MessageData) => {
  let date;
  const d = new Date(data.date);
  const shouldBeTodayTime = new Date().getTime() - d.getTime() < 1000 * 60 * 60 * 24;
  const shouldBeAWeekDay = new Date().getTime() - d.getTime() < 1000 * 60 * 60 * 24 * 8;
  if (d) {
    if (shouldBeTodayTime) {
      date = moment(d).format('h:mm');
    } else if (shouldBeAWeekDay) {
      date =
        moment(d).format('dddd')[0].toUpperCase() + moment(d).format('dddd').slice(1);
    } else {
      date = moment(d).format('l');
    }
  }
  return date;
};
