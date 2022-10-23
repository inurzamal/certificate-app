import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit {

  ngOnInit(): void { }

  // contact:Contact=new Contact();
  contact:Contact = {
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

  constructor(private contactService:ContactService,
  private router:Router) { }

  onSubmit(){
    console.log(this.contact);
    this.saveContact();
  }
  saveContact(){
    this.contactService.createContact(this.contact).subscribe(
      data=>{
        console.log(data);
        this.redirectToContactList();
      },
      error=>{
        console.log(error);
      }
    );
  }
  redirectToContactList(){
    this.router.navigate(['/contacts']);
  }

}
