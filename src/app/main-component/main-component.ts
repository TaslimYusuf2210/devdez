import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-main-component',
  imports: [Navbar],
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
