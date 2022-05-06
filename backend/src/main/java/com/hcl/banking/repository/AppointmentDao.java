package com.hcl.banking.repository;

import com.hcl.banking.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "appointments", path = "appointments")
public interface AppointmentDao extends JpaRepository<Appointment, Long> {

    List<Appointment> findAll();
}