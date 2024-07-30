import { CloudClient } from '../client.ts';
import { LIVING_AIR_CONDITIONER_ID } from '../../constants';
import { UpdateAirconSettingsOptions } from 'nature-remo';

export const turnOnAirConditioner = async (
  options: Partial<UpdateAirconSettingsOptions>,
) => {
  await CloudClient.updateAirconSettings(LIVING_AIR_CONDITIONER_ID, options);
};
