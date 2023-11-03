import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{ path: '', redirectTo: '', pathMatch: 'full' }, // Redirect to the default route
  { path: '', component: DashboardComponent },
  { path: 'details/:id', component: DetailsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
