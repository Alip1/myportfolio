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
        heading: "Informationen zu KI-gestützten Assistenztechnologien",
        company: " Mit einem Monitoring identifizieren wir KI-gestützte Assistenztechnologien für Menschen mit Behinderung",
        color: '#3781c2',
        isHeading: false,
        },
      {
        heading: "Wissenspool zum Thema KI & Inklusion",
        company: "Wir führen alle wichtigen Wissensbausteine zu den Themen KI und Inklusion zusammen und stellen Sie zur Verfügung",
        color: '#3781c2',
        isHeading: false,
      },
      {
        heading: "Projektaktivitäten (Praxislabore, Demonstrationsformate)",
        company: "Wir informieren über die Aktivitäten des Projekts und laden zur Teilnahme ein.",
        color: '#3781c2',
        isHeading: false,
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
