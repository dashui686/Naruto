package com.dashui.naruto.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.dashui.naruto.common.AjaxResult;
import com.dashui.naruto.common.TableDataInfo;
import com.dashui.naruto.domain.BlogsTags;
import com.dashui.naruto.service.BlogsTagsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;

/**
 * 博客标签表(BlogsTags)表控制层
 *
 * @author makejava
 * @since 2023-04-15 12:47:37
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("admin/blog/tag")
public class BlogsTagsController extends BaseController {
    /**
     * 服务对象
     */
    private final BlogsTagsService blogsTagsService;

    /**
     * 分页查询所有数据
     *
     * @param page 分页对象
     * @param blogsTags 查询实体
     * @return 所有数据
     */
    @GetMapping("list")
    public TableDataInfo selectAll(Page<BlogsTags> page, BlogsTags blogsTags) {
        return TableDataInfo.build(this.blogsTagsService.page(page, new QueryWrapper<>(blogsTags)));
    }

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("{id}")
    public AjaxResult selectOne(@PathVariable Serializable id) {
        return success(this.blogsTagsService.getById(id));
    }

    /**
     * 新增数据
     *
     * @param blogsTags 实体对象
     * @return 新增结果
     */
    @PostMapping
    public AjaxResult insert(@RequestBody BlogsTags blogsTags) {
        return toAjax(this.blogsTagsService.save(blogsTags));
    }

    /**
     * 修改数据
     *
     * @param blogsTags 实体对象
     * @return 修改结果
     */
    @PutMapping
    public AjaxResult update(@RequestBody BlogsTags blogsTags) {
        return toAjax(this.blogsTagsService.updateById(blogsTags));
    }

    /**
     * 删除数据
     *
     * @param id 主键结合
     * @return 删除结果
     */
    @DeleteMapping
    public AjaxResult delete(@RequestParam("id") Integer id) {
        return toAjax(this.blogsTagsService.removeById(id));
    }
}

