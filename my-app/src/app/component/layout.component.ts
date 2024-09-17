import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AboutComponent } from './f-about.component';
import { MenuComponent } from './f-menu.component';

@Component({
    selector: 'layout',
    standalone: true,
    imports: [RouterOutlet, RouterLink, AboutComponent, MenuComponent],
    templateUrl: '../html/layout.component.html',
    styleUrl: '../scss/layout.component.scss'
})

export class LayoutComponent {
}