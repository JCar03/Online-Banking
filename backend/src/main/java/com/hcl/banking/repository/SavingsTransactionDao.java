package com.hcl.banking.repository;

import com.hcl.banking.entity.SavingsTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "savingsTransactions", path = "saving-transactions")
public interface SavingsTransactionDao extends JpaRepository<SavingsTransaction, Long> {
    List<SavingsTransaction> findAll();
}