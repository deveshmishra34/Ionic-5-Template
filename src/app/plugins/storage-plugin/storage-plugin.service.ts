import {Injectable} from '@angular/core';
import {Storage} from '@capacitor/core';

@Injectable({
    providedIn: 'root'
})
export class StoragePluginService {

    constructor() {
    }

    async clear(): Promise<void> {
        return Storage.clear();
    }

    async get(key: string): Promise<{ value: any }> {
        return Storage.get({key});
    }

    async keys(): Promise<{ keys: any }> {
        return Storage.keys();
    }

    async remove(key: string): Promise<void> {
        return Storage.remove({key});
    }

    async set(key: string, value: string): Promise<void> {
        return Storage.set({key, value});
    }
}
