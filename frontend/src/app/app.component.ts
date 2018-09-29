import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  url: string = 'http://localhost:8000/random_thought';

  constructor(private http: HttpClient){}
  public getRandomThought(){
  	this.http.get(this.url).toPromise().then((res)=>{
  		console.log(res);
  	});
  }
}
