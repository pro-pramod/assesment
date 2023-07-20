import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserSearchListComponent } from './user-search-list/user-search-list.component';

const routes: Routes = [{
  path:'',
  component:UserListComponent,
  children:[
    {
      path:'User-search-list',
      component:UserSearchListComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
