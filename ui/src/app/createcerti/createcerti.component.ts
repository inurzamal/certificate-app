import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certification } from '../contact';
// import { Certification } from '../certification';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-createcerti',
  templateUrl: './createcerti.component.html',
  styleUrls: ['./createcerti.component.css']
})
export class CreatecertiComponent implements OnInit {

  ngOnInit(): void {
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
  
  // redirectToContactList(){
  //   this.router.navigate(['/contacts']);
  // }


}
