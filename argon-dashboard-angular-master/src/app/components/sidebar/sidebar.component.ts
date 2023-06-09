import { Component, OnInit, OnChanges, SimpleChanges, Input  } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: '', class: '' },
   // { path: '/fare', title: 'Fare',  icon: 'ni-money-coins text-primary', class: '' },
    { path: '/pass', title: 'Pass management',  icon: '', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/admin', title: 'Profile Tag',  icon:'', class: '' },
    { path: '/analytics', title: 'Analytics1',  icon:'', class: '' },
    { path: '/analytics2', title: 'Analytics2',  icon:'', class: '' },
    { path: '/video', title: 'Video', icon:'', class:'',},
    { path: '/user', title: 'UserProfile',  icon:'', class: '' },
    { path: '/report', title: 'Report', icon: '', class: ''},
    { path: '/landing', title: 'Log Out',  icon:'', class: '' },

    // { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit, OnChanges{

  selectedTheme: string = 'default';
  @Input() inputTheme: string;


 



  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router ) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.inputTheme) {
      this.selectedTheme = `${this.inputTheme}`;
    }
  }
}
