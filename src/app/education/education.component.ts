import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  
  public contactInfo = {
    title: "Die Projekt-Auftaktveranstaltung",
    //subtitle: "Die Auftaktveranstaltung des Projekts KI-Kompass Inklusiv hat am 02. Juni 2023 im Kleisthaus in Berlin statt gefunden. Die Teilnehmenden konnten ein spannendes Programm verfolgen: Interessante Vorträge, konkrete Technologie-Demonstrationen, interaktive World Cafes zu den Aktivitäten des Projekts sowie eine abschließende Panel-Diskussion. Dei Dokumentation der Veranstaltung finden Sie hier",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
