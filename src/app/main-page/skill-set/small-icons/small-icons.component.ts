import { Component } from '@angular/core';

interface Icon {
    url: string;
    name: string;
}

@Component({
    selector: 'app-small-icons',
    imports: [],
    templateUrl: './small-icons.component.html',
    styleUrl: './small-icons.component.scss',
})
export class SmallIconsComponent {
    icons: Icon[] = [
        {
            url: 'assets/image/skill-set/small-icons/HTML.png',
            name: 'HTML' 
        },
        {
            url: 'assets/image/skill-set/small-icons/CSS.png', 
            name: 'CSS' 
        },
        {
            url: 'assets/image/skill-set/small-icons/JavaScript.png',
            name: 'JavaScript',
        },
        {
            url: 'assets/image/skill-set/small-icons/TypeScript.png',
            name: 'TypeScript',
        },
        {
            url: 'assets/image/skill-set/small-icons/Angular.png',
            name: 'Angular',
        },
        {
            url: 'assets/image/skill-set/small-icons/Firebase.png',
            name: 'Firebase',
        },
        { 
            url: 'assets/image/skill-set/small-icons/Git.png', 
            name: 'Git' 
        },
        { 
            url: 'assets/image/skill-set/small-icons/API.png', 
            name: 'API' 
        },
    ];
}
