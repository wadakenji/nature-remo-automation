import { turnOffAirConditioner, turnOnAirConditioner } from '../nature-remo';
import { format } from 'date-fns';

const TEMPERATURE = 29;
const TIME_UNTIL_FIRST_TURN_OFF = 1000 * 60 * 60 * 1;
const TIME_UNTIL_FIRST_TURN_ON = TIME_UNTIL_FIRST_TURN_OFF + 1000 * 60 * 30;
const DURATION_OF_A_CYCLE = 1000 * 60 * 60 * 1;

const turnOffAndLog = async () => {
  await turnOffAirConditioner();
  console.log('オフ: ', format(new Date(), 'hh時mm分'));
};

const turnOnAndLog = async () => {
  await turnOnAirConditioner({ temperature: String(TEMPERATURE) });
  console.log('オン: ', format(new Date(), 'hh時mm分'));
};

export const switchAirConditioner = () => {
  setTimeout(async () => {
    await turnOffAndLog();
    setInterval(async () => {
      await turnOffAndLog();
    }, DURATION_OF_A_CYCLE);
  }, TIME_UNTIL_FIRST_TURN_OFF);

  setTimeout(async () => {
    await turnOnAndLog();
    setInterval(async () => {
      await turnOnAndLog();
    }, DURATION_OF_A_CYCLE);
  }, TIME_UNTIL_FIRST_TURN_ON);
};
