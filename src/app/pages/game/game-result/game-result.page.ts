import {Component, OnInit} from '@angular/core';

declare const confetti;

@Component({
    selector: 'app-game-result',
    templateUrl: './game-result.page.html',
    styleUrls: ['./game-result.page.scss'],
})
export class GameResultPage implements OnInit {

    constructor() {
    }

    ngOnInit() {
        this.schoolPride();
    }

    schoolPride() {
        const end = Date.now() + (5 * 1000);
        const colors = ['#bb0000', '#ffffff'];
        (function frame() {
            // launch a few confetti from the left edge
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                startVelocity: 20,
                // shapes: ['square', 'circle', 'circle', 'square'],
                colors: colors,
                origin: {x: 0}
            });
            // and launch a few from the right edge
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                startVelocity: 20,
                // shapes: ['square', 'circle', 'circle', 'square'],
                colors: colors,
                origin: {x: 1}
            });

            // keep going until we are out of time
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

    }

}
