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
  activeCertificateId: number = 0;
  selectedDeleteOption: string = "";
  activeEmployeeId: number = 0;

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

  //remove a contact
  deleteContact() {
    // if(confirm('Want to delete the record?'))
    this.contactService.removeContact(this.activeEmployeeId).subscribe(
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
 // remove a certificate
  deleteCertificate() {
    this.contactService.deleteCertificate(this.activeCertificateId).subscribe(
      data => {
        console.log(data);
        let ref = document.getElementById('cancel');
        ref?.click();
        this.getAllContacts();
      },
      error => {
        console.log(error);
      }
    )
  }
}

