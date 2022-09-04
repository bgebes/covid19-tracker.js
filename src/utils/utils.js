import dateFormat, { masks } from 'dateformat';

export const capitalizeWord = (word) => {
  return word.replace(word[0], word[0].toUpperCase());
};

export const parseDate = (text) => {
  const d = new Date(text);

  masks.justDate = 'ddd mmm dd yyyy';
  masks.justTime = 'HH:MM:ss';

  return {
    date: dateFormat(d, 'justDate'),
    time: dateFormat(d, 'justTime'),
  };
};
