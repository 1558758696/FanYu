package com.fanyu.service.impl;

import com.fanyu.mapper.BlogMapper;
import com.fanyu.model.Blog;
import com.fanyu.service.IBlogService;

import org.springframework.stereotype.Service;;

import java.util.List;

import javax.annotation.Resource;


@Service("blogService")
public class BlogServiceImpl implements IBlogService {
    @Resource
    private BlogMapper blogDao;

    @Override
    public int insertToBlog(Blog blog) {
        return this.blogDao.insertSelective(blog);
    }

    @Override
    public Blog selectById(Integer id) {
        return this.blogDao.selectByPrimaryKey(id);
    }

    @Override
    public List<Blog> selectByLimit(Integer start, Integer end) {
        return this.blogDao.selectByLimit(start, end);
    }

    @Override
    public List<Blog> selectByUserId(Integer userId, Integer start, Integer end) {
        return this.blogDao.selectByUserId(userId, start, end);
    }
}
