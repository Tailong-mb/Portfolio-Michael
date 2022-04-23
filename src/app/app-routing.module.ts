import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FormationsComponent } from './formations/formations.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'cv',
    component: CvComponent,
    children: [
      { path: '', redirectTo: 'formations', pathMatch: 'full' },
      { path: 'experiences', component: ExperiencesComponent },
      { path: 'formations', component: FormationsComponent },
      { path: 'skills', component: SkillsComponent },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'project', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
