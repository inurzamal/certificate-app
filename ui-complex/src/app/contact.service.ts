import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certification, Contact } from './contact';
// import {Contact } from './contact';
// import { Certification } from './certification';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient:HttpClient) { }

  //private baseUrl = 'https://contact-app-n.herokuapp.com';
  private baseUrl = 'http://localhost:8080';

  createContact(contact:Contact):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/contact`,contact,{responseType:"text"});
  }

  getAllContacts():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/contacts`);
  }

  findContact(id:number):Observable<Contact>{
    return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${id}`)
  }

  removeContact(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/contact/${id}`,{responseType:"text"})
  }

  createCertificate(id:number, _certifications:Certification):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/certificate/${id}`,_certifications,{responseType:"text"});
  }
  deleteCertificate(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/certificate/${id}`,{responseType:"text"})
  }
}
