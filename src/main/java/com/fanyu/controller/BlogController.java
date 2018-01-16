package com.fanyu.controller;

import com.alibaba.fastjson.JSONObject;
import com.fanyu.model.Blog;
import com.fanyu.model.Content;
import com.fanyu.service.IBlogService;
import com.fanyu.service.IContentService;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//博客控制类
@Controller
@RequestMapping("/blog")
public class BlogController {
    @Resource
    private IContentService contentService;
    @Resource
    private IBlogService blogService;

    @RequestMapping("/addBlog")
    @ResponseBody
    public JSONObject insertBlog(HttpServletRequest request, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setCharacterEncoding("utf-8");
        String blogInfo = request.getParameter("blogInfo");
        System.out.println("test");
        JSONObject blogJson = JSONObject.parseObject(blogInfo);
        JSONObject json = new JSONObject();
        Content content = new Content();
        content.setContent(blogJson.getString("content"));
        int contentFlag = this.contentService.insertContent(content);
        System.out.println(content.getId());
        int i=0;
        if (contentFlag == 1) {
            Blog blog = new Blog();
            blog.setUserId(blogJson.getInteger("userId"));
            blog.setCategoryId(blogJson.getInteger("categoryId"));
            blog.setStateId(blogJson.getInteger("stateId"));
            blog.setContentId(content.getId());
            blog.setTitle(blogJson.getString("title"));
            blog.setModifydate(new Date());
            blog.setReleasedate(new Date());
            i = this.blogService.insertToBlog(blog);
            System.out.println(i);

        }
        if (i == 1) {
            json.put("addBlogState", "success");
            json.put("info", "成功");
            return json;
        } else {
            json.put("addBlogState", "fail");
            json.put("info", "失败");
            return json;
        }
    }
}
