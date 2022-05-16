package com.hcl.banking.dto;

import lombok.Data;

import java.security.Principal;

@Data
public class Transaction {

    private String accountType;
    private double amount;
    private Principal principal;

}
