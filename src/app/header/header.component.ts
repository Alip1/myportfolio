import { Component, OnInit } from '@angular/core';
import {animate, group, query, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    // trigger('routerTransition', [
    //   transition('* <=> *', [
    //     query(':enter, :leave', style({ position: 'fixed', opacity: 1 })),
    //     group([
    //       query(':enter', [
    //         style({ opacity:0 }),
    //         animate('1000ms ease-in-out', style({ opacity:1 }))
    //       ]),
    //       query(':leave', [
    //         style({ opacity:1 }),
    //         animate('1000ms ease-in-out', style({ opacity:0 }))]),
    //     ])
    //   ])
    // ])

    trigger('fadein', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(5000)
      ]),
      transition('* => void', [
        animate(5000, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }
  greeting= {
    username: "KI-Kompass Inklusiv",
    title: "Das Projekt Kl-Kompass Inklusiv",
    subTitle: "Das Projekt KI-Kompass Inklusiv verfolgt das Ziel, die Inklusion von Menschen mit Behinderung mithilfe von Künstlicher Intelligenz zu unterstützen. Bis 2027 werden KI-gestützte Assistenztechnologien recherchiert, Beratungs- und Schulungsangebote für Menschen mit Behinderung und wichtige Stakeholder entwickelt und angeboten und Praxislabore zur Entwicklung von inklusiver KI und deren Rahmenbedingungen durchgeführt. In allen barrierearmen Projektaktivitäten werden Menschen mit Behinderung eingebunden. Das Projekt schließt an das vorangegangene Projekt KI.ASSIST (2019-2022) an.",
    //resumeLink: "https://drive.google.com/file/d/1cS7JjAYRfOY0cGN6lDhSlKcXGFn9d-01/view?usp=share_link"
  }

  ngOnInit(): void {
  }

}
