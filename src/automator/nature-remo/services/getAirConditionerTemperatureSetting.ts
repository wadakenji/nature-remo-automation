import { CloudClient } from '../client.ts';
import { LIVING_AIR_CONDITIONER_ID } from '../../constants';

export const getAirConditionerTemperatureSetting = async (): Promise<
  number | null
> => {
  const airConditionerList = await CloudClient.listAircon();
  const airConditioner = airConditionerList.find(
    (a) => a.id === LIVING_AIR_CONDITIONER_ID,
  );

  if (!airConditioner || !airConditioner.settings)
    throw new Error('living air conditioner not found.');

  const { button, temp } = airConditioner.settings;

  if (button === 'power-off') return null;

  return Number(temp);
};
