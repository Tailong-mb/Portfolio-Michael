import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
