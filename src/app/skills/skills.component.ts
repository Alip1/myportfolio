import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "Das Projektteam",
    viewExperiences: true,
    subTitle: `Das Projekt wird durch die folgenden Projektpartner umgesetzt, die bereits im Vorgängerprojekt KI.ASSIST erfolgreich zusammen gearbeitet haben.`,
    experience: [
      {
        heading: 'Deutsches Forschungszentrum für Künstliche Intelligenz (DFKI)',
        company: "Projektkoordination, Monitoring, Praxislabor KI-Forschung & Inklusion",
        color: '#000073',
        isHeading: true,
      },
      {
        heading: 'Bundesverband Deutscher Berufsförderungswerke (BF BVW)',
        company: "Praxislabore",
        color: '#000073',
        isHeading: true,
      },
      {
        heading: 'Bundesarbeitsgemeintschaft der Berufsbildungswerke (BAG BBW)',
        company: "Beratung & Schulung",
        color: '#000073',
        isHeading: true,
      },
      {
        heading: 'Bundesarbeitsgemeintschaft der Werkstätten für behinderte Menschen (BAG WfbM)',
        company: "Partizipation & Barrierefreiheit",
        color: '#000073',
        isHeading: true,
      },
    ]
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
