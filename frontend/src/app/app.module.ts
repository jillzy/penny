import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { PostThoughtComponentComponent } from './post-thought-component/post-thought-component.component';
import { PostThoughtComponent } from './post-thought/post-thought.component';

@NgModule({
  declarations: [
    AppComponent,
    PostThoughtComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, PostThoughtComponent]
})
export class AppModule { }
