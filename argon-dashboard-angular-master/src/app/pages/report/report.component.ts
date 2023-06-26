import { Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import { DataService } from 'src/app/services/data.service'; 



@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})


export class ReportComponent implements OnInit{
    myData: any;
    @ViewChild('reportContent', { static: false }) reportContentRef: ElementRef;
    constructor(private dataService: DataService) {
      // this.selectedItems = [];
    }

    columnList: string[]=[];
    tableData: string[]=[];
    selectedColumns: any[] = [];


    ngOnInit() {
        this.myData = this.dataService.data;
        console.log(this.myData);
        this.columnList=this.myData[0];
        this.tableData=this.myData[1];
      }
  

      capitalizeString(value: string): string {
        return value.charAt(0).toUpperCase() + value.slice(1);
      }

      toggleSelection(column: string): void {
        const index = this.selectedColumns.indexOf(column);
      
        if (index === -1) {
          // Add the item to the selectedItems array if it's not already present
          this.selectedColumns.push(column);
        } else {
          // Remove the item from the selectedItems array if it's already present
          this.selectedColumns.splice(index, 1);
        }
      }



      showCodeBlock1 = false;
      showCodeBlock2 = false;
      showCodeBlock3 = false;
      showCodeBlock4 = false;
      showCodeBlock5 = false;
      showCodeBlock6 = false;
      showCodeBlock7 = false;
      showCodeBlock8 = false;
      showCodeBlock9= false;
      showCodeBlock10 = false;

  toggleCodeBlock1(event: any) {
    this.showCodeBlock1 = event.checked;
  }

  toggleCodeBlock2(event: any) {
    this.showCodeBlock2 = event.checked;
  }

  toggleCodeBlock3(event: any) {
    this.showCodeBlock3 = event.checked;
  }

  toggleCodeBlock4(event: any) {
    this.showCodeBlock4 = event.checked;
  }

  toggleCodeBlock5(event: any) {
    this.showCodeBlock5 = event.checked;
  }

  toggleCodeBlock6(event: any) {
    this.showCodeBlock6 = event.checked;
  }

  toggleCodeBlock7(event: any) {
    this.showCodeBlock7 = event.checked;
  }

  toggleCodeBlock8(event: any) {
    this.showCodeBlock8 = event.checked;
  }

  toggleCodeBlock9(event: any) {
    this.showCodeBlock9 = event.checked;
  }

  toggleCodeBlock10(event: any) {
    this.showCodeBlock10 = event.checked;
  }

  

  

    generateReport() {

      console.log(this.selectedColumns);

      const element = this.reportContentRef.nativeElement;
      const options = {
        margin:	5,
        filename: 'report.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
      };
  
      html2pdf()
        .set(options)
        .from(element)
        .save();
    }
  }