import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactedit',
  templateUrl: './contactedit.component.html',
  styleUrls: ['./contactedit.component.css']
})
export class ContacteditComponent implements OnInit {

  // contact:Contact=new Contact();
  contact: Contact = {
    cid: 0,
    name: '',
    certifications: [
      {
        idx: 0,
        cname: '',
        cstatus: ''
      }
    ]
  }


  id: number = 0;
  ccname: any; //id of select
  selectedCcnameId: any = 0; //index of ccname
  constructor(private contactService: ContactService,
    private router: Router, private activeRouter: ActivatedRoute) { }

  backClicked() {
    this.router.navigate(['/contacts'])
  }

  ngOnInit(): void {
    this.getContact();
    this.ccname = <HTMLSelectElement>document.getElementById('ccname');
    this.selectedCcnameId = 0; // selectedCcnameId is storing index of ccname
  }


  getContact() {
    this.id = this.activeRouter.snapshot.params['id'];
    console.log("UPDATED ID ::" + this.id);
    this.contactService.findContact(this.id).subscribe(
      data => {
        console.log("GETTING A CONTACT..");
        console.log(data);
        this.contact = data;
      },
      error => {
        console.log("SOMETHING WENT WRONG DURING GETTING A CONTACT..");
        console.log(error);
      }
    );
  }
  updateContact() {
    console.log("UPDATED ..");
    this.contactService.createContact(this.contact).subscribe(
      data => {
        console.log("UPDATING A CONTACT..");
        console.log(data);
        this.router.navigate(['/contacts'])
      },
      error => {
        console.log("SOMETHING WENT WRONG DURING UPDATING A CONTACT..");
        console.log(error);
      });
  }
  onCertificateOptionChanged() {
    if (this.ccname.value != null) {
      this.selectedCcnameId = this.ccname.value;
    }

  }
}
