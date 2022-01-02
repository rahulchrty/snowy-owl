import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() tabIndex: number = 0;
  public businessPlaceHolder:string = "my local business";
  public individualPlaceHolder:string = "bruce wyane";

  constructor() { }

  ngOnInit(): void {
  }

}
