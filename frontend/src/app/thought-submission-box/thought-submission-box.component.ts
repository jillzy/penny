import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-thought-submission-box',
  templateUrl: './thought-submission-box.component.html',
  styleUrls: ['./thought-submission-box.component.css']
})
export class ThoughtSubmissionBoxComponent implements OnInit {
  title = 'frontend';
  url: string = 'http://localhost:8000/get_random_thought';
 
  constructor(private http: HttpClient){}
  public getRandomThought(){
  	this.http.get(this.url).toPromise().then((res)=>{
  		console.log(res);
  	});
  }

  ngOnInit() {
  }

}
