package com.dashui.naruto.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dashui.naruto.domain.UserGroup;
import com.dashui.naruto.service.UserGroupService;
import com.dashui.naruto.mapper.UserGroupMapper;
import org.springframework.stereotype.Service;

/**
* @author 13276
* @description 针对表【user_group(会员组表)】的数据库操作Service实现
* @createDate 2023-03-20 16:18:28
*/
@Service
public class UserGroupServiceImpl extends ServiceImpl<UserGroupMapper, UserGroup>
    implements UserGroupService{

}




