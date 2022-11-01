import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certification, Contact } from '../contact';
// import { Certification } from '../certification';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-createcerti',
  templateUrl: './createcerti.component.html',
  styleUrls: ['./createcerti.component.css']
})
export class CreatecertiComponent implements OnInit {

  ngOnInit(): void {
    this.getContact()
  }

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

  // certification:Certification=new Certification();
  certifications: Certification =
    {
      idx: 0,
      cname: '',
      cstatus: ''
    }
  

  id:number=0;
  constructor(private contactService:ContactService,
    private router:Router,private activeRouter:ActivatedRoute) { }

    onSubmit(){
      console.log(this.certifications);
      this.addCertificate();
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

  addCertificate(){
    this.id=this.activeRouter.snapshot.params['id'];
    this.contactService.createCertificate(this.id, this.certifications).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/contacts'])
      },
      error=>{
        console.log(error);
      }
    );
  }
  
  backClicked() {
    this.router.navigate(['/contacts'])
  }


}
