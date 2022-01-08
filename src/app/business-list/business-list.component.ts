import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss']
})
export class BusinessListComponent implements OnInit {
  
  @Input() searchText : string = "";
  private accountList: string[] = [];
  public accountListToDisplay : string [] = [];
  constructor() { }

  ngOnChanges() : void {
    this.filterAccountListBySearchText(this.searchText);
  }

  ngOnInit(): void {
    this.getAccountList();
  }

  private filterAccountListBySearchText(searchText:string):void {
    if (searchText !== "") {
      this.accountListToDisplay = this.accountList.filter(x => x.toLowerCase().startsWith(searchText.toLowerCase()));
    }
  }

  private getAccountList() : void {
      this.accountList = ['Shop Business', 'Institute Business', 'Institute Business', 'Institute Business', 'Institute Business', 'Other Business', 'Other Business', 'Other Business', 'Other Business', 'Other Business', 'Other Business', 'Other Business', 'Other Business', 'Other Business'];
      this.accountListToDisplay = this.accountList;
  }
}
