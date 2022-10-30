package com.nur.contact.services;

import java.util.List;

import com.nur.contact.dto.RequestDto;
import com.nur.contact.entities.Certification;
import com.nur.contact.entities.Contact;
import org.springframework.web.bind.annotation.RequestBody;


public interface ContactService {
	
	String upsert(Contact contact);
	
	List<Contact> getAllContacts();
	
	Contact getContact(int id);
	
	String deleteContact(int id);

	String addCertificate(int id, Certification certification);

	String deleteCertificate(int idx);

	String deleteCerti(int id, Certification certification);
}
