import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Hero } from '../hero/hero';
import { Resources } from '../resources/resources';
import { About } from '../about/about';

@Component({
  selector: 'app-main-component',
  imports: [Navbar, Hero, Resources, About],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
})
export class MainComponent implements AfterViewInit {

  // @ViewChild('themeToggle') toggleBtn!: ElementRef<HTMLButtonElement>
  constructor() {}

  ngAfterViewInit(): void {
    // console.log(this.toggleBtn.nativeElement)

    // this.toggleBtn.nativeElement.addEventListener('click', () => {

    // }) 
  }
}
