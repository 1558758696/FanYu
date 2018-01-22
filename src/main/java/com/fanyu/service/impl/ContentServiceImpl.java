package com.fanyu.service.impl;

import com.fanyu.mapper.ContentMapper;
import com.fanyu.model.Content;
import com.fanyu.service.IContentService;

import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("contentService")
public class ContentServiceImpl implements IContentService {
    @Resource
    private ContentMapper contentDao;

    @Override
    public int insertContent(Content content) {
        return this.contentDao.insertSelective(content);
    }

    @Override
    public Content selectById(Integer id) {
        return this.contentDao.selectByPrimaryKey(id);
    }
}
