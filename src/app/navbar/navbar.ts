import { CommonModule, NgClass } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(private cd: ChangeDetectorRef) {

  }

  isOpen = false;
  isLightMode = false;
  // html = document.documentElement;

  handleDropdown() {
    this.isOpen = !this.isOpen
  }

  handleToggleTheme() {
    console.log(this.isLightMode)
    this.isLightMode = !this.isLightMode;
    console.log(this.isLightMode)
    const html = document.documentElement;
    if (this.isLightMode == true) {
      html.classList.add("light")
    } else {
      html.classList.remove("light")
    }
  }
}
