import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GitRepositoriesComponent } from './components/git-repositories/git-repositories.component';

const routes: Routes = [
  { path: 'gitrepo', component: GitRepositoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
