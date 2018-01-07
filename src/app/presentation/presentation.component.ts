import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.sass']
})
export class PresentationComponent implements OnInit {

  const birthdate = new Date().getFullYear() - 1990;

  constructor() { }

  ngOnInit() {
  }

}
