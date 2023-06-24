import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { FormBuilder, FormGroup, Validators, } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { AddPassComponent } from "./addPass/addPass.component";
import { MatTable } from "@angular/material/table";
import { ColumnSelectionComponent } from "./columnSelection/columnSelection.component";
import {animate, state, style, transition, trigger} from '@angular/animations';




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
    selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  // standalone: true,
  // imports: [MatTableModule, NgFor, MatButtonModule, NgIf, MatIconModule],
})



export class PassComponent implements OnInit{

  dataSource = passData;
  // dataForm: FormGroup;\
  displayedColumns: string[] = ['select', 'plaza', 'lane', 'msgTime', 'accNum', 'tagAge', 'tagNum', 'tagStatus', 'tollPaid',
  'priorBalance', 'newBalance','class','noAxles', 'vehicleSpeed', 'licensePlate', 'imgURL1', 
  'imgURL2','imgURL3','imgURL4','sourceAddress', 'rtTime', 'rrTime',
 ];
 expandDisplayedColumns = [...this.displayedColumns,'expand'];
 expandedElement: Tag | null;
 checkedColumns =this.displayedColumns;



 checkedItems: boolean[] = new Array(this.displayedColumns.length).fill(true);
 checkedItemsArray: string[] = [];


  checkDisplayProperty = 'none';
  editDisplayProperty = 'block';
  saveDisplayProperty ='none';


  selectedIndex: number;
  num =1;
 
  
  isItemSelected: boolean = false;

  @ViewChild(MatTable) table: MatTable<any>;


  constructor(private router: Router, 
              private fb:FormBuilder, 
              private elRef: ElementRef, 
              private dialog: MatDialog,
              ) {}

  ngOnInit(): void {

  }

  capitalizeString(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  openDialogCSList(): void{
    const dialogRef = this.dialog.open(ColumnSelectionComponent, {
      width: '250px',
      data: {
        displayedColumns: this.displayedColumns
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed. Result:', result);
      // Perform any necessary actions with the result
    });
  }



  
  editColumn(){
    this.checkDisplayProperty = 'block';
    this.editDisplayProperty = 'none';
    this.saveDisplayProperty = 'block';

    const columnList= [];

    for (const column of this.displayedColumns) {
      const checked = this.checkedItemsArray.includes(column);
      columnList.push({ column, checked });
    }
    this.checkedColumns = columnList.map(item => item.column);

    console.log(columnList);
    console.log(this.checkedColumns);
  }

  saveColumn(){
    this.checkedItemsArray = this.displayedColumns.filter((item, index) => this.checkedItems[index]);
    this.checkedItems = new Array(this.displayedColumns.length).fill(true);
    this.checkedColumns =this.checkedItemsArray;
    this.expandDisplayedColumns = [...this.checkedColumns,'expand'];
    this.checkDisplayProperty = 'none';
    this.saveDisplayProperty = 'none';
    this.editDisplayProperty = 'block';
  }


  openDialog(): void {
    const selectedItem = this.dataSource.find(item => item.select);
    const dialogRef = this.dialog.open(AddPassComponent, {
      width: '450px',
      data: {
        item: selectedItem ? { ...selectedItem } : {},
        formGroup: this.fb.group({
          id: [{ value: selectedItem?.id || generateId(), disabled: true }],
          plaza: [selectedItem?.plaza || '', Validators.required],
          lane: [selectedItem?.lane || '', Validators.required],
          msgTime: [selectedItem?.msgTime || '', Validators.required],
          accNum: [selectedItem?.accNum || '', Validators.required],
          tagAge: [selectedItem?.tagAge || '', Validators.required],
          tagNum: [selectedItem?.tagNum || '', Validators.required],
          tagStatus: [selectedItem?.tagStatus || '', Validators.required],
        }),
      },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result && result !== undefined) {
        if (selectedItem) {
          const selectedIndex = this.dataSource.findIndex(item => item.select);
          this.dataSource[selectedIndex] = result;
        } else {
          this.dataSource.push(result);
        }
        this.table.renderRows();
      }
    });
  }

  removeData() {
    this.dataSource = this.dataSource.filter(item => !item.select);
    this.table.renderRows();
  }

    onSelect(index ){
      console.log(index)
      this.dataSource.map((item, i)=>{
        if ( i == index ){
          item.select=true;
          this.selectedIndex=index;
        } else{
          item.select=false;
        }
      })
      console.log(this.dataSource);
      this.updateItemSelection();

    }


    updateItemSelection(): void {
      this.isItemSelected = this.dataSource.some(item => item.select);
    }


    selectItem(index: number): void {
      this.dataSource[index].select = !this.dataSource[index].select;
      this.updateItemSelection();
    }
    
    
    csvExport(){
      var options = { 
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true, 
        showTitle: true,
        title: 'Pass management data',
        useBom: true,
        noDownload: false,
        headers: ["First Name", "Last Name", "ID"]
      };
     
      new ngxCsv(this.dataSource,"report", options);
    }
    
}

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
