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
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nostrum molestiae. Suscipit eius, dignissimos earum incidunt dolorem nisi cupiditate ipsum laudantium ratione eaque iste iure iusto debitis corporis voluptas culpa!",
            name: "Keven Gebauer",
            work: "Frontend Developer",
            profileLink: "#"
        }
    CommentTwo: Comments = 
        {
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nostrum molestiae. Suscipit eius, dignissimos earum incidunt dolorem nisi cupiditate ipsum laudantium ratione eaque iste iure iusto debitis corporis voluptas culpa!",
            name: "Essma",
            work: "Frontend Developer",
            profileLink: "#"
        }
    CommentThree: Comments = 
        {
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nostrum molestiae. Suscipit eius, dignissimos earum incidunt dolorem nisi cupiditate ipsum laudantium ratione eaque iste iure iusto debitis corporis voluptas culpa!!",
            name: "WIllstma ",
            work: "Frontend Developer",
            profileLink: "#"
        }
}
