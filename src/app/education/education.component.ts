import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  
  public contactInfo = {
    title: "Projekt-Auftaktveranstaltung",
    //subtitle: "Die Auftaktveranstaltung des Projekts KI-Kompass Inklusiv findet am 02. Juni 2023 im Kleisthaus in Berlin statt. Die Teilnehmenden erwartet ein spannendes Programm: Interessante Vorträge, konkrete Technologie-Demonstrationen, interaktive World Cafes zu den Aktivitäten des Projekts sowie eine abschließende Panel-Diskussion. Bei Interesse können Sie sich hier für die Veranstaltung anmelden",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
