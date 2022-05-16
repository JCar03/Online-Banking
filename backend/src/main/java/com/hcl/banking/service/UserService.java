package com.hcl.banking.service;

import com.hcl.banking.entity.User;

import java.util.List;


public interface UserService {

    User findByOktaId(String oktaId);

    boolean checkUserExists(String oktaId);

    boolean checkOktaIdExists(String oktaId);

    void createUser(User user);

}