package com.fanyu.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.fanyu.model.Blog;
import com.fanyu.model.Content;
import com.fanyu.service.IBlogService;
import com.fanyu.service.IContentService;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
        JSONObject blogJson = JSONObject.parseObject(blogInfo);
        JSONObject json = new JSONObject();
        Content content = new Content();
        content.setContent(blogJson.getString("content"));
        int contentFlag = this.contentService.insertContent(content);
        int i = 0;
        int blogId = 0;
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
            blogId = blog.getId();

        }
        if (i == 1) {
            json.put("addBlogState", "success");
            json.put("info", "成功");
            json.put("blogId", blogId);
            return json;
        } else {
            json.put("addBlogState", "fail");
            json.put("info", "失败");
            return json;
        }
    }

    @RequestMapping("/selectById")
    @ResponseBody
    public JSONObject selectById(HttpServletRequest request, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setCharacterEncoding("utf-8");
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        int blogId = Integer.parseInt(request.getParameter("blogId"));
        Blog blog = this.blogService.selectById(blogId);
        Content content = this.contentService.selectById(blog.getContentId());
        JSONObject json = new JSONObject();
        json.put("content", content.getContent());
        json.put("title", blog.getTitle());
        json.put("user", blog.getUser().getUsername());
        String dateString = formatter.format(blog.getModifydate());
        json.put("date", dateString);
        return json;
    }

    @RequestMapping("/selectByLimit")
    @ResponseBody
    public List<JSON> selectByLimit(HttpServletRequest request, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setCharacterEncoding("utf-8");
        String blogInfo = request.getParameter("blogInfo");
        JSONObject blogJson = JSONObject.parseObject(blogInfo);
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        List<JSON> list = new ArrayList<>();
        List<Blog> blog = this.blogService.selectByLimit(blogJson.getInteger("start"), blogJson.getInteger("end"), blogJson.getInteger("stateId"));
        for (Blog aBlog : blog) {
            JSONObject json = new JSONObject();
            json.put("title", aBlog.getTitle());
            json.put("user", aBlog.getUser().getUsername());
            String dateString = formatter.format(aBlog.getModifydate());
            json.put("date", dateString);
            json.put("read", aBlog.getReadcount());
            json.put("comment", aBlog.getComment());
            json.put("category", aBlog.getCategoryId());
            json.put("state", aBlog.getState().getState());
            json.put("blogId", aBlog.getId());
            list.add(json);

        }
        return list;
    }

    @RequestMapping("/test")
    @ResponseBody
    public void test() {
        List<Blog> blog = this.blogService.selectByLimit(0, 10, 2);
        System.out.println(blog.get(2).getUser().getUsername());
    }

}
