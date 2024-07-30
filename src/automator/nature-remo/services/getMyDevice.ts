import { CloudClient } from '../client.ts';
import { MY_DEVICE_ID } from '../../constants';

export const getMyDevice = async () => {
  const devices = await CloudClient.getDevices()
  const myDevice = devices.find(device => device.id === MY_DEVICE_ID)

  if (!myDevice) throw new Error('my device not found.')

  return myDevice
}