package com.fanyu.service;

import com.fanyu.model.User;

public interface IUserService {
    public User getUserById(int userId);
    public int insertUser(User user);
    public User getUserByUserName(String userName);
    public int updateUser(User user);
}