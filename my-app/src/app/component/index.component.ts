import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopComponent } from './top.component';
import { LeftComponent } from './left.component';
import { RankingComponent } from './ranking.component';
import { ArchiveComponent } from './archive.component';

@Component({
    selector: 'index',
    standalone: true,
    imports: [RouterOutlet, TopComponent, LeftComponent, RankingComponent, ArchiveComponent],
    templateUrl: '../html/index.component.html',
    styleUrl: '../scss/index.component.scss'
})
export class IndexComponent {
}
