package com.nur.contact.entities;

import javax.persistence.*;
import java.util.List;

@Entity
public class Contact {
	
	@Id
	@GeneratedValue
	private int cid;
	private String name;
	@OneToMany(targetEntity = Certification.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "certi_fk", referencedColumnName = "cid")
	private List<Certification> certifications;

	public Contact() {
	}

	public Contact(int cid, String name, List<Certification> certifications) {
		this.cid = cid;
		this.name = name;
		this.certifications = certifications;
	}

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Certification> getCertifications() {
		return certifications;
	}

	public void setCertifications(List<Certification> certifications) {
		this.certifications = certifications;
	}
}
