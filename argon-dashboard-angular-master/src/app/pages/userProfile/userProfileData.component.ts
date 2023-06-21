import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-userProfileData',
  templateUrl: './userProfileData.component.html',
  styleUrls: ['./userProfileData.component.scss']
})
export class UserProfileDataComponent implements OnInit{
  selectedTheme: string = 'default';
  isClassAdded: boolean = false;
  isClassAdded1: boolean = false;
  isClassAdded2: boolean = false;
  isClassAdded3: boolean = false;

ngOnInit(): void {
  
}
 
call(data){
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


   
    
}