import http from '@/api/http';

const getWeather = async () => {
  return await http.get('/hp/api/weather?clubCode=ljcku');
};

export { getWeather };