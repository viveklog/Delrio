import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  selectedTheme: string = 'default';


  constructor( private configService: ConfigService,) { }

  ngOnInit() {
    this.selectedTheme = this.configService.getObjectProperty();
    console.log(this.selectedTheme)

    this.configService.themeSubject.subscribe((theme: string) => {
      this.selectedTheme = theme;
      console.log('Theme changed:', this.selectedTheme);
    });
    
  }

}
