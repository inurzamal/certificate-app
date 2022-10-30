package com.nur.contact.repos;

import com.nur.contact.dto.CertiDto;
import com.nur.contact.entities.Certification;
import org.springframework.data.jpa.repository.JpaRepository;

import com.nur.contact.entities.Contact;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ContactRepository extends JpaRepository<Contact, Integer> {

    @Query("select new com.nur.contact.entities.Certification(certi.idx, certi.cname, certi.cstatus) from Contact c JOIN c.certifications certi where c.cid=:id")
    public List<Certification> findCertificateByContactId(@Param("id") int id);

}
