import { AfterViewInit, Component, ElementRef, OnInit, signal, viewChild } from '@angular/core';

import { concat, from, interval, of, Subscription } from 'rxjs';
import { concatMap, delay, ignoreElements, map, repeat, take } from 'rxjs/operators';
@Component({
  selector: 'app-home-hero',
  imports: [],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.css',
})
export class HomeHero implements OnInit {
  words: string[] = ['a Front-End Developer.', 'an Angular Developer.', 'a Wordpress Developer.']
  displayText = signal(''); private loopSubscription?: Subscription;

  ngOnInit() {
    this.startTypewriterLoop();
  }

  startTypewriterLoop() {
    this.loopSubscription = from(this.words).pipe(
      concatMap(word => this.createWordAnimation(word)), repeat()
    ).subscribe(); // Run infinitely or track subscription to clear
  }

  createWordAnimation(word: string) {
    const typeSpeed = 80; // ms per char
    const deleteSpeed = 50;

    // 1. Type forward
    const type$ = from(word.split('')).pipe(
      concatMap((char, index) => of(word.slice(0, index + 1)).pipe(delay(typeSpeed)))
    );

    // 2. Pause when finished
    const pause$ = of('').pipe(delay(1500), ignoreElements());

    // 3. Delete backward
    const delete$ = from(word.split('')).pipe(
      concatMap((_, index) => of(word.slice(0, word.length - index - 1)).pipe(delay(deleteSpeed)))
    );

    // 4. Pause before next word
    const pauseEnd$ = of('').pipe(delay(500), ignoreElements());

    return concat(type$, pause$, delete$, pauseEnd$).pipe(
      map(text => this.displayText.set(text))
    );
  }
  ngOnDestroy() {
    // Clean up subscription when component is destroyed
    this.loopSubscription?.unsubscribe();
  }
}
