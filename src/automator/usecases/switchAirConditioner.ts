import { turnOffAirConditioner, turnOnAirConditioner } from '../nature-remo';
import { format, hoursToMilliseconds, minutesToMilliseconds } from 'date-fns';

const TEMPERATURE = 32;

const TURN_OFF_DURATION = minutesToMilliseconds(20);
const TURN_ON_DURATION = minutesToMilliseconds(20);

const TIME_UNTIL_FIRST_TURN_OFF = hoursToMilliseconds(1);
const TIME_UNTIL_FIRST_TURN_ON = TIME_UNTIL_FIRST_TURN_OFF + TURN_OFF_DURATION;

const DURATION_OF_A_CYCLE = TURN_OFF_DURATION + TURN_ON_DURATION;

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
