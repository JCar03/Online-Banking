package com.hcl.banking.controller;

import com.hcl.banking.dto.PaymentInfo;
import com.hcl.banking.dto.Transaction;
import com.hcl.banking.dto.TransactionResponse;
import com.hcl.banking.service.AccountService;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/deposit")
public class DepositController {

    private AccountService accountService;

    public DepositController(AccountService accountService) {
        this.accountService = accountService;
    }

    @PostMapping("/transaction")
    public TransactionResponse placeTransaction(@RequestBody Transaction transaction) {

        TransactionResponse transactionResponse = accountService.deposit(transaction);

        return transactionResponse;
    }

    @PostMapping("/payment-intent")
    public ResponseEntity<String> createPaymentIntent(@RequestBody PaymentInfo paymentInfo) throws StripeException {
        PaymentIntent paymentIntent = accountService.createPaymentIntent(paymentInfo);
        String paymentStr = paymentIntent.toJson();
        return new ResponseEntity<>(paymentStr, HttpStatus.OK);
    }
}









