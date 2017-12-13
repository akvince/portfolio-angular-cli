import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.sass']
})
export class MenuComponent implements OnInit {
  elementsMenu = ['Home', 'Contact'];
  constructor() { }

  ngOnInit() {
  }

}
