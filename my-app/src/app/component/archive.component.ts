import { Component } from "@angular/core";

@Component({
    selector: 'archive',
    standalone: true,
    template:`
    <div class="archive-area">
        <h4>Archive</h4>
        <div class="archive-list">
            @for(archive of archives; track archive.date){
                <div>
                    <p>{{ archive.date }}</p>
                </div>
            }
        </div>
    </div>
    `,
    styles: [`
    .archive-area {
        margin-top: 50px;

        h4 {
            text-align: center;
        }

        .archive-list {
            margin-top: 20px;
            border-top: 1px solid black;

            p {
                margin: 0;
                padding: 20px;
                font-size: 14px;
                border-bottom: 1px solid black;
            }
        }
    }
    `]
})

export class ArchiveComponent {
    archives = [
        { date: 'xxxx年xx月(xx)' },
        { date: '2024年09月(xx)' },
        { date: '2024年08月(xx)' },
        { date: '2024年07月(xx)' },
        { date: '2024年06月(xx)' },
        { date: '2024年05月(xx)' },
        { date: '2024年04月(xx)' },
        { date: '2024年03月(xx)' },
        { date: '2024年02月(xx)' },
        { date: '2024年01月(xx)' },
        { date: '2023年12月(xx)' },
        { date: '2023年11月(xx)' },
        { date: '2023年10月(xx)' },
        { date: '2023年09月(xx)' },
        { date: '2023年08月(xx)' },
    ]
}