import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.sass']
})
export class ProjectComponent implements OnInit {
  projects = [
    {
      title: 'LaRedoute',
      subtitle: 'e-commerce',
      img: '/test',
      altImg: '',
      description: 'Migration responsive des sites internationaux et français, en méthode agile',
      urlBool: true,
      url: 'http://www.laredoute.fr/'
    },
    {
      title: 'Oney',
      subtitle: 'outils et back-office',
      img: '/test',
      altImg: '',
      description: 'description oney',
      urlBool: false
    },
    {
      title: 'Vestimetal',
      subtitle: 'e-commerce',
      img: '/test',
      altImg: '',
      urlBool: true,
      url: 'https://www.vestimetal.fr/'
    },
    {
      title: 'Sogood People',
      subtitle: 'fidélité',
      img: '',
      altImg: '',
      description: 'description sogood people',
      urlBool: true,
      url: 'http://www.sogood-people.fr/'
    },
    {
      title: 'AI-W',
      subtitle: 'service',
      img: '/test',
      altImg: '',
      description: 'Refonte du site',
      urlBool: true,
      url: 'http://www.ai-w.fr/'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
