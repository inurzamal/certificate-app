package com.nur.contact.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.nur.contact.dto.CertiDto;
import com.nur.contact.dto.RequestDto;
import com.nur.contact.entities.Certification;
import com.nur.contact.repos.CertificationRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nur.contact.entities.Contact;
import com.nur.contact.repos.ContactRepository;
import org.springframework.web.bind.annotation.RequestBody;


@Service
public class ContactServiceImpl implements ContactService {

	@Autowired
	private ContactRepository repository;

	@Autowired
	private CertificationRepository certificationRepository;

	@Override
	public String upsert(Contact contact) {
		Contact save = repository.save(contact);
		return "success";
	}

	@Override
	public List<Contact> getAllContacts() {
		return repository.findAll();
	}

	@Override
	public Contact getContact(int id) {
		Optional<Contact> findById = repository.findById(id);
		if(findById.isPresent()) {
			return findById.get();
		}
		return null;

	}

	@Override
	public String deleteContact(int id) {
		repository.deleteById(id);
		return "Contact deleted successfully";
	}

	@Override
	public String addCertificate(int id, Certification certification) {

		List<Certification> all = repository.findCertificateByContactId(id);

		Optional<Contact> byId = repository.findById(id);
		if (byId.isPresent()){
			Contact contact = byId.get();
			List<Certification> list = new ArrayList<Certification>();

			for (Certification c: all){
				list.add(c);
			}
			list.add(certification);
			contact.setCertifications(list);
			repository.save(contact);

			return "certificate added successfully";
		}
		return "id not present";
	}

	@Override
	public String deleteCertificate(int idx) {
		if (certificationRepository.findById(idx).isPresent()){
			certificationRepository.deleteById(idx);
			return "certificate deleted";
		}
		return "certificate is not available with the id";
	}

	@Override
	public String deleteCerti(int id, Certification certification) {

		return null;
	}

}
