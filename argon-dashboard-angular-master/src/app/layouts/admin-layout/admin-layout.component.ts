import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { DataService } from "src/app/services/data.service"; 



const generateId = () => {
  // This will generate a random string of 24 characters
  return Math.random().toString(36).substr(2, 24);
}

interface Tag {
  id?: string;
  plaza?: string;
  lane?: string;
  msgTime?: string;
  accNum?: string;
  tagAge?: string;
  tagNum?: string;
  tagStatus?: string;
  tollPaid?: string;
  priorBalance?: string;
  newBalance?: string;
  class?: string;
  noAxles?: string;
  vehicleSpeed?: string;
  licensePlate?: string;
  imgURL1?: string;
  imgURL2?: string;
  imgURL3?: string;
  imgURL4?: string;
  sourceAddress?:string;
  rtTime?: string;
  rrTime?: string;
  select?: boolean;
}


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {


  selectedTheme: string = 'default';


  constructor( private configService: ConfigService,private dataService: DataService) { }

  ngOnInit() {

    // const displayedColumnsObject = JSON.parse(displayedColumnsString.replace(/'/g, '"'));
    // console.log(displayedColumnsObject)

    this.dataService.data =[displayedColumnsString, passData];

    this.selectedTheme = this.configService.getObjectProperty();
    console.log(this.selectedTheme)

    this.configService.themeSubject.subscribe((theme: string) => {
      this.selectedTheme = theme;
      console.log('Theme changed:', this.selectedTheme);
    });
    
  }

}

const displayedColumnsString = ['select', 'plaza', 'lane', 'msgTime', 'accNum', 'tagAge', 'tagNum', 'tagStatus', 'tollPaid',
'priorBalance', 'newBalance','class','noAxles', 'vehicleSpeed', 'licensePlate', 'imgURL1', 
'imgURL2','imgURL3','imgURL4','sourceAddress', 'rtTime', 'rrTime',
];


const passData: Tag[] = [
  
  {
    id: generateId(),
    select: false,
    plaza: "Delrio2",
    lane: "Lane 2",
    msgTime: "00:00",
    accNum: "123456",
    tagAge: "DelrioToll",
    tagNum: "DRBP00235",
    tagStatus: "Active",
    tollPaid: "15",
    priorBalance: "100",
    newBalance: "85",
    class: "Class A",
    noAxles: "4",
    vehicleSpeed: "60",
    licensePlate: "ABC 123",
    imgURL1: "image1_url",
    imgURL2: "image2_url",
    imgURL3: "image3_url",
    imgURL4: "image4_url",
    sourceAddress: "Source address 1",
    rtTime: "01:00",
    rrTime: "02:00",
  },
 

  {
    id: generateId(),
    select: false,
    plaza: "Delrio2",
    lane: "Lane 2",
    msgTime: "00:00",
    accNum: "123456",
    tagAge: "DelrioToll",
    tagNum: "DRBP00235",
    tagStatus: "Active",
    tollPaid: "15",
    priorBalance: "100",
    newBalance: "85",
    class: "Class A",
    noAxles: "4",
    vehicleSpeed: "60",
    licensePlate: "ABC 123",
    imgURL1: "image1_url",
    imgURL2: "image2_url",
    imgURL3: "image3_url",
    imgURL4: "image4_url",
    sourceAddress: "Source address 1",
    rtTime: "01:00",
    rrTime: "02:00",
  },
 
  {
    id: generateId(),
    select: false,
    plaza: "Delrio2",
    lane: "Lane 2",
    msgTime: "00:00",
    accNum: "123456",
    tagAge: "DelrioToll",
    tagNum: "DRBP00235",
    tagStatus: "Active",
    tollPaid: "15",
    priorBalance: "100",
    newBalance: "85",
    class: "Class A",
    noAxles: "4",
    vehicleSpeed: "60",
    licensePlate: "ABC 123",
    imgURL1: "image1_url",
    imgURL2: "image2_url",
    imgURL3: "image3_url",
    imgURL4: "image4_url",
    sourceAddress: "Source address 1",
    rtTime: "01:00",
    rrTime: "02:00",
  },
 
  {
    id: generateId(),
    select: false,
    plaza: "Delrio2",
    lane: "Lane 2",
    msgTime: "00:00",
    accNum: "123456",
    tagAge: "DelrioToll",
    tagNum: "DRBP00235",
    tagStatus: "Active",
    tollPaid: "15",
    priorBalance: "100",
    newBalance: "85",
    class: "Class A",
    noAxles: "4",
    vehicleSpeed: "60",
    licensePlate: "ABC 123",
    imgURL1: "image1_url",
    imgURL2: "image2_url",
    imgURL3: "image3_url",
    imgURL4: "image4_url",
    sourceAddress: "Source address 1",
    rtTime: "01:00",
    rrTime: "02:00",
  },
 
  {
    id: generateId(),
    select: false,
    plaza: "Delrio2",
    lane: "Lane 2",
    msgTime: "00:00",
    accNum: "123456",
    tagAge: "DelrioToll",
    tagNum: "DRBP00235",
    tagStatus: "Active",
    tollPaid: "15",
    priorBalance: "100",
    newBalance: "85",
    class: "Class A",
    noAxles: "4",
    vehicleSpeed: "60",
    licensePlate: "ABC 123",
    imgURL1: "image1_url",
    imgURL2: "image2_url",
    imgURL3: "image3_url",
    imgURL4: "image4_url",
    sourceAddress: "Source address 1",
    rtTime: "01:00",
    rrTime: "02:00",
  },
 
  {
    id: generateId(),
    select: false,
    plaza: "Delrio2",
    lane: "Lane 2",
    msgTime: "00:00",
    accNum: "123456",
    tagAge: "DelrioToll",
    tagNum: "DRBP00235",
    tagStatus: "Active",
    tollPaid: "15",
    priorBalance: "100",
    newBalance: "85",
    class: "Class A",
    noAxles: "4",
    vehicleSpeed: "60",
    licensePlate: "ABC 123",
    imgURL1: "image1_url",
    imgURL2: "image2_url",
    imgURL3: "image3_url",
    imgURL4: "image4_url",
    sourceAddress: "Source address 1",
    rtTime: "01:00",
    rrTime: "02:00",
  },
 
  {
    id: generateId(),
    select: false,
    plaza: "Delrio2",
    lane: "Lane 2",
    msgTime: "00:00",
    accNum: "123456",
    tagAge: "DelrioToll",
    tagNum: "DRBP00235",
    tagStatus: "Active",
    tollPaid: "15",
    priorBalance: "100",
    newBalance: "85",
    class: "Class A",
    noAxles: "4",
    vehicleSpeed: "60",
    licensePlate: "ABC 123",
    imgURL1: "image1_url",
    imgURL2: "image2_url",
    imgURL3: "image3_url",
    imgURL4: "image4_url",
    sourceAddress: "Source address 1",
    rtTime: "01:00",
    rrTime: "02:00",
  },
 
  {
    id: generateId(),
    select: false,
    plaza: "Delrio2",
    lane: "Lane 2",
    msgTime: "00:00",
    accNum: "123456",
    tagAge: "DelrioToll",
    tagNum: "DRBP00235",
    tagStatus: "Active",
    tollPaid: "15",
    priorBalance: "100",
    newBalance: "85",
    class: "Class A",
    noAxles: "4",
    vehicleSpeed: "60",
    licensePlate: "ABC 123",
    imgURL1: "image1_url",
    imgURL2: "image2_url",
    imgURL3: "image3_url",
    imgURL4: "image4_url",
    sourceAddress: "Source address 1",
    rtTime: "01:00",
    rrTime: "02:00",
  },
 
  {
    id: generateId(),
    select: false,
    plaza: "Delrio2",
    lane: "Lane 2",
    msgTime: "00:00",
    accNum: "123456",
    tagAge: "DelrioToll",
    tagNum: "DRBP00235",
    tagStatus: "Active",
    tollPaid: "15",
    priorBalance: "100",
    newBalance: "85",
    class: "Class A",
    noAxles: "4",
    vehicleSpeed: "60",
    licensePlate: "ABC 123",
    imgURL1: "image1_url",
    imgURL2: "image2_url",
    imgURL3: "image3_url",
    imgURL4: "image4_url",
    sourceAddress: "Source address 1",
    rtTime: "01:00",
    rrTime: "02:00",
  },
 
  {
    id: generateId(),
    select: false,
    plaza: "Delrio2",
    lane: "Lane 2",
    msgTime: "00:00",
    accNum: "123456",
    tagAge: "DelrioToll",
    tagNum: "DRBP00235",
    tagStatus: "Active",
    tollPaid: "15",
    priorBalance: "100",
    newBalance: "85",
    class: "Class A",
    noAxles: "4",
    vehicleSpeed: "60",
    licensePlate: "ABC 123",
    imgURL1: "image1_url",
    imgURL2: "image2_url",
    imgURL3: "image3_url",
    imgURL4: "image4_url",
    sourceAddress: "Source address 1",
    rtTime: "01:00",
    rrTime: "02:00",
  },
 
  {
    id: generateId(),
    select: false,
    plaza: "Delrio2",
    lane: "Lane 2",
    msgTime: "00:00",
    accNum: "123456",
    tagAge: "DelrioToll",
    tagNum: "DRBP00235",
    tagStatus: "Active",
    tollPaid: "15",
    priorBalance: "100",
    newBalance: "85",
    class: "Class A",
    noAxles: "4",
    vehicleSpeed: "60",
    licensePlate: "ABC 123",
    imgURL1: "image1_url",
    imgURL2: "image2_url",
    imgURL3: "image3_url",
    imgURL4: "image4_url",
    sourceAddress: "Source address 1",
    rtTime: "01:00",
    rrTime: "02:00",
  },
 
  {
    id: generateId(),
    select: false,
    plaza: "Delrio2",
    lane: "Lane 2",
    msgTime: "00:00",
    accNum: "123456",
    tagAge: "DelrioToll",
    tagNum: "DRBP00235",
    tagStatus: "Active",
    tollPaid: "15",
    priorBalance: "100",
    newBalance: "85",
    class: "Class A",
    noAxles: "4",
    vehicleSpeed: "60",
    licensePlate: "ABC 123",
    imgURL1: "image1_url",
    imgURL2: "image2_url",
    imgURL3: "image3_url",
    imgURL4: "image4_url",
    sourceAddress: "Source address 1",
    rtTime: "01:00",
    rrTime: "02:00",
  },
 
  {
    id: generateId(),
    select: false,
    plaza: "Delrio2",
    lane: "Lane 2",
    msgTime: "00:00",
    accNum: "123456",
    tagAge: "DelrioToll",
    tagNum: "DRBP00235",
    tagStatus: "Active",
    tollPaid: "15",
    priorBalance: "100",
    newBalance: "85",
    class: "Class A",
    noAxles: "4",
    vehicleSpeed: "60",
    licensePlate: "ABC 123",
    imgURL1: "image1_url",
    imgURL2: "image2_url",
    imgURL3: "image3_url",
    imgURL4: "image4_url",
    sourceAddress: "Source address 1",
    rtTime: "01:00",
    rrTime: "02:00",
  },
 
  {
    id: generateId(),
    select: false,
    plaza: "Delrio2",
    lane: "Lane 2",
    msgTime: "00:00",
    accNum: "123456",
    tagAge: "DelrioToll",
    tagNum: "DRBP00235",
    tagStatus: "Active",
    tollPaid: "15",
    priorBalance: "100",
    newBalance: "85",
    class: "Class A",
    noAxles: "4",
    vehicleSpeed: "60",
    licensePlate: "ABC 123",
    imgURL1: "image1_url",
    imgURL2: "image2_url",
    imgURL3: "image3_url",
    imgURL4: "image4_url",
    sourceAddress: "Source address 1",
    rtTime: "01:00",
    rrTime: "02:00",
  },
 
  {
    id: generateId(),
    select: false,
    plaza: "Delrio2",
    lane: "Lane 2",
    msgTime: "00:00",
    accNum: "123456",
    tagAge: "DelrioToll",
    tagNum: "DRBP00235",
    tagStatus: "Active",
    tollPaid: "15",
    priorBalance: "100",
    newBalance: "85",
    class: "Class A",
    noAxles: "4",
    vehicleSpeed: "60",
    licensePlate: "ABC 123",
    imgURL1: "image1_url",
    imgURL2: "image2_url",
    imgURL3: "image3_url",
    imgURL4: "image4_url",
    sourceAddress: "Source address 1",
    rtTime: "01:00",
    rrTime: "02:00",
  },
 
  {
    id: generateId(),
    select: false,
    plaza: "Delrio2",
    lane: "Lane 2",
    msgTime: "00:00",
    accNum: "123456",
    tagAge: "DelrioToll",
    tagNum: "DRBP00235",
    tagStatus: "Active",
    tollPaid: "15",
    priorBalance: "100",
    newBalance: "85",
    class: "Class A",
    noAxles: "4",
    vehicleSpeed: "60",
    licensePlate: "ABC 123",
    imgURL1: "image1_url",
    imgURL2: "image2_url",
    imgURL3: "image3_url",
    imgURL4: "image4_url",
    sourceAddress: "Source address 1",
    rtTime: "01:00",
    rrTime: "02:00",
  },
 
  {
    id: generateId(),
    select: false,
    plaza: "Delrio2",
    lane: "Lane 2",
    msgTime: "00:00",
    accNum: "123456",
    tagAge: "DelrioToll",
    tagNum: "DRBP00235",
    tagStatus: "Active",
    tollPaid: "15",
    priorBalance: "100",
    newBalance: "85",
    class: "Class A",
    noAxles: "4",
    vehicleSpeed: "60",
    licensePlate: "ABC 123",
    imgURL1: "image1_url",
    imgURL2: "image2_url",
    imgURL3: "image3_url",
    imgURL4: "image4_url",
    sourceAddress: "Source address 1",
    rtTime: "01:00",
    rrTime: "02:00",
  },
 
];
