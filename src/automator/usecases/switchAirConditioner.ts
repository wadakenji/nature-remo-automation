import { turnOffAirConditioner, turnOnAirConditioner } from '../nature-remo';
import { format, hoursToMilliseconds, minutesToMilliseconds } from 'date-fns';

type AirConditionerState = {
  key: string;
  action: () => Promise<void>;
  duration: number;
};

const AIR_CONDITIONER_STATES: AirConditionerState[] = [
  {
    key: '32℃オン ',
    action: async () => turnOnAirConditioner({ temperature: '32' }),
    duration: minutesToMilliseconds(40),
  },
  {
    key: '30℃オン ',
    action: async () => turnOnAirConditioner({ temperature: '30' }),
    duration: minutesToMilliseconds(15),
  },
  {
    key: 'オフ ',
    action: async () => turnOffAirConditioner(),
    duration: minutesToMilliseconds(5),
  },
];

const TIME_UNTIL_START = hoursToMilliseconds(1);
const DURATION_OF_A_CYCLE = AIR_CONDITIONER_STATES.reduce(
  (acc, { duration }) => acc + duration,
  0,
);

export const switchAirConditioner = () => {
  let setTimeoutDuration = TIME_UNTIL_START;

  AIR_CONDITIONER_STATES.forEach(({ key, action, duration }) => {
    const actionAndLog = async () => {
      await action().catch(console.error);
      console.log(key, format(new Date(), 'hh時mm分'));
    };

    setTimeout(async () => {
      await actionAndLog();
      setInterval(async () => {
        await actionAndLog();
      }, DURATION_OF_A_CYCLE);
    }, setTimeoutDuration);

    setTimeoutDuration = setTimeoutDuration + duration;
  });
};
