package com.fanyu.service;

import com.fanyu.model.Content;

public interface  IContentService {
    public int insertContent(Content content);
    public  Content selectById(Integer  id);
}
