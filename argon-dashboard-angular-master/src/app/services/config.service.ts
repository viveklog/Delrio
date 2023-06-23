import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';




@Injectable({
    providedIn: 'root'
  })


  export class ConfigService {

    constructor() { }

    public themeSubject: Subject<string> = new Subject<string>();

    updateTheme(theme: string) {
      // Update the theme logic here
    
      // Emit the updated theme value
      this.themeSubject.next(theme);
    }
    
    data: any = {
        selectedTheme: 'default',
    };
  
   
  
    setObjectProperty(value: any) {
      this.data.selectedTheme = value;
    }
  
    getObjectProperty() {
      return this.data.selectedTheme;
    }
  }