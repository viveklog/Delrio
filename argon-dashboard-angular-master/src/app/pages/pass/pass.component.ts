import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { FormBuilder, FormGroup, Validators, } from "@angular/forms";
import { element } from "protractor";

@Component({
    selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.scss']
})
export class PassComponent implements OnInit{
 
  dataForm: FormGroup;
  // listData: any;

  selectedIndex: number;

  constructor(private router: Router, private fb:FormBuilder) {

    // this.listData = [];

    this.dataForm = this.fb.group({
        plaza: ['', Validators.required],
        lane: ['', Validators.required],
        msgTime:['', Validators.required],
        accNum: ['', Validators.required],
        tagAge: ['', Validators.required],
        tagNum: ['', Validators.required],
        tagStatus: ['', Validators.required],
    })

   }

   addData(){
    this.passData.push(this.dataForm.value);
    this.dataForm.reset();
   }
   

   removeData(){
      this.passData.forEach((item)=>{
        if(item.select == true){
          this.passData.splice(this.selectedIndex,1);
        }
      }) 
   }

   updateData(){
    this.passData.forEach((item)=>{
      if(item.select == true){
        this.openModal();
        return;
      }else{
        alert("Please select one row")
        return;
      }
    }) 

   }


    ngOnInit(){

    }

   

    display = "none";

    openModal() {
      this.display = "block";
    }
    onCloseHandled() {
      this.display = "none";
    }

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

    }
   

    togV= true;

    toggleView(){
      if(this.togV == true){
        this.togV=false;
        const numView = document.getElementById("numShow");
        numView.classList.add("d-none");
        numView.classList.remove("d-block");

       const checkView = document.getElementById("checkShow");
          checkView.classList.add("d-block");
          checkView.classList.remove("d-none");
        
          return;
      }
      
       if(this.togV == false){
        console.log("222")
        this.togV=true;
        const numView = document.getElementById("numShow");
        numView.classList.remove("d-none");
        numView.classList.add("d-block");

      const checkView = document.getElementById("checkShow");
          checkView.classList.remove("d-block");
          checkView.classList.add("d-none");

          return;
      }
      
    }

    num =1;
    passData =[
      {
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
}