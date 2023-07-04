import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hamClick: any;

  navLink: any = [
    {
      name: "Prices",
      link: "/price",
      subLinks: []
    },
    {
      name: "Security",
      link: "/security",
      subLinks: []
    },
    {
      name: "Institutions",
      link: "/institutions",
      subLinks: []
    },
    {
      name: "About Us",
      link: "/about",
      subLinks: []
    },
    {
      name: "Contact",
      link: "/contact",
      subLinks: []
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  // Open Menu
  openMenu() {
    this.hamClick = !this.hamClick
  }

  // Close Menu
  closeMenu() {
    this.hamClick = false
  }

}
