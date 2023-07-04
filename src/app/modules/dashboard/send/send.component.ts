import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Plan } from 'src/app/interfaces/plan';
import { Profile } from 'src/app/interfaces/profile';
import { PlanService } from 'src/app/services/plan.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements AfterViewInit {

  @ViewChild('investBtn') investBtn: ElementRef;
  @ViewChild('investBtn2') investBtn2: ElementRef;
  @ViewChild('investBtn3') investBtn3: ElementRef;
  @ViewChild('deposit') deposit: ElementRef;

  depositModal: any;
  planPreview: any;
  planPreview2: any;
  planPreview3: any;
  option: string = "Null";
  optionId: string = "Null";
  BtcId: string = "1FqD5tgXJjMaNhP1ECoYTkqvpnYK35jmzA";
  EtherumId: string = "0x9286a3cd89b7a8a8703a1bcda027b0e3fd01a867";
  usdtId: string = "0x9286a3cd89b7a8a8703a1bcda027b0e3fd01a867";
  paymentMethod: any;
  userId: any;
  users: any;
  user: any;
  copyText: any;
  tooltip: any;
  currentPlan: any;

  plans?: Plan[]

  investBtnnn: any;
  styles: any;

  constructor(private renderer: Renderer2, private profileService: ProfileService, private planService: PlanService, private router: Router) { }

  ngAfterViewInit(): void {

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
      let x = !this.investBtn.nativeElement.contains(e.target)
      let y = !this.deposit.nativeElement.contains(e.target)
      if (x && y) {
        this.depositModal = false;
        // this.styles.classList.remove('show-modal')
      }
    });


    // Get all plans
    this.getAllPlans()


  }

  // Get all Plans
  getAllPlans(): void {
    this.planService.getPlans().snapshotChanges().pipe(
      map((changes: any) => changes.map((c: any) => ({
        id: c.payload.doc.id, ...c.payload.doc.data()
      })
      ))
    ).subscribe(data => {
      this.plans = data
      console.log(this.plans)
    })
  }

  // Open Plan Preview
  openPlanPreview(event: any) {

    const styles1 = event.currentTarget.parentElement.parentElement.children[0]
    const styles = event.currentTarget.parentElement.parentElement.children[1]
    styles.classList.add('show')
    styles1.classList.add('show')
  }

  // Submit form
  openDepositModal(event: any) {

    this.styles = event.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.children[2]
    this.styles.classList.add('show-modal')
    // this.styles = this.depositModal

    console.log(this.depositModal)

    // Open Deposit Modal
    // this.depositModal = !this.depositModal
    this.paymentMethod = document.getElementsByClassName("paymentMethod");

    Array.prototype.forEach.call(this.paymentMethod, i => {
      // this.planPreview = !this.planPreview
      if (i.value === 'Btc') {
        this.option = "Btc"
        this.optionId = this.BtcId
      } else if (i.value === 'Etherum') {
        this.option = "Etherum"
        this.optionId = this.EtherumId
      } else if (i.value === 'Usdt') {
        this.option = "Usdt"
        this.optionId = this.usdtId
      }
    });

  }
  // Copy text to clipboard
  myFunction() {
    /* Get the text field */
    this.copyText = document.getElementsByClassName("myInput");

    Array.prototype.forEach.call(this.copyText, i => {
      /* Select the text field */
      i.select();
      // console.log(i.value)
      i.setSelectionRange(0, 99999); /* For mobile devices */

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(i.value);

      this.tooltip = "Copied!";

    });

  }

  // On mouse over
  overFunc() {
    this.tooltip = "Copy to clipboard";
  }

  // Deposit
  depositBtn() {
    // Navigate to Dashboard
    this.router.navigate(['dashboard'])
  }

}
