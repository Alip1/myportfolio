import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
  // animations:[  trigger('list1', [
  //   state('in', style({
  //     opacity: 1,
  //     transform: 'translateX(0)'
  //   })),
  //   transition('void => *', [
  //     style({
  //       opacity: 0,
  //       transform: 'translateX(-100px)'
  //     }),
  //     animate(300)
  //   ]),
  //   transition('* => void', [
  //     animate(300, style({
  //       transform: 'translateX(100px)',
  //       opacity: 0
  //     }))
  //   ])
  // ])]
  //
  //
  // animations: [
  //   trigger('visibilityChanged', [
  //     state('in', style({
  //       opacity: 0
  //     })),
  //     state('out',   style({
  //       opacity: 1
  //     })),
  //     transition('in => out', animate('100ms ease-in')),
  //     transition('out => in', animate('100ms ease-out'))
  //   ])
  // ]


})
export class GreetingComponent implements OnInit {
  greeting= {
    username: "KI-Kompass Inklusiv",
    title: "Das Projekt Kl-Kompass Inklusiv",
    subTitle: "Das Projekt KI-Kompass Inklusiv verfolgt das Ziel, die Inklusion von Menschen mit Behinderung mithilfe von Künstlicher Intelligenz zu unterstützen. Bis 2027 werden KI-gestützte Assistenztechnologien recherchiert, Beratungs- und Schulungsangebote für Menschen mit Behinderung und wichtige Stakeholder entwickelt und angeboten und Praxislabore zur Entwicklung von inklusiver KI und deren Rahmenbedingungen durchgeführt. In allen barrierearmen Projektaktivitäten werden Menschen mit Behinderung eingebunden. Das Projekt schließt an das vorangegangene Projekt KI.ASSIST (2019-2022) an.",
    //resumeLink: "https://drive.google.com/file/d/1cS7JjAYRfOY0cGN6lDhSlKcXGFn9d-01/view?usp=share_link"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
