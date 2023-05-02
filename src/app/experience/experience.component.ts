import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {


  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        company: "Informationen zu KI-gestützten Assistenztechnologien",
        color: '#3781c2',
        },
      {
        company: "Wissenspool zum Thema KI & Inklusion",
        color: '#3781c2',
      },
      {
        company: "Projektaktivitäten (Praxislabore, Demonstrationsformate)",
        color: '#3781c2',
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
