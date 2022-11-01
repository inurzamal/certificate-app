import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  contacts: Contact[] = [];
  deleteOptionId: any;
  selectedDeleteOption: string = ""; // Employee/Certificate
  certificateSelectElement: any;
  selectedDeleteCertificateIndex: any[] = [];
  activeContactIndex: number = 0; // employee index who opened the modal
  activeCertificateId: number = 0; // certificate idx, to delete one by one
  // selectedIds: any[] = [];
  deleteErrorMessage: any = false;
  constructor(private contactService: ContactService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts() {
    this.contactService.getAllContacts().subscribe(
      data => {
        //console.log(data);
        this.contacts = data;
        console.log(this.contacts);
      }
    );
  }

  activeId: number = 0;
  getActiveId(id: number, index: number) {
    this.deleteErrorMessage = false;
    this.selectedDeleteOption = "Employee";
    this.activeId = id;
    this.activeContactIndex = index;
    this.activeCertificateId = 0;
    console.log("selected delete Opton : ", this.selectedDeleteOption);
  }

  //remove a contact
  deleteContact(id: number) {
    // if(confirm('Want to delete the record?'))
    this.contactService.removeContact(id).subscribe(
      data => {
        console.log(data);
        this.getAllContacts();
        let ref = document.getElementById('cancel')
        ref?.click();
      },
      error => {
        console.log(error);
      }
    )
  }
  //edit a contact
  editContact(id: number) {
    console.log("Edited :: " + id);
    this.router.navigate(['/edit', id]);
  }

  addc(id: number) {
    console.log("Adding certificate :: " + id);
    this.router.navigate(['/addcertificate', id]);
  }

  onDeleteOptoinChange() {
    this.deleteOptionId = <HTMLSelectElement>document.getElementById('deleteoption');
    this.selectedDeleteOption = "Employee";
    if (this.deleteOptionId.value != null) {
      this.selectedDeleteOption = this.deleteOptionId.value;
      console.log("delete optioin: ", this.selectedDeleteOption);
      if (this.selectedDeleteOption == "Certificate") {
        this.selectedDeleteCertificateIndex = [];
      }
    }
  }
  onSelectDeleteCertificate() {
    this.certificateSelectElement = <HTMLSelectElement>document.getElementById('deleteccname');
    if (this.certificateSelectElement.value != null) {
      this.selectedDeleteCertificateIndex = [...this.certificateSelectElement.options].filter(option => option.selected).map(option => option.value);
      console.log("sele arr: ", this.selectedDeleteCertificateIndex);
    }
  }
  deleteCertificateList() {
    if(!this.selectedDeleteCertificateIndex.length){
    this.deleteErrorMessage = "*Please select at lease 1 certificate.";
    return;
    }
    if (this.selectedDeleteCertificateIndex.length == this.contacts[this.activeContactIndex].certifications.length) {
      // console.log("Cannot delete all certificates. Please keep at least 1 certificate.");
      this.deleteErrorMessage = "*Cannot delete all certificates. Please keep at least 1 certificate.";

    }
    else {
      this.deleteErrorMessage = false;
      console.log("ids: ", this.selectedDeleteCertificateIndex);
      this.selectedDeleteCertificateIndex.forEach((element: number) => {
        this.deleteCertificate(this.contacts[this.activeContactIndex].certifications[element].idx);

      });
      this.selectedDeleteCertificateIndex = [];
    }
  }

  deleteCertificate(idx: number) {
    this.contactService.deleteCertificate(idx).subscribe(
      data => {
        console.log(data);
        let ref = document.getElementById('cancel');
        if (this.contacts[this.activeContactIndex].certifications.length < 3) {
          this.selectedDeleteOption = "Employee";
          ref?.click();
        }
        if (this.activeCertificateId > 0) {
          this.activeCertificateId = 0;
          ref?.click();

        }
        this.getAllContacts();
      },
      error => {
        console.log(error);
      }
    )
  }
}

