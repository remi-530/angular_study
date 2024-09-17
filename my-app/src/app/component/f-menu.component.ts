import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'f-menu',
    standalone: true,
    imports: [ RouterOutlet ],
    template:`
    <div class="menu-list">
        @for(menu of menus; track menu.name ){
            <div class="menu">
                <p>{{ menu.name }}</p>
            </div>
        }
    </div>
    `,
    styles: [`
    .menu-list {
        border-top: 1px solid black;

        .menu {
            padding: 15px;
            border-bottom: 1px solid black;

            p {
                margin: 0;
                font-size: 13px;
            }
        }
    }
    `]
})

export class MenuComponent {
    menus = [
        {name: 'NEW'},
        {name: 'CATEGORY'},
        {name: 'COLUMN'},
        {name: 'SERIES'},
        {name: 'Q&A'},
    ]
}