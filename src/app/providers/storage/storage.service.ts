import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {StoragePluginService} from '../../plugins/storage-plugin/storage-plugin.service';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    private TOKEN = 'token';
    private USER = 'user';
    private DEVICE_ID: 'device_id';
    constructor(
        private storage: Storage,
        private storagePluginService: StoragePluginService
    ) {
    }

    setUserToken(token: string) {
        return this.storagePluginService.set(this.TOKEN, token);
    }

    getUserToken() {
        return this.storagePluginService.get(this.TOKEN);
    }

    setUser(user) {
        return this.storage.set(this.USER, user);
    }

    getUser() {
        return this.storage.get(this.USER);
    }

    setDeviceId(deviceId) {
        return this.storage.set(this.DEVICE_ID, deviceId);
    }

    getDeviceId() {
        return this.storage.get(this.DEVICE_ID);
    }

    removeDeviceId() {
        return this.storage.remove(this.DEVICE_ID);
    }

    setData(key, value) {
        this.setLocalData(key, true);
        return this.storage.set(key, value);
    }

    setImageData(key, value) {
        return this.storage.set(key, value);
    }

    getData(key) {
        return this.storage.get(key);
    }

    setLocalData(key, value) {
        return localStorage.setItem(key, value);
    }


    getLocalData(key) {
        return localStorage.getItem(key);
    }

    async clear() {
        this.storagePluginService.clear();
        localStorage.clear();
        this.storage.clear();
    }
}

