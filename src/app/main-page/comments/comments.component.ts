import { Component } from '@angular/core';

interface Comments {
    text: string;
    name: string;
    work: string;
    profileLink: string;
}

@Component({
    selector: 'app-comments',
    imports: [],
    templateUrl: './comments.component.html',
    styleUrl: './comments.component.scss',
})
export class CommentsComponent {
    CommentOne: Comments = 
        {
            text: "man kann sich unterhalten",
            name: "Keven Gebauer",
            work: "Frontend Developer",
            profileLink: "#"
        }
    CommentTwo: Comments = 
        {
            text: "Brutaler Kerl",
            name: "Essma",
            work: "Frontend Developer",
            profileLink: "#"
        }
    CommentThree: Comments = 
        {
            text: "Klasse kerl!",
            name: "WIllstma ",
            work: "Frontend Developer",
            profileLink: "#"
        }
}
