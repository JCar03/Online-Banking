package com.hcl.banking.controller;

import com.hcl.banking.dto.Transaction;
import com.hcl.banking.dto.TransactionResponse;
import com.hcl.banking.service.AccountService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserFrontController {

    private AccountService accountService;

    public UserFrontController(AccountService accountService) {
        this.accountService = accountService;
    }

    @PostMapping("/transaction")
    public TransactionResponse placeTransaction(@RequestBody Transaction transaction) {
        TransactionResponse transactionResponse = accountService.withdraw(transaction);
        return transactionResponse;
    }
}