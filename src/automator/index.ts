import { keepRecordOfTemperature } from './usecases/keepRecordOfTemperature.ts';
import { switchAirConditioner } from './usecases/switchAirConditioner.ts';

const main = async () => {
  keepRecordOfTemperature();
  switchAirConditioner();
};

main();
