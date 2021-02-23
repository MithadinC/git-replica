import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CardShowComponent } from './card-show/card-show.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { SearchBoxComponent } from './search-box/search-box.component';

const routes: Routes = [
  { path: 'cardshow/:name', component: CardShowComponent },
  { path: 'details/:name/:reponame', component: RepoDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
