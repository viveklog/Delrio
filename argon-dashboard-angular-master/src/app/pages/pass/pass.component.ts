import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.scss']
})
export class PassComponent implements OnInit{
  constructor(private router: Router) { }
    ngOnInit() {}

    navigationChange(){
      this.router.navigateByUrl('/fare');
    }
    
}