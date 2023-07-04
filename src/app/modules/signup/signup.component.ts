import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide: boolean = true;
  loading: boolean = false;
  returnUrl = '';
  error = '';
  isSignedin: boolean = false;
  errorMessage: string = "";
  id: any = "form1"
  currentBal: any = Math.floor(Math.random() * (2500 - 1000 + 1)) + 1000

  constructor(private firebaseService: FirebaseService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl' || '/']

    if (localStorage.getItem('id') !== null) {
      this.isSignedin = true
    } else {
      this.isSignedin = false
    }
  }

  // Form initialization and validation
  signupForm: FormGroup = this.formBuilder.group({
    firstName: ['', { validators: [Validators.required], updateOn: "change" }],
    middleName: ['', { validators: [Validators.required], updateOn: "change" }],
    lastName: ['', { validators: [Validators.required], updateOn: "change" }],
    phoneNumber: ['', { validators: [Validators.required], updateOn: "change" }],
    email: ['', { validators: [Validators.required, Validators.email], updateOn: "change" }],
    password: ['', { validators: [Validators.required], updateOn: "change" }],
    address: ['', { validators: [Validators.required], updateOn: "change" }],
    city: ['', { validators: [Validators.required], updateOn: "change" }],
    state: ['', { validators: [Validators.required], updateOn: "change" }],
    zipCode: ['', { validators: [Validators.required], updateOn: "change" }],
    ssn: ['', { validators: [Validators.required], updateOn: "change" }],
    dob: ['', { validators: [Validators.required], updateOn: "change" }],
  })

  // Signup
  async signup() {
    // If form is invalid don't submit
    if (this.signupForm.invalid) {
      return
    }

    // Loading
    this.loading = true

    let payload = {
      firstName: this.signupForm.value.firstName,
      middleName: this.signupForm.value.middleName,
      lastName: this.signupForm.value.lastName,
      phoneNumber: this.signupForm.value.phoneNumber,
      emailAddress: this.signupForm.value.email,
      password: this.signupForm.value.password,
      address: this.signupForm.value.address,
      city: this.signupForm.value.city,
      state: this.signupForm.value.state,
      zipCode: this.signupForm.value.zipCode,
      ssn: this.signupForm.value.ssn,
      dob: this.signupForm.value.dob,
      currentBal: this.currentBal
    }

    await this.firebaseService.createUser(payload.emailAddress, payload.password, payload)
      .then(res => {

      }).catch(err => {
        this.errorMessage = err.message
        this.loading = false
      })

    if (this.firebaseService.isLogggedIn === true) {
      this.isSignedin = true
      // Navigate to Dashboard
      this.router.navigate(['/dashboard'])
    }
  }

  // Show Forms
  showForm(ids: any) {
    this.id = ids
  }


}
