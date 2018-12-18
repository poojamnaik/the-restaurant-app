import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
  path: 'app',
  children: [
  {
    path: 'restaurants',
    component: HomePageComponent,
    data: { title: 'Restaurant List' }
  },
  // {
  //   path: 'book-details/:id',
  //   component: BookDetailComponent,
  //   data: { title: 'Book Details' }
  // },
  // {
  //   path: 'book-create',
  //   component: BookCreateComponent,
  //   data: { title: 'Create Book' }
  // },
  // {
  //   path: 'book-edit/:id',
  //   component: BookEditComponent,
  //   data: { title: 'Edit Book' }
  // },
  { path: '',
    redirectTo: 'restaurants',
    pathMatch: 'full'
  }]
}
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class RestaurantCoreModule { }
