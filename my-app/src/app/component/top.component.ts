import { Component } from "@angular/core";

@Component({
    selector: 'top',
    standalone: true,
    template: `
    <div class="top-img-area">
        @for(img of imgs; track img.title) {
            <div class="top-img">
                <img src="{{ img.imgUrl }}" />
                <p>{{ img.title }}</p>
                <p class="more">READ MORE</p>
            </div>
        }
    </div>
    `,
    styles: [`
    .top-img-area {
        display: flex;
        gap: 20px;
        margin-bottom: 60px;

        .top-img {

            img {
                width: 100%;
            }

            p {
                font-weight: bold;
            }

            .more {
                font-weight: 400;
                font-size: 13px;
                text-align: center;
                text-decoration: underline;
            }
        }
    }
    `]
})

export class TopComponent{
    imgs = [
        { imgUrl: 'images/pickup1.jpg', title: 'タイトルテキストテキストテキストテキストテキストテキストテキスト1' },
        { imgUrl: 'images/pickup2.jpg', title: 'タイトルテキストテキストテキストテキストテキストテキストテキスト2' },
        { imgUrl: 'images/pickup3.jpg', title: 'タイトルテキストテキストテキストテキストテキストテキストテキスト3' },
    ];
}