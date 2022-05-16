package com.hcl.banking.repository;

import com.hcl.banking.entity.SavingsAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "savingsAccounts", path = "saving-account")
public interface SavingsAccountDao extends JpaRepository<SavingsAccount, Long> {

    SavingsAccount findByAccountNumber(int accountNumber);
}