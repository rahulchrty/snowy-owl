import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() tabIndex: number = 0;
  @Output() searchedText = new EventEmitter<string>();
  public placeHolderText : string = "";

  constructor() { }

  ngOnChanges() : void {
    this.setSearchPlaceHolder();
  }
  
  ngOnInit(): void {
  }

  private setSearchPlaceHolder() : void {
    if (this.tabIndex === 0) {
      this.placeHolderText = "my local business";
    }
    else {
      this.placeHolderText = "bruce wyane";
    }
  }
}
