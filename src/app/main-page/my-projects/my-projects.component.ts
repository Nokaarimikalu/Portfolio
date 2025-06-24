import { Component } from '@angular/core';

interface Project {
    url: string;
    title: string;
    text: string;
}

@Component({
    selector: 'app-my-projects',
    imports: [],
    templateUrl: './my-projects.component.html',
    styleUrl: './my-projects.component.scss',
})
export class MyProjectsComponent {
    myProjects: Project[] = [
        {
            url: '/assets/image/myprojects/join.png',
            title: 'Join',
            text: 'Task manager inspired by the Kanban System. Create and organize tasks using a drag and drop functions, assign users and categories',
        },
        {
            url: '/assets/image/myprojects/pepe.png',
            title: 'El Pollo Loco',
            text: 'Jump, run and throw game based on objext-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
        },
        {
            url: '/assets/image/myprojects/pokedex.png',
            title: 'Pokedex',
            text: 'A project that uses an API to display detailed Pokémon info — like stats, types, and abilities — all in one place.',
        },
    ];
}
