import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { PostThoughtComponent } from './post-thought/post-thought.component';
import { ThoughtSubmissionBoxComponent } from './thought-submission-box/thought-submission-box.component';
import { FeaturedThoughtBoxComponent } from './featured-thought-box/featured-thought-box.component';

@NgModule({
  declarations: [
    AppComponent,
    PostThoughtComponent,
    ThoughtSubmissionBoxComponent,
    FeaturedThoughtBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
      AppComponent,
      PostThoughtComponent,
      ThoughtSubmissionBoxComponent,
      FeaturedThoughtBoxComponent
  ]
})
export class AppModule { }
