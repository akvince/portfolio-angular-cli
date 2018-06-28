import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.sass']
})
export class PresentationComponent implements OnInit {
  presentation = {
      content: 'Bonjour, alors moi c\'est Vincent Deflandre, j\'ai 27 ans. Je suis developpeur front end depuis 2016',
      bonus: 'Aller faire un petit tour sur mon bac a sable',
      linkSandbox: 'vincent-deflandre.ovh'
  }
  constructor() { }

  ngOnInit() {
  }

}
