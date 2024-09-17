import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'welcome',
    standalone: true,
    imports: [RouterOutlet],
    template: `
    <p>welcomeページです。</p>
    <p>これは練習に使わない</p>
    `,
})
export class WelcomeComponent {
}
