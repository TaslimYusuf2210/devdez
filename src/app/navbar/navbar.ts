import { CommonModule, NgClass } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(private cd: ChangeDetectorRef, private router: Router) {

  }

  isOpen = false;
  isLightMode = false;
  // html = document.documentElement;

  handleDropdown() {
    this.isOpen = !this.isOpen
  }

  handleToggleTheme() {
    this.isLightMode = !this.isLightMode;
    const html = document.documentElement;
    if (this.isLightMode == true) {
      html.classList.add("light")
    } else {
      html.classList.remove("light")
    }

    this.isOpen ? this.isOpen = false : this.isOpen
    // if (this.isOpen == true) {
    //   setTimeout(() => {
    //     this.isOpen = false
    //   }, 500)
    // }
  }

  scrollTo(id: string) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
            this.isOpen = false;
    }
  }
}
