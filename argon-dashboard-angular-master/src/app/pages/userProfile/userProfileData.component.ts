import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';




@Component({
  selector: 'app-userProfileData',
  templateUrl: './userProfileData.component.html',
  styleUrls: ['./userProfileData.component.scss']
})
export class UserProfileDataComponent implements OnInit{

  constructor(private configService: ConfigService) { }

  theme = "cd1";
  selectedTheme: string = 'default';
  isClassAdded: boolean = false;
  isClassAdded1: boolean = true;
  isClassAdded2: boolean = false;
  isClassAdded3: boolean = false;

ngOnInit(): void {
  
}
 
call(data){
  this.theme = data;
console.log(data);
if(data == 'cd1'){
  this.isClassAdded = false;
  this.isClassAdded1 = true;
  this.isClassAdded2= false;
  this.isClassAdded3= false;
  this.selectedTheme = 'default';
  

}
if(data == 'cd2'){
  this.isClassAdded = true;
  this.isClassAdded1= false;
  this.isClassAdded2= true;
  this.isClassAdded3= false;
  this.selectedTheme = 'casual';
  
}
if(data == 'cd3'){
  this.isClassAdded = false;
  this.isClassAdded1= false;
  this.isClassAdded2= false;
  this.isClassAdded3= true;
  this.selectedTheme = 'dark';
  
}
}



applyTheme(){
  if(this.theme == 'cd1'){
    this.configService.setObjectProperty('default');
    console.log(this.configService.getObjectProperty());
  }
  if(this.theme == 'cd2'){
    this.configService.setObjectProperty('casual');
    console.log(this.configService.getObjectProperty());
  }
  if(this.theme == 'cd3'){
    this.configService.setObjectProperty('dark');
    console.log(this.configService.getObjectProperty());
  }

  alert("selected theme applied");
}


   
    
}