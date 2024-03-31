import { NgForm } from '@angular/forms'; // Importez NgForm

import { Component, ViewChild } from '@angular/core';
import { Doctor } from './doctor.model';
import { DoctorService } from './doctor.service';


@Component({
  selector: 'app-gerer-compte-medecin',
  templateUrl: './gerer-compte-medecin.component.html',
  styleUrls: ['./gerer-compte-medecin.component.scss'],
})
export class GererCompteMedecinComponent {
  @ViewChild('newDoctorForm') newDoctorForm: NgForm; // Définissez la propriété newDoctorForm de type NgForm

  doctors: Doctor[] = [];
  newDoctorName: string = '';
  newDoctorSpecialty: string = '';

  constructor(private doctorService: DoctorService) {
    this.newDoctorForm = {} as NgForm; // Initialise newDoctorForm
  }

  ngOnInit() {
    this.loadDoctors();
    this.getDoctors();
  }
  getDoctors(){
    this.doctorService.getDoctors().subscribe((doctors: Doctor[]) => {
      this.doctors = doctors;
    });
  }


  loadDoctors() {
    this.doctorService.getDoctors().subscribe((data: Doctor[]) => {
      this.doctors = data;
    });
    // const newDoctor: Doctor = {
    //   name: this.newDoctorName,
    //   specialty: this.newDoctorSpecialty
    // };
  }

  createDoctor(doctor: Doctor) {
    this.doctorService.createDoctor(doctor).subscribe(() => {
      this.loadDoctors();
    });
  }

  updateDoctor(doctor: Doctor) {
    this.doctorService.updateDoctor(doctor).subscribe(() => {
      this.loadDoctors();
    });
  }

  deleteDoctor(doctorId: number) {
    this.doctorService.deleteDoctor(doctorId).subscribe(() => {
      this.loadDoctors();
    });
  }
}
interface doctor {
  id?: number;
  name: string;
  specialty: string;
  // Ajoutez d'autres propriétés au besoin
}