package com.fanyu.service.impl;


import com.fanyu.mapper.UserMapper;
import com.fanyu.model.User;
import com.fanyu.service.IUserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("userService")  
public class UserServiceImpl implements IUserService {
    @Resource
    private UserMapper userDao;

    @Override
    public User getUserById(int userId) {
        // TODO Auto-generated method stub  
        return this.userDao.selectByPrimaryKey(userId);
    }

    @Override
    public int insertUser(User user) {
        return this.userDao.insert(user);
    }

    @Override
    public User getUserByUserName(String userName) {
        return this.userDao.selectByUserName(userName);
    }

    @Override
    public int updateUser(User user) {
        return this.userDao.updateByPrimaryKeySelective(user);
    }
}