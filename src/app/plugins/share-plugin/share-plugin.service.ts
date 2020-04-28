import {Injectable} from '@angular/core';
import {Share, ShareOptions} from '@capacitor/core';

@Injectable()
export class SharePluginService {

    constructor() {
    }

    async share(shareOptions: ShareOptions) {
        return Share.share(shareOptions);
    }
}
