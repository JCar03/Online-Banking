package com.hcl.banking.service.implementations;

import com.hcl.banking.entity.User;
import com.hcl.banking.repository.UserDao;
import com.hcl.banking.service.AccountService;
import com.hcl.banking.service.UserService;
import com.stripe.Stripe;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Service
public class UserServiceImpl implements UserService {

    private static final Logger LOG = LoggerFactory.getLogger(UserService.class);

    private UserDao userDao;

    public UserServiceImpl(UserDao userDao) {
        this.userDao = userDao;
    }

    @Autowired
    private AccountService accountService;

    @Override
    public User findByOktaId(String oktaId) {
        System.out.println("test " + oktaId);
        if(!this.checkUserExists(oktaId)) {
            User user = new User();
            user.setOktaId(oktaId);;
            this.createUser(user);
        }
        return userDao.findByOktaId(oktaId);
    }

    @Override
    @Transactional
    public void createUser(User user) {
        user.setPrimaryAccount(accountService.createPrimaryAccount());
        user.setSavingsAccount(accountService.createSavingsAccount());
        userDao.save(user);
    }

    @Override
    public boolean checkUserExists(String oktaId) {
        return checkOktaIdExists(oktaId);
    }

    @Override
    public boolean checkOktaIdExists(String oktaId) {
        return null != findByOktaId(oktaId);
    }

}