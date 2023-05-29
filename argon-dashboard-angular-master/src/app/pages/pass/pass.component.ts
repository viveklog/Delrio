import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { FormBuilder, FormGroup, Validators, } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { AddPassComponent } from "./addPass/addPass.component";
import { MatTable } from "@angular/material/table";

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
  select?: boolean;
}

@Component({
    selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.scss']
})
export class PassComponent implements OnInit{
 
  dataForm: FormGroup;
  displayedColumns: string[] = ['select', 'plaza', 'lane', 'msgTime', 'accNum', 'tagAge', 'tagNum', 'tagStatus'];

  // listData: any;

  selectedIndex: number;
  num =1;
  passData: Tag[] = [
    {
      id: generateId(),
      select: false,
      plaza: "Delrio1",
      lane: "Lane 2",
      msgTime: "00:00",
      accNum: "123456",
      tagAge: "DelrioToll",
      tagNum: "DRBP00235",
      tagStatus: "Active",
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
    },
    {
      id: generateId(),
      select: false,
      plaza: "Delrio3",
      lane: "Lane 2",
      msgTime: "00:00",
      accNum: "123456",
      tagAge: "DelrioToll",
      tagNum: "DRBP00235",
      tagStatus: "Active",
    },
  ];
  // display = "none";
  // togV= true;
  isItemSelected: boolean = false;

  @ViewChild(MatTable) table: MatTable<any>;


  constructor(private router: Router, private fb:FormBuilder, private elRef: ElementRef, private dialog: MatDialog) {}

  ngOnInit(): void {
    // this.listData = [];

  //   this.dataForm = this.fb.group({
  //     plaza: ['', Validators.required],
  //     lane: ['', Validators.required],
  //     msgTime:['', Validators.required],
  //     accNum: ['', Validators.required],
  //     tagAge: ['', Validators.required],
  //     tagNum: ['', Validators.required],
  //     tagStatus: ['', Validators.required],
  //   });
  }

  //  addData(){
  //   this.passData.push(this.dataForm.value);
  //   this.dataForm.reset();
  //  }
   

  //  removeData(){
  //     this.passData.forEach((item)=>{
  //       if(item.select == true){
  //         this.passData.splice(this.selectedIndex,1);
  //       }
  //     }) 
  //  }

  //  updateData(){
  //   this.passData.forEach((item)=>{
  //     if(item.select == true){
  //       this.openModal();
  //       return;
  //     }else{
  //       alert("Please select one row")
  //       return;
  //     }
  //   }) 

  //  }
  openDialog(): void {
    const selectedItem = this.passData.find(item => item.select);
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
          const selectedIndex = this.passData.findIndex(item => item.select);
          this.passData[selectedIndex] = result;
        } else {
          this.passData.push(result);
        }
        this.table.renderRows();
      }
    });
  }

  removeData() {
    this.passData = this.passData.filter(item => !item.select);
    this.table.renderRows();
  }

    // openModal() {
    //   // this.display = "block";
    // }
    // onCloseHandled() {
    //   this.display = "none";
    // }

    // navigationChange(){
    //   this.router.navigateByUrl('/fare');
    // }

    onSelect(index){

      this.passData.map((item, i)=>{
        if ( i == index ){
          item.select=true;
          this.selectedIndex=index;
        } else{
          item.select=false;
        }
      })

      this.updateItemSelection();

    }
  

    // toggleView(){
    //   if(this.togV == true){
    //     this.togV=false;
    //     const numView = document.getElementById("numShow");
    //     numView.classList.add("d-none");
    //     numView.classList.remove("d-block");

    //    const checkView = document.getElementById("checkShow");
    //       checkView.classList.add("d-block");
    //       checkView.classList.remove("d-none");
        
    //       return;
    //   }
      
    //    if(this.togV == false){
    //     console.log("222")
    //     this.togV=true;
    //     const numView = document.getElementById("numShow");
    //     numView.classList.remove("d-none");
    //     numView.classList.add("d-block");

    //   const checkView = document.getElementById("checkShow");
    //       checkView.classList.remove("d-block");
    //       checkView.classList.add("d-none");

    //       return;
    //   }
      
    // }

    updateItemSelection(): void {
      this.isItemSelected = this.passData.some(item => item.select);
    }


    selectItem(index: number): void {
      this.passData[index].select = !this.passData[index].select;
      this.updateItemSelection();
    }
    
    
    csvExport(){
      var options = { 
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true, 
        showTitle: true,
        title: 'Your title',
        useBom: true,
        noDownload: false,
        headers: ["First Name", "Last Name", "ID"]
      };
     
      new ngxCsv(this.passData,"report", options);
    }
    
    // addData() {
    //   const newItem = {...this.dataForm.value, id: generateId()};
    //   this.passData.push(newItem);
    //   this.dataForm.reset();
    // }
}