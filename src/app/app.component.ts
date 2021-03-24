import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sub = null;
  title = '';
  menu = [
    { url: '/', title: 'Anasayfa' },
    { url: '/personel', title: 'Personel Yönetimi' },
  ];

  constructor(private router: Router) {
    
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.title = this.menu.find(({ url }) => url === event.url ).title;
      }
    });
  }
}
