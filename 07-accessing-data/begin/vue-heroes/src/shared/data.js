import * as axios from 'axios';
import { format } from 'date-fns';
import { inputDateFormat } from './constants';

const getHeroes = async function() {
  const response = await axios.get('api/heroes.json');
  console.log(`response.data" ${response.data}`);
  const heroes = response.data.map(h => {
    h.originDate = format(h.originDate, inputDateFormat);
    return h;
  });
  return heroes;
};

export const data = {
  getHeroes,
};
