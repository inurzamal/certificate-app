package com.nur.contact.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Certification {

    @Id
    @GeneratedValue
    int idx;
    String cname;
    String cstatus;

    public Certification() {
    }

    public Certification(int idx, String cname, String cstatus) {
        this.idx = idx;
        this.cname = cname;
        this.cstatus = cstatus;
    }

    public int getIdx() {
        return idx;
    }

    public void setIdx(int idx) {
        this.idx = idx;
    }

    public String getCname() {
        return cname;
    }

    public void setCname(String cname) {
        this.cname = cname;
    }

    public String getCstatus() {
        return cstatus;
    }

    public void setCstatus(String cstatus) {
        this.cstatus = cstatus;
    }
}
