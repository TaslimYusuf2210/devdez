import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(private cd: ChangeDetectorRef) {

  }

  isLightMode = false;

  handleToggleTheme() {
    this.isLightMode = !this.isLightMode;
    const html = document.documentElement;
    html.classList.toggle('light')
    if (this.isLightMode == false) {
      html.classList.add("light")
    } else {
      html.classList.remove("light")
    }
    // this.cd.detectChanges()
  }
}
