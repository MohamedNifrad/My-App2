import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private firestore: AngularFirestore) {
  }

  getAll() {
    return this.firestore.collection('Employees').snapshotChanges();
  }

  getOne(id) {
    return this.firestore.collection('Employees/'+ id).snapshotChanges();
  }
  
  create(form){
    return this.firestore.collection('Employees').add(form);
  }

  update(formValue): Promise<void> {
    //return this.tutorialsRef.update(key, value);
    delete formValue.id;
    return this.firestore.doc('Employees/' + formValue.id).update(formValue);
  }

  delete(key): Promise<void> {
    //return this.tutorialsRef.remove(key);
    return this.firestore.doc('Employees/' + key).delete();
  }

  deleteAll(): Promise<void> {
    //return this.tutorialsRef.remove();
    return this.firestore.doc('Employees').delete();
  }
}
