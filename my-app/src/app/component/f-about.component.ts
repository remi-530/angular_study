import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'f-about',
    standalone: true,
    imports: [RouterOutlet],
    template: `
    <div class="flex">
    <span class="material-symbols-outlined">arrow_right</span>
        <p>{{ title }}</p>
    </div>
    `,
    styles: [`
    .flex {
        display: flex;

        p {
            margin: 0;
            font-size: 14px;
        }
    }
    `]
})

export class AboutComponent {
    @Input() title='';
}