package com.hcl.banking.controller;

import com.hcl.banking.dto.PaymentInfo;
import com.hcl.banking.dto.Transaction;
import com.hcl.banking.dto.TransactionResponse;
import com.hcl.banking.service.AccountService;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/withdraw")
public class WithdrawalController {

    private AccountService accountService;

    public WithdrawalController(AccountService accountService) {
        this.accountService = accountService;
    }

    @PostMapping("/transaction")
    public TransactionResponse placeTransaction(@RequestBody Transaction transaction) {
        TransactionResponse transactionResponse = accountService.withdraw(transaction);
        return transactionResponse;
    }
}