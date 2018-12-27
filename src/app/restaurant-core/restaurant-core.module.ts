import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { FormsModule } from '@angular/forms';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

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
      {
        path: '',
        redirectTo: 'restaurants',
        pathMatch: 'full'
      },
      {
        path: 'restaurant-details/:id',
        component: RestaurantDetailComponent,
        data: { title: 'Restaurant Details' }
      },
      {
        path: 'restaurant-edit/:id',
        component: EditRestaurantComponent,
        data: { title: 'Restaurant Edit' }
      }

    ]
  }
];

@NgModule({
  declarations: [HomePageComponent, CreateRestaurantComponent, EditRestaurantComponent, RestaurantDetailComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class RestaurantCoreModule { }
