import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectFullViewComponent } from './project-full-view/project-full-view.component';

export const routes: Routes = [
    {path: '',component: MainPageComponent,},
    { path: 'fullProject', component: ProjectFullViewComponent },
];
