package com.fanyu.controller;

import com.alibaba.fastjson.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/upload")
public class UploadController {

    @RequestMapping("/uploadImg")
    @ResponseBody
    public JSONObject upload(@RequestParam(value = "file", required = false) MultipartFile file, HttpServletRequest request, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setCharacterEncoding("utf-8");
        JSONObject json = new JSONObject();
        String fileName = new Date().getTime() + ".jpg";
        String imgPath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getServletContext().getContextPath() + "/upload/";
        String path = request.getServletContext().getRealPath("/") + "upload/";
        File targetFile = new File(path, fileName);
        if (!targetFile.exists()) {
            targetFile.mkdirs();
        }

        //保存
        try {
            file.transferTo(targetFile);
        } catch (Exception e) {
            e.printStackTrace();
            json.put("uploadState", "fail");
            json.put("info", e);
            return json;
        }

        json.put("uploadState", "success");
        json.put("path", imgPath + fileName);
        json.put("info", "成功");
        return json;
    }
}
