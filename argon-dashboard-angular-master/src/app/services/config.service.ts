import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })


  export class ConfigService {
    
    data: any = {
        selectedTheme: 'default',
    };
  
    constructor() { }
  
    setObjectProperty(value: any) {
      this.data.selectedTheme = value;
    }
  
    getObjectProperty() {
      return this.data.selectedTheme;
    }
  }