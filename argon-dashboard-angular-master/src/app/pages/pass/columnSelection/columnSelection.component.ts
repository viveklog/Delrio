import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-columnSelection',
  templateUrl: './columnSelection.component.html',
  styleUrls: ['./columnSelection.component.scss']
})
export class ColumnSelectionComponent{

  checkedColumns: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<ColumnSelectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { displayedColumns: string[] }
  ) {}

  onCheckboxChange(event: any, column: string): void {
    const isChecked = event.target.checked;
    if (isChecked && !this.checkedColumns.includes(column)) {
      this.checkedColumns.push(column);
    } else if (!isChecked && this.checkedColumns.includes(column)) {
      const index = this.checkedColumns.indexOf(column);
      this.checkedColumns.splice(index, 1);
    }
  }

  apply(): void {
    this.dialogRef.close(this.checkedColumns);
  }

  cancel(): void {
    this.dialogRef.close();
  }
   
}