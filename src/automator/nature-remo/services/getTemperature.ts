import { DeviceWithEvents } from 'nature-remo';

export const getTemperature = async (deviceWithEvents: DeviceWithEvents) => {
  return deviceWithEvents.newest_events.te.val
}