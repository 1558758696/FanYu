package com.fanyu.service.impl;

import com.fanyu.mapper.BlogMapper;
import com.fanyu.model.Blog;
import com.fanyu.service.IBlogService;

import org.springframework.stereotype.Service;;

import javax.annotation.Resource;


@Service("blogService")
public class BlogServiceImpl implements IBlogService{
    @Resource
    private BlogMapper blogDao;

    @Override
    public int insertToBlog(Blog blog) {
        return this.blogDao.insertSelective(blog);
    }
}
