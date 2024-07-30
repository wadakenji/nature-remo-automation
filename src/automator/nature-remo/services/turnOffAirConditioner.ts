import { CloudClient } from '../client.ts';
import { LIVING_AIR_CONDITIONER_ID } from '../../constants';

export const turnOffAirConditioner = async () => {
  await CloudClient.updateAirconSettings(LIVING_AIR_CONDITIONER_ID, {
    button: 'power-off',
  });
};
