import { Component, AfterViewInit } from '@angular/core';

declare const Reveal: any;
declare const localStorage: any;
declare const document: any;

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: [
    './slides.component.css',
    '../../assets/reveal.js/css/reveal.css',
    '../../assets/reveal.js/css/theme/white.css'
  ]
})
export class SlidesComponent implements AfterViewInit {

  ngAfterViewInit() {

    document.addEventListener('ready', () => {
      console.log(Reveal);
    })
    // console.log('init');
    // console.log(document.getElementById('slides'));
    // const cache = localStorage.getItem('cache');
    // if (cache) {
    //   document.getElementById('slides').innerHTML = cache;
    // }
    // Reveal.initialize({
    //   controls: false,
    // });
    // const slide = localStorage.getItem('slide');
    // if (slide) {
    //   Reveal.slide(slide);
    // }
    // Reveal.addEventListener('slidechanged', function(event) {
    //   localStorage.setItem('slide', event.indexh);
    // });
    // localStorage.setItem('cache', document.getElementById('slides').innerHTML);
  }

  ngOnDestroy() {
    // localStorage.setItem('cache', document.getElementById('slides').innerHTML);
  }

  next() {
    Reveal.next();
  }

  previous() {
    Reveal.prev();
  }
}
