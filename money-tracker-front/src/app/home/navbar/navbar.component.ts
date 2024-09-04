import {Component, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {

  constructor() {
    console.log("here")
  }
  items: MenuItem[] | undefined = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      routerLink: '/money-track'
    },
    // {
    //   label: 'About',
    //   icon: 'pi pi-fw pi-info',
    //   routerLink: '/about'
    // },
    // {
    //   label: 'Contact',
    //   icon: 'pi pi-fw pi-envelope',
    //   routerLink: '/contact'
    // },
    // {
    //   label: 'Products',
    //   icon: 'pi pi-fw pi-shopping-cart',
    //   routerLink: '/products'
    // },
    // {
    //   label: 'Services',
    //   icon: 'pi pi-fw pi-cog',
    //   routerLink: '/services'
    // }
  ];

}
