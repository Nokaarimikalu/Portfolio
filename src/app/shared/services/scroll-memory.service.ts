import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollMemoryService {
  private scrollPositions: { [url: string]: number } = {};
  private currentUrl: string = '';

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    this.initScrollMemory();
  }

  private initScrollMemory(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (this.currentUrl && this.currentUrl !== event.url) {
        }
        this.currentUrl = event.url;
      });
  }

  saveCurrentScrollPosition(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.scrollPositions[this.currentUrl] = scrollTop;
  }

  saveScrollPosition(url: string, position?: number): void {
    const scrollTop = position !== undefined ? position : 
      (window.pageYOffset || document.documentElement.scrollTop);
    this.scrollPositions[url] = scrollTop;
  }

  restoreScrollPosition(url: string): void {
    const position = this.scrollPositions[url];
    if (position !== undefined) {
      setTimeout(() => {
        this.viewportScroller.scrollToPosition([0, position]);
      }, 100); // Kleine Verzögerung für bessere Kompatibilität
    }
  }

  scrollToPosition(x: number, y: number): void {
    this.viewportScroller.scrollToPosition([x, y]);
  }

  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  getStoredPositions(): { [url: string]: number } {
    return { ...this.scrollPositions };
  }

  clearScrollPosition(url: string): void {
    delete this.scrollPositions[url];
  }

  clearAllScrollPositions(): void {
    this.scrollPositions = {};
  }
}