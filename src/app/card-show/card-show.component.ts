import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-show',
  templateUrl: './card-show.component.html',
  styleUrls: ['./card-show.component.css']
})
export class CardShowComponent implements OnInit {

    @Input() data:any;
    
  constructor() { }

  ngOnInit(): void {
  }

}
