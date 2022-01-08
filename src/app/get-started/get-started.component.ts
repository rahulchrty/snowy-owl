import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})

export class GetStartedComponent implements OnInit {
  
  public selectAccountHeader: string = "Select a business account";
  public createAccountHeader: string = "Create a new business account";
  public tabIndex : number = 0;
  public searchedAccount : string = "sh";
  
  constructor() { }

  ngOnInit(): void {
  }

  public setSelectAccountHeader(tabChangeEvent: any) {
    if (tabChangeEvent.index === 0) {
      this.selectAccountHeader = "Select a business account";
      this.tabIndex = 0;
    }
    else {
      this.selectAccountHeader = "Select an individual's account";
      this.tabIndex = 1;
      console.log(this.tabIndex);
    }
  }

  public setCreateAccountHeader(tabChangeEvent: any) {
    if (tabChangeEvent.index === 0) {
      this.createAccountHeader = "Create a new business account";
    }
    else {
      this.createAccountHeader = "Create a new individual's account";
    }
  }
}
