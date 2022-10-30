package com.nur.contact.controllers;

import java.util.List;

import com.nur.contact.dto.RequestDto;
import com.nur.contact.entities.Certification;
import com.nur.contact.repos.CertificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nur.contact.entities.Contact;
import com.nur.contact.services.ContactService;

@RestController
@CrossOrigin
public class ContactRestController {
	
	@Autowired
	private ContactService service;
	
	@PostMapping("/contact")
	public ResponseEntity<String> contact(@RequestBody Contact contact){
		String status = service.upsert(contact);
		return new ResponseEntity<>	(status, HttpStatus.CREATED);
	}
	
	@GetMapping("/contacts")
	public ResponseEntity<List<Contact>> getAllContacts(){
		List<Contact> allContacts = service.getAllContacts();		
		return new ResponseEntity<>(allContacts,HttpStatus.OK);		
	}
	
	@GetMapping("/contact/{id}")
	public ResponseEntity<Contact> getContact(@PathVariable int id){
		Contact contact = service.getContact(id);
		
		if(contact==null) {
			return new ResponseEntity<>(contact,HttpStatus.NOT_FOUND);
		}	
		return new ResponseEntity<>(contact,HttpStatus.OK);	
	}
	
	
	@DeleteMapping("/contact/{id}")
	public ResponseEntity<String> deleteContact(@PathVariable int id){
		String deleteContact = service.deleteContact(id);
		return new ResponseEntity<>(deleteContact,HttpStatus.OK);	
	}

	@PostMapping("/certificate/{id}")
	public String addNewCertificate(@PathVariable int id, @RequestBody Certification certification){
		String msg = service.addCertificate(id, certification);
		return msg;
	}

	@DeleteMapping("/certificate/{idx}")
	public String deleteCertificate(@PathVariable int idx){
		String res = service.deleteCertificate(idx);
		return res;
	}


}
