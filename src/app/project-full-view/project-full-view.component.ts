import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../shared/header/header.component";
import { ProjectService, Project } from '../shared/services/project.service';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-full-view',
  imports: [HeaderComponent, TranslatePipe, CommonModule, RouterModule],
  templateUrl: './project-full-view.component.html',
  styleUrl: './project-full-view.component.scss'
})
export class ProjectFullViewComponent implements OnInit {
  project: Project | undefined;
  nextProject: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const projectId = params.get('id');
      if (projectId) {
        this.project = this.projectService.getProjectById(projectId);
        if (this.project) {
          this.nextProject = this.projectService.getNextProject(projectId);
        } else {
          this.router.navigate(['/']);
        }
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  goToNextProject(): void {
    if (this.nextProject) {
      this.router.navigate(['/project', this.nextProject.id]);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  getTechIcon(technology: string): string {
    const techIcons: { [key: string]: string } = {
      'Angular': 'assets/image/skill-set/small-icons/Angular.png',
      'TypeScript': 'assets/image/skill-set/small-icons/TypeScript.png',
      'JavaScript': 'assets/image/skill-set/small-icons/JavaScript.png',
      'HTML': 'assets/image/skill-set/small-icons/HTML.png',
      'CSS': 'assets/image/skill-set/small-icons/CSS.png',
      'Firebase': 'assets/image/skill-set/small-icons/Firebase.png',
      'Git': 'assets/image/skill-set/small-icons/Git.png',
      'API': 'assets/image/skill-set/small-icons/API.png',
      'React': 'assets/image/skill-set/small-icons/react.png', 
      'SCSS': 'assets/image/skill-set/small-icons/scss.png',
      'PokéAPI': 'assets/image/skill-set/small-icons/API.png'
    };
    
    return techIcons[technology] || 'assets/image/skill-set/small-icons/JavaScript.png';
  }
}
