import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Comments {
    class: string;
    text: string;
    name: string;
    work: string;
    profileLink: string;
}

@Component({
    selector: 'app-comments',
    imports: [TranslatePipe],
    templateUrl: './comments.component.html',
    styleUrl: './comments.component.scss',
})
export class CommentsComponent {
    Comments: Comments[] = [
        {
            class: 'one',
            text: 'comments.keven.text',
            name: 'comments.keven.name',
            work: 'comments.keven.work',
            profileLink: '#',
        },
        {
            class: 'two',
            text: 'comments.essma.text',
            name: 'comments.essma.name',
            work: 'comments.essma.work',
            profileLink: '#',
        },
        {
            class: 'three',
            text: 'comments.willstma.text',
            name: 'comments.willstma.name',
            work: 'comments.willstma.work',
            profileLink: '#',
        },
    ];
}
