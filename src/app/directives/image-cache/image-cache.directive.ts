import {Directive, ElementRef, Input, OnChanges} from '@angular/core';
import {StorageService} from '../../providers/storage/storage.service';
import {Observable, Observer} from 'rxjs';

@Directive({
    selector: '[appImageCache]'
})
export class ImageCacheDirective implements OnChanges {

    base64DefaultURL;
    @Input('appImageCache') imageUrl = '';

    constructor(
        private el: ElementRef,
        private storageService: StorageService
    ) {
    }

    async ngOnChanges() {

        // console.log('appImageCache: ', this.imageUrl, this.el, this.viewContainerRef);
        // const data = await this.storageService.getData(this.imageUrl);
        // if (data) {
        //     this.el.nativeElement.src = data;
        // } else {
            this.el.nativeElement.src = this.imageUrl;
        //     const regex = /https:\/\/i\.ytimg\.com\/vi\/[a-zA-Z0-9_-]+\/mqdefault\.jpg/gm;
        //     let m;
        //
        //     if ((m = regex.exec(this.imageUrl)) === null)  {
        //         this.getBase64ImageFromURL(this.imageUrl).subscribe(
        //             base64 => {
        //                 this.storageService.setImageData(this.imageUrl, base64);
        //                 // console.log('base64: ', base64);
        //             }
        //         );
        //     }
        // }

    }

    getBase64ImageFromURL(url: string) {
        return Observable.create((observer: Observer<string>) => {
            // create an image object
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = url;
            if (!img.complete) {
                // This will call another method that will create image from url
                img.onload = () => {
                    observer.next(this.getBase64Image(img));
                    observer.complete();
                };
                img.onerror = (err) => {
                    observer.error(err);
                };
            } else {
                observer.next(this.getBase64Image(img));
                observer.complete();
            }
        });
    }

    getBase64Image(img: HTMLImageElement) {
        // We create a HTML canvas object that will create a 2d image
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        // This will draw image
        ctx.drawImage(img, 0, 0);
        // Convert the drawn image to Data URL
        const dataURL = canvas.toDataURL('image/png');
        this.base64DefaultURL = dataURL;
        return dataURL;
    }

}
