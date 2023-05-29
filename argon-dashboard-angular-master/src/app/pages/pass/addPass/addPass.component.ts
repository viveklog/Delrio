import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  formGroup: FormGroup;
  item: any;
}

@Component({
  selector: 'app-addPass',
  templateUrl: './addPass.component.html',
  styleUrls: ['./addPass.component.scss']
})
export class AddPassComponent implements OnInit{
  // dataForm = this.fb.group({
  //   plaza: ['', Validators.required],
  //   lane: ['', Validators.required],
  //   class: ['', Validators.required],
  //   entry: ['', Validators.required],
  //   exit: ['', Validators.required],
  //   fare: ['', Validators.required]
  // });

  dataForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddPassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.dataForm = data.formGroup;
   }

    ngOnInit() {}
    
}