import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/Mehwish028",
    linkedin: "https://www.linkedin.com/in/Mehwish-rehman-21011998/",
    gmail: "rehmanMehwish028@gmail.com",
    instagram : "https://www.instagram.com/ozil7866/?hl=en",
    //facebook: "https://www.facebook.com/sharthak.agrawal"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
