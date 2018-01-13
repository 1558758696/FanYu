package com.fanyu.controller;


import com.alibaba.fastjson.JSONObject;
import com.fanyu.model.User;
import com.fanyu.service.IUserService;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/user")
public class UserController {
    @Resource
    private IUserService userService;

    @RequestMapping("/showUser")
    public String toIndex(HttpServletRequest request, Model model) {
        int userId = Integer.parseInt(request.getParameter("id"));
        User user = this.userService.getUserById(userId);
        model.addAttribute("user", user);
        return "showUser";
    }

    @RequestMapping("/register")
    @ResponseBody
    public JSONObject register(String userName, String passWord, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setCharacterEncoding("utf-8");
        User user = this.userService.getUserByUserName(userName);
        int i = 0;
        JSONObject json = new JSONObject();
        if (user == null) {
            User userNew = new User();
            userNew.setUsername(userName);
            userNew.setPassword(passWord);
            i = this.userService.insertUser(userNew);

        }

        if (i == 1) {
            json.put("registerState", "success");
            json.put("info", "注册成功");
            return json;
        } else {
            json.put("registerState", "fail");
            json.put("info", "注册失败");
            return json;
        }

    }

    @RequestMapping("/login")
    @ResponseBody
    public JSONObject login(HttpServletRequest request, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setCharacterEncoding("utf-8");
        String userName = request.getParameter("userName");
        String passWord = request.getParameter("passWord");
        JSONObject json = new JSONObject();
        User user = this.userService.getUserByUserName(userName);
        if (user == null) {
            json.put("loginState", "fail");
            json.put("info", "该用户不存在");
            return json;
        }
        if (passWord.equals(user.getPassword())) {
            json.put("loginState", "success");
            json.put("info", "登录成功");
            json.put("userId", user.getId());
            json.put("headPortrait", new String(user.getHeadportrait()));
            return json;
        } else {
            json.put("loginState", "fail");
            json.put("info", "密码错误");
            return json;
        }
    }

    @RequestMapping("/update")
    @ResponseBody
    public  JSONObject requestJson(HttpServletRequest request, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setCharacterEncoding("utf-8");
        String userInfo =request.getParameter("userInfo");
        JSONObject json = JSONObject.parseObject(userInfo);
        User user =new User();
        user.setId(Integer.parseInt(json.get("userId").toString()));
        user.setHeadportrait( json.get("userHeadPortrait").toString().getBytes());
        int i=this.userService.updateUser(user);
        JSONObject jsonRe = new JSONObject();
        if (i == 1) {
            jsonRe.put("updateState", "success");
            jsonRe.put("info", "更新成功");
            jsonRe.put("userHeadPortrait",new String(user.getHeadportrait()));
            return jsonRe;
        } else {
            jsonRe.put("updateState", "fail");
            jsonRe.put("info", "更新失败");
            return jsonRe;
        }
    }

}
