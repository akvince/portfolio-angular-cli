import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.sass']
})

export class MenuComponent implements OnInit {
  mode = new FormControl('over');

  elementsMenu = ['Home', 'Contact'];
  constructor() { }

  ngOnInit() {
  }


}
