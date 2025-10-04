import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private router = inject(Router);

  protected redirectToAboutMe() {
    this.router.navigate(['/aboutMe']);
  }

  protected handleAdd(n1: string, n2: string) {
    console.log(n1);
    console.log(n2);
    let sum = Number(n1) + Number(n2);
    alert('The sum is: ' + sum);
  }
}
