import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile: any;

  constructor(private db: AngularFirestore) { }

  collectionPath = this.db.collection('profile')
  collectionName = 'profile'

  // CREATE
  addUser(payload: any) {
    return new Promise<any>((resolve, reject) => {
      this.db.doc(this.collectionName + '/' + payload.emailAddress).set(payload).then(res => resolve(res), err => reject(err))
    })
  }

  // GET
  // Get all Profiles
  getAllUsers() {
    return this.collectionPath.snapshotChanges()
  }

  // Get single profile
  getSingleUser(userId: string) {
    this.profile = this.db.collection(this.collectionName, ref => ref.where('uid', '==', userId).limit(1))
      .snapshotChanges()
    return this.profile
  }

  // UPDATE
  updateUser(userId: string, payload: any) {
    return new Promise<any>((resolve, reject) => {
      this.db.doc(this.collectionName + '/' + userId).update(payload).then(res => resolve(res), err => reject(err))
    })
  }

  // DELETE
  deleteUser(userId: string) {
    this.db.doc(this.collectionName + '/' + userId).delete()
  }
}
