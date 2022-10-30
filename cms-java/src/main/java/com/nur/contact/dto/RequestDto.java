package com.nur.contact.dto;

import com.nur.contact.entities.Contact;

public class RequestDto {

    private Contact contact;

    public Contact getContact() {
        return contact;
    }

    public void setContact(Contact contact) {
        this.contact = contact;
    }
}
