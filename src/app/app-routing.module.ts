import { NgModule }              from '@angular/core';
import { Routes, RouterModule}  from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactComponent } from './contact/contact.component';
import { CurriculumvitaeComponent } from './curriculumvitae/curriculumvitae.component';
import { ProjectComponent } from './project/project.component';

// routes
const appRoutes: Routes = [
  {path: '', redirectTo: 'presentation', pathMatch: 'full'}
  {path: 'presentation', component: PresentationComponent },
  {path: 'curriculumvitae', component: CurriculumvitaeComponent },
  {path: 'project', component: ProjectComponent },
  {path: 'contact', component: ContactComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
