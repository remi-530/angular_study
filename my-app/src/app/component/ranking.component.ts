import { Component } from "@angular/core";

@Component({
    selector: 'ranking',
    standalone: true,
    template:`
    <div class="rank-area">
        <h4>Ranking</h4>
        @for(rank of ranks; track rank.title){
            <div class="rank-content">
                <img src="{{ rank.imgUrl }}" />
                <p>{{ rank.title }}</p>
            </div>
        }
    </div>
    `,
    styles: [`
    .rank-area {
        margin-top: 50px;

        h4 {
            text-align: center;
        }

        .rank-content {

            img {
                width: 100%;
            }
            
            p {
                font-size: 14px;
                margin-top: 0;
                margin-bottom: 30px;
            }
        }
    }
    `]
})

export class RankingComponent {
    ranks = [
        { imgUrl: 'images/ranking1.jpg', title: 'タイトルテキストテキストテキストテキストテキストテキストテキストテキスト1' },
        { imgUrl: 'images/ranking2.jpg', title: 'タイトルテキストテキストテキストテキストテキストテキストテキストテキスト2' },
        { imgUrl: 'images/ranking3.jpg', title: 'タイトルテキストテキストテキストテキストテキストテキストテキストテキスト3' },
    ];
}