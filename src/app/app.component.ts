import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'protfolio';
  scroll(el:HTMLElement){
    el.scrollIntoView({behavior: 'smooth'});
  }

}
