import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css'
})
export class AboutMe {
   private router = inject(Router)
 protected redirectToAboutMe(){
    this.router.navigate(['/homePage'])
  }

}
