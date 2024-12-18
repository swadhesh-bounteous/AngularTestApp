import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { provideHttpClient } from '@angular/common/http';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { DetailsComponent } from './pages/details/details.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    DetailsComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
