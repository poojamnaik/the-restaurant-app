import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // NgModel lives here
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestaurantCoreModule } from './restaurant-core/restaurant-core.module';
import { MyOwnCustomMaterialModule } from './custom-material.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

import {  ErrorInterceptor } from './interceptors/error.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';

// used to create fake backend
// import { fakeBackendProvider } from './fake-backend/fake-backend';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full',  canActivate: [AuthGuard] },
  { path: 'app',   redirectTo: '/app/restaurants', pathMatch: 'full' },
  { path: 'login',   component: LoginComponent , data: { title: 'Login' }},
  { path: 'register',   component: RegistrationComponent , data: { title: 'Register' }},
  { path: 'admin',   component: AdminComponent , data: { title: 'Admin' }}
  // { path: '**', component: PageNotFoundComponent }
//   {
//   path: 'app',
//   children: [
//   {
//     path: 'books',
//     component: BookComponent,
//     data: { title: 'Book List' }
//   },
//   {
//     path: 'book-details/:id',
//     component: BookDetailComponent,
//     data: { title: 'Book Details' }
//   },
//   {
//     path: 'book-create',
//     component: BookCreateComponent,
//     data: { title: 'Create Book' }
//   },
//   {
//     path: 'book-edit/:id',
//     component: BookEditComponent,
//     data: { title: 'Edit Book' }
//   },
//   { path: '',
//     redirectTo: 'restaurants',
//     pathMatch: 'full'
//   }]
// }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RestaurantCoreModule,
    BrowserAnimationsModule, // add the feature module here
    MyOwnCustomMaterialModule,
    MyOwnCustomMaterialModule,
    RouterModule.forRoot(
      appRoutes
    )
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
