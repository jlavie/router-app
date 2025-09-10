import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { trigger, transition, style, animate, query, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('HomePage => ProductsPage, ProductsPage => AdminPage, HomePage => AdminPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ opacity: 0, transform: 'translateX(100%)' })
        ]),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ opacity: 0, transform: 'translateX(-100%)' }))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0%)' }))
          ])
        ])
      ]),
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter', [
          style({ opacity: 0 })
        ]),
        query(':enter', [
          animate('300ms ease-in', style({ opacity: 1 }))
        ])
      ])
    ])
  ],
})

export class AppComponent {
  title = 'router-app';
  getRouteAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
