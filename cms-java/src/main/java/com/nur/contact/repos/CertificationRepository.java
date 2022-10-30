package com.nur.contact.repos;

import com.nur.contact.dto.CertiDto;
import com.nur.contact.entities.Certification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CertificationRepository extends JpaRepository<Certification, Integer> {

}
