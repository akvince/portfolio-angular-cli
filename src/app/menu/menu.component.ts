import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.sass']
})

export class MenuComponent implements OnInit {
  menu ={
    itemMenu : [
      {
        name: 'Home',
        url: '/presentation'
      },
      {
        name: 'Projet',
        url: '/project'
      },
      {
        name: 'CV',
        url: '/curriculumvitae'
      },
      {
        name: 'Contact',
        url: '/contact'
      }
    ]
  }

  mode = new FormControl('over');

  constructor() { }

  ngOnInit() {
  }


}
