import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss']
})
export class BusinessListComponent implements OnInit {
  typesOfShoes: string[] = ['Shop Business', 'Institute Business', 'Institute Business', 'Institute Business', 'Institute Business', 'Other Business', 'Other Business', 'Other Business', 'Other Business', 'Other Business', 'Other Business', 'Other Business', 'Other Business', 'Other Business'];
  constructor() { }

  ngOnInit(): void {
  }

}
