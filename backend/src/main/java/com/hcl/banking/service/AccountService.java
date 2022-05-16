package com.hcl.banking.service;

import com.hcl.banking.dto.PaymentInfo;
import com.hcl.banking.dto.Transaction;
import com.hcl.banking.dto.TransactionResponse;
import com.hcl.banking.entity.PrimaryAccount;
import com.hcl.banking.entity.SavingsAccount;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

import java.security.Principal;


public interface AccountService {

    PrimaryAccount createPrimaryAccount();

    SavingsAccount createSavingsAccount();

    TransactionResponse deposit(Transaction transaction);

    TransactionResponse withdraw(Transaction transaction);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;

}