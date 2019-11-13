import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TourModule} from './tour/tour.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SegurosModule } from './seguros/seguros.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { ShareModule } from './share/share.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contacto/contact.module';
import { AdminModule } from './admin/admin.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogModule } from './blog/blog.module';
import { ComentarioModule } from './comentario/comentario.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SegurosModule,
    HttpClientModule,
    ShareModule,
    HomeModule,
    ContactModule,
    AdminModule,
    BlogModule,
    ComentarioModule,
    TourModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
