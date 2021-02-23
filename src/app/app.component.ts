import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  repoCardData:any;
  
  ngOnInit(): void {
  }
  title = 'gitProject1';

  receiveRepoData($event:any){
    this.repoCardData=$event;
    console.log(this.repoCardData);
  }
}
