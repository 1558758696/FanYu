package com.fanyu.service;

import com.fanyu.model.Blog;

import java.util.List;

public interface IBlogService {
    public int insertToBlog(Blog blog);

    public Blog selectById(Integer id);

    public List<Blog> selectByLimit(Integer start, Integer end, Integer stateId);

    public List<Blog> selectByUserId(Integer userId, Integer start, Integer end);

}
