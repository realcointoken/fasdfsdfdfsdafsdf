import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { Plan } from '../interfaces/plan';


@Injectable({
  providedIn: 'root'
})
export class PlanService {

  serviceRef: AngularFirestoreCollection<Plan>
  // collectionPath = this.db.collection('plan')
  private collectionName = 'plan'

  constructor(private db: AngularFirestore) {
    this.serviceRef = db.collection(this.collectionName)
  }



  // Get all Plans
  getPlans(): AngularFirestoreCollection<Plan> {
    return this.serviceRef
  }
}
