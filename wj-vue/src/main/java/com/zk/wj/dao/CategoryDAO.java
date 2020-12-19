package com.zk.wj.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zk.wj.pojo.Category;

public interface CategoryDAO extends JpaRepository<Category, Integer> {

}
