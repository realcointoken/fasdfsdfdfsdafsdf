import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  account: boolean = true;
  controls: boolean = false;
  assets: boolean = false;
  compliance: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showAccount() {
    this.account = true
    this.controls = false
    this.assets = false
    this.compliance = false
  }
  showControls() {
    this.account = false
    this.controls = true
    this.assets = false
    this.compliance = false
  }
  showAssets() {
    this.account = false
    this.controls = false
    this.assets = true
    this.compliance = false
  }
  showCompliance() {
    this.account = false
    this.controls = false
    this.assets = false
    this.compliance = true
  }

}
