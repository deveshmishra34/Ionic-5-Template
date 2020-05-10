import {Injectable} from '@angular/core';
import {Device, DeviceBatteryInfo, DeviceInfo, DeviceLanguageCodeResult} from '@capacitor/core';

@Injectable()
export class DevicePluginService {

    constructor() {
    }

    async getDeviceInfo(): Promise<DeviceInfo> {
        return await Device.getInfo();
    }

    async getBatteryInfo(): Promise<DeviceBatteryInfo> {
        return await Device.getBatteryInfo();
    }

    async getLanguageCode(): Promise<DeviceLanguageCodeResult> {
        return await Device.getLanguageCode();
    }
}
