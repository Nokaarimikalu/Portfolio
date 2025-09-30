import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectFullViewComponent } from './project-full-view/project-full-view.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {path: '',component: MainPageComponent,},
    {path: 'project/:id', component: ProjectFullViewComponent },
    {path: 'legal', component: LegalNoticeComponent},
    {path: 'policy', component: PrivacyPolicyComponent}
];
