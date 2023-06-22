import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  selectedTheme: string = 'default';

  fetchData() {
    this.selectedTheme = this.configService.getObjectProperty();
    console.log(this.configService.getObjectProperty());

  }
    

  public focus;
  public listTitles: any[];
  public location: Location;
  constructor(location: Location, 
              private element: ElementRef, 
              private router: Router,
              private http: HttpClient,
              private configService: ConfigService,
              ) {
    this.location = location;
  }


  downloadPDF(): void {
    const filePath = '../../../assets/pdf/myPdf.pdf'; // Provide the path to the PDF file within your project

    const link = document.createElement('a');
    link.href = filePath;
    link.target = '_blank';
    link.download = 'document.pdf';
    link.click();
  }
  ngOnInit() {
    this.selectedTheme = this.configService.getObjectProperty();
    // this.selectedTheme = "dark"

    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

}
