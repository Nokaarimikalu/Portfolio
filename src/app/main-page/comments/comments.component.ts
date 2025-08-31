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
            text: 'comments.Irina.text',
            name: 'comments.Irina.name',
            work: 'comments.Irina.work',
            profileLink: '#',
        },
        {
            class: 'two',
            text: 'comments.Burak.text',
            name: 'comments.Burak.name',
            work: 'comments.Burak.work',
            profileLink: '#',
        },
        {
            class: 'three',
            text: 'comments.Maik.text',
            name: 'comments.Maik.name',
            work: 'comments.Maik.work',
            profileLink: '#',
        },
    ];
}
