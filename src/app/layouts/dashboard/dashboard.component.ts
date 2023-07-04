import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('sideNav') sideNav: ElementRef;
  @ViewChild('menuBtn') menuBtn: ElementRef;

  hamClick: any;
  userId: any;
  users: any;
  user: any;

  constructor(private profileService: ProfileService, private renderer: Renderer2) { }

  ngOnInit(): void {

    // Get single User Informations
    this.userId = JSON.parse(localStorage.getItem('id') || '{}')
    this.users = this.profileService.getSingleUser(this.userId).subscribe((res: any) => {
      res.forEach((r: any) => {
        let item = r.payload.doc.data() as Profile
        this.user = item
      });
    })

    // Click Outside to close element
    this.renderer.listen('window', 'click', (e: Event) => {
      let x = !this.sideNav.nativeElement.contains(e.target)
      let y = !this.menuBtn.nativeElement.contains(e.target)
      if (x && y) {
        this.hamClick = false;
      }
    });
  }

  // Open Menu
  openMenu() {
    this.hamClick = !this.hamClick
  }

}
