import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../services/employees.service'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private apiEmployee: EmployeesService) { }

  ngOnInit(): void {
    this.retrieve()
    this.retrieveMy()
    this.retrieveMine()
  }

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  });

  submit()
  {
    console.log(this.form.value)
    alert("work fine")
    this.create(this.form.value)
  }


  create(myForm){
    this.apiEmployee.create(myForm);
  }

  employees
  retrieve()
  {
    this.apiEmployee.getAll().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data})
        )
      )
    ).subscribe(
      response =>
      {
        console.log(response)
        this.employees = response;
      }
    )
  }

  employeesMy
  retrieveMy()
  {
    this.apiEmployee.getAll().subscribe(data => {
      this.employeesMy = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data
        };
      })
      console.log(this.employees)
      console.log(data)
    });
  }

  employeesMine
  retrieveMine()
  {
    this.apiEmployee.getAll().subscribe(
      response =>
      {
        this.employeesMine = response
        console.log(this.employeesMine[0].payload.doc.data().firstName)
      }
    )
  }


  delete(id)
  {
    console.log(id.payload.doc.id)
    this.apiEmployee.delete(id.payload.doc.id)
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }
  refreshList()
  {

  }

  update(id)
  {
    console.log(id.payload.doc.id)
  }

}
