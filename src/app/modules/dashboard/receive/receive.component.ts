import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css']
})
export class ReceiveComponent implements OnInit {

  userId: any;
  users: any;
  user: any;
  successMessage: boolean = false;
  currentTotalWith: any;
  constructor(private formBuilder: FormBuilder, private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {

    // Get single User Informations
    this.userId = JSON.parse(localStorage.getItem('id') || '{}')
    this.users = this.profileService.getSingleUser(this.userId).subscribe((res: any) => {
      res.forEach((r: any) => {
        let item = r.payload.doc.data() as Profile
        item.id = r.payload.doc.id
        this.user = item
      });
    })
  }


  // Withdraw Form
  withdrawForm: FormGroup = this.formBuilder.group({
    amount: ['', { validators: [Validators.required], updateOn: "change" }],
  });

  // Edit Total Withdraw
  onEdit(data: any) {
    let payload = {
      recentAmount: this.withdrawForm.value.amount,
      // Set Total withdrawal
      totalWith: data.totalWith + this.withdrawForm.value.amount
    }

    this.profileService.updateUser(data.emailAddress, payload).then(res => {
      this.successMessage = true

      // Navigate to Dashboard
      this.router.navigate(['dashboard'])
    }).catch(err => {
      console.log(err)
    })
  }
}

