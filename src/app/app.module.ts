import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule, 
  MatProgressSpinnerModule} from '@angular/material';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

@NgModule({
   declarations: [
      AppComponent,
      PostCreateComponent,
      HeaderComponent,
      PostListComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatCardModule,
      MatButtonModule,
      MatToolbarModule,
      MatProgressSpinnerModule,
      MatExpansionModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
