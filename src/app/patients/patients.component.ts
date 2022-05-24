import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../services/patients.service';
import { NgForm } from '@angular/forms';
import { Patient } from '../models/patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
// export class PatientsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class PatientsComponent implements OnInit {
model=new Patient();
  constructor(public patientsService : PatientsService) { }

  ngOnInit(): void {
  }
  onSubmit(myForm:NgForm){
    this.patientsService.addPatient().subscribe({
      next:(data) => {console.log("Successfully added your details.You will shortly receive an email." ); },
      complete:() => {console.log("Successfully added your details.You will shortly receive an email." ); },
      error:(err) => { console.log("Unable to Create New User" + err);}
      })
    }
  }
