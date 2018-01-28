package com.fanyu.mapper;

import com.fanyu.model.Blog;

import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BlogMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Blog record);

    int insertSelective(Blog record);

    Blog selectByPrimaryKey(Integer id);

    List<Blog> selectByLimit(@Param("offset") Integer offset, @Param("limit") Integer limit, @Param("stateId") int stateId);

    List<Blog> selectByUserId(@Param("userId") Integer userId, @Param("offset") Integer offset, @Param("limit") Integer limit);

    int updateByPrimaryKeySelective(Blog record);

    int updateByPrimaryKey(Blog record);

}