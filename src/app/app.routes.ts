import { Routes } from '@angular/router';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  { path: 'companies', component: CompanyListComponent },
  { path: 'company/new', component: CompanyFormComponent },
  { path: 'company/edit/:id', component: CompanyFormComponent },
  { path: 'company/:id', component: CompanyDetailComponent },
  { path: '**', redirectTo: '/companies' }
];
