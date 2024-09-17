import { Component } from "@angular/core";

@Component({
    selector: 'left',
    standalone: true,
    template:`
    <div>
        @for(left of lefts; track left.title){
            <div class="left-content">
                <h2>{{ left.title }}</h2>
                <div class="flex">
                    <p>{{ left.date }}</p>
                    <p>{{ left.category }}</p>
                </div>
                <img src="{{ left.imgUrl }}" />
                <p class="text">{{ left.text }}</p>
                <p class="more">READ MORE</p>
            </div>
        }
    </div>
    `,
    styles: [`
    .left-content {

        h2 {
            margin: 0;
        }

        .flex {
            display: flex;
            gap: 20px;
            font-size: 14px;
        }

        img {
            width: 100%;
        }

        .text {
            padding: 0 30px;
        }

        .more {
            font-weight: 400;
            font-size: 13px;
            text-align: center;
            text-decoration: underline;
        }
    }

    .left-content+.left-content {
        margin-top: 80px;
    }
    `]
})

export class LeftComponent {
    lefts = [
        { title: 'タイトルテキストテキストテキストテキスト1', date: '2020/01/01', category: 'カテゴリ1', imgUrl: 'images/main1.jpg', text: '本文テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト1' },
        { title: 'タイトルテキストテキストテキストテキスト2', date: '2020/01/02', category: 'カテゴリ2', imgUrl: 'images/main2.jpg', text: '本文テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト2' },
        { title: 'タイトルテキストテキストテキストテキスト3', date: '2020/01/03', category: 'カテゴリ3', imgUrl: 'images/main3.jpg', text: '本文テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト3' },
    ];
}