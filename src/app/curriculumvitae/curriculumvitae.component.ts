import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculumvitae',
  templateUrl: './curriculumvitae.component.html',
  styleUrls: ['./curriculumvitae.sass']
})
export class CurriculumvitaeComponent implements OnInit {
  title = "Développeur front-end"
  skill = [
    {
      name: "HTML",
      note: 8
    },
    {
      name: "CSS",
      note: 7
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
