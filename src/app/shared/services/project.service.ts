import { Injectable } from '@angular/core';

export interface Project {
    id: string;
    url: string;
    title: string;
    text: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    description: string;
    implementation: string;
    duration: string;
}

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    
    private projects: Project[] = [
        {
            id: 'join',
            url: 'assets/image/myprojects/join.png',
            title: 'myProjects.join.title',
            text: 'myProjects.join.text',
            technologies: ['Angular', 'TypeScript', 'SCSS', 'Firebase'],
            liveUrl: 'https://www.pascalfliedner.de/join/',
            githubUrl: 'https://github.com/Nokaarimikalu/join',
            description: 'myProjects.join.description',
            implementation: 'myProjects.join.implementation',
            duration: 'myProjects.join.duration'
        },
        {
            id: 'elpollo',
            url: 'assets/image/myprojects/pepe.png',
            title: 'myProjects.elPollo.title',
            text: 'myProjects.elPollo.text',
            technologies: ['JavaScript', 'HTML', 'CSS'],
            liveUrl: 'https://www.pascalfliedner.de/polloloco/',
            githubUrl: 'https://github.com/Nokaarimikalu/El-Pollo-Loco',
            description: 'myProjects.elPollo.description',
            implementation: 'myProjects.elPollo.implementation',
            duration: 'myProjects.elPollo.duration'
        },
        {
            id: 'pokedex',
            url: 'assets/image/myprojects/pokedex.png',
            title: 'myProjects.pokedex.title',
            text: 'myProjects.pokedex.text',
            technologies: ['React', 'SCSS', 'PokéAPI',],
            liveUrl: 'https://www.pascalfliedner.de/pokedex/',
            githubUrl: 'https://github.com/Nokaarimikalu/Pokedex',
            description: 'myProjects.pokedex.description',
            implementation: 'myProjects.pokedex.implementation',
            duration: 'myProjects.pokedex.duration'
        }
    ];

    getAllProjects(): Project[] {
        return this.projects;
    }

    getProjectById(id: string): Project | undefined {
        return this.projects.find(project => project.id === id);
    }

    getNextProject(currentId: string): Project | undefined {
        const currentIndex = this.projects.findIndex(project => project.id === currentId);
        if (currentIndex === -1) return undefined;
        
        const nextIndex = (currentIndex + 1) % this.projects.length; 
        return this.projects[nextIndex];
    }
}
