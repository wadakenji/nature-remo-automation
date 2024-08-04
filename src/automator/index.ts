import { keepRecordOfTemperature } from './usecases/keepRecordOfTemperature.ts';
import { switchAirConditioner } from './usecases/switchAirConditioner.ts';

const main = async () => {
  try {
    keepRecordOfTemperature();
  } catch (e) {
    console.error(e);
  }

  switchAirConditioner();
};

main();
