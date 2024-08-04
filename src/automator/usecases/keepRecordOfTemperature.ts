import { addDays, format, getHours, startOfDay } from 'date-fns';
import { getTemperature, getMyDevice } from '../nature-remo';
import { readJsonFile, writeJsonFile } from '../../utils/json.ts';
import { TemperatureRecord } from '../../types';
import { getAirConditionerTemperatureSetting } from '../nature-remo/services/getAirConditionerTemperatureSetting.ts';

export const keepRecordOfTemperature = () => {
  const executingDatetime = new Date();
  const targetDate =
    getHours(executingDatetime) > 6
      ? startOfDay(executingDatetime)
      : startOfDay(addDays(executingDatetime, -1));
  const filename = format(targetDate, 'yyyyMMdd');
  writeJsonFile(filename, []);

  setInterval(
    async () => {
      const myDevice = await getMyDevice();
      const temperature = await getTemperature(myDevice);
      const airConditionerTemperatureSetting =
        await getAirConditionerTemperatureSetting();
      const temperatureRecord: TemperatureRecord = {
        datetime: new Date(),
        temperature,
        airConditionerTemperatureSetting,
      };

      const temperatureRecords = readJsonFile(filename) as TemperatureRecord[];
      temperatureRecords.push(temperatureRecord);
      writeJsonFile(filename, temperatureRecords);
    },
    1000 * 60 * 5,
  );
};
