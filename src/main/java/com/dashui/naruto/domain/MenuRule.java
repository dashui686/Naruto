package com.dashui.naruto.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.time.LocalDateTime;
import lombok.Data;

/**
 * 
 * @TableName menu_rule
 */
@TableName(value ="menu_rule")
@Data
public class MenuRule implements Serializable {
    /**
     * ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /**
     * 上级菜单
     */
    @TableField(value = "pid")
    private String pid;

    /**
     * 类型:
menu_dir=菜单目录,
menu=菜单项,
button=页面按钮
     */
    @TableField(value = "type")
    private String type;

    /**
     * 标题
     */
    @TableField(value = "title")
    private String title;

    /**
     * 规则名
     */
    @TableField(value = "name")
    private String name;

    /**
     * 路由路径
     */
    @TableField(value = "path")
    private String path;

    /**
     * 图标
     */
    @TableField(value = "icon")
    private String icon;

    /**
     * 菜单类型:
tab=选项卡,
link=链接,
iframe=Iframe
     */
    @TableField(value = "menu_type")
    private String menuType;

    /**
     * url
     */
    @TableField(value = "url")
    private String url;

    /**
     * 组件路径
     */
    @TableField(value = "component")
    private String component;

    /**
     * 缓存:
0=关闭,
1=开启
     */
    @TableField(value = "keepalive")
    private String keepalive;

    /**
     * 备注
     */
    @TableField(value = "remark")
    private String remark;

    /**
     * 排序
     */
    @TableField(value = "sort")
    private String sort;

    /**
     * 状态:
0=禁用,
1=启用
     */
    @TableField(value = "status")
    private String status;

    /**
     * 是否显示:
0=隐藏
1=显示
     */
    @TableField(value = "display")
    private String display;

    /**
     * 更新时间
     */
    @TableField(value = "update_time")
    private LocalDateTime updateTime;

    /**
     * 创建时间
     */
    @TableField(value = "create_time")
    private LocalDateTime createTime;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        MenuRule other = (MenuRule) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getPid() == null ? other.getPid() == null : this.getPid().equals(other.getPid()))
            && (this.getType() == null ? other.getType() == null : this.getType().equals(other.getType()))
            && (this.getTitle() == null ? other.getTitle() == null : this.getTitle().equals(other.getTitle()))
            && (this.getName() == null ? other.getName() == null : this.getName().equals(other.getName()))
            && (this.getPath() == null ? other.getPath() == null : this.getPath().equals(other.getPath()))
            && (this.getIcon() == null ? other.getIcon() == null : this.getIcon().equals(other.getIcon()))
            && (this.getMenuType() == null ? other.getMenuType() == null : this.getMenuType().equals(other.getMenuType()))
            && (this.getUrl() == null ? other.getUrl() == null : this.getUrl().equals(other.getUrl()))
            && (this.getComponent() == null ? other.getComponent() == null : this.getComponent().equals(other.getComponent()))
            && (this.getKeepalive() == null ? other.getKeepalive() == null : this.getKeepalive().equals(other.getKeepalive()))
            && (this.getRemark() == null ? other.getRemark() == null : this.getRemark().equals(other.getRemark()))
            && (this.getSort() == null ? other.getSort() == null : this.getSort().equals(other.getSort()))
            && (this.getStatus() == null ? other.getStatus() == null : this.getStatus().equals(other.getStatus()))
            && (this.getDisplay() == null ? other.getDisplay() == null : this.getDisplay().equals(other.getDisplay()))
            && (this.getUpdateTime() == null ? other.getUpdateTime() == null : this.getUpdateTime().equals(other.getUpdateTime()))
            && (this.getCreateTime() == null ? other.getCreateTime() == null : this.getCreateTime().equals(other.getCreateTime()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getPid() == null) ? 0 : getPid().hashCode());
        result = prime * result + ((getType() == null) ? 0 : getType().hashCode());
        result = prime * result + ((getTitle() == null) ? 0 : getTitle().hashCode());
        result = prime * result + ((getName() == null) ? 0 : getName().hashCode());
        result = prime * result + ((getPath() == null) ? 0 : getPath().hashCode());
        result = prime * result + ((getIcon() == null) ? 0 : getIcon().hashCode());
        result = prime * result + ((getMenuType() == null) ? 0 : getMenuType().hashCode());
        result = prime * result + ((getUrl() == null) ? 0 : getUrl().hashCode());
        result = prime * result + ((getComponent() == null) ? 0 : getComponent().hashCode());
        result = prime * result + ((getKeepalive() == null) ? 0 : getKeepalive().hashCode());
        result = prime * result + ((getRemark() == null) ? 0 : getRemark().hashCode());
        result = prime * result + ((getSort() == null) ? 0 : getSort().hashCode());
        result = prime * result + ((getStatus() == null) ? 0 : getStatus().hashCode());
        result = prime * result + ((getDisplay() == null) ? 0 : getDisplay().hashCode());
        result = prime * result + ((getUpdateTime() == null) ? 0 : getUpdateTime().hashCode());
        result = prime * result + ((getCreateTime() == null) ? 0 : getCreateTime().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", pid=").append(pid);
        sb.append(", type=").append(type);
        sb.append(", title=").append(title);
        sb.append(", name=").append(name);
        sb.append(", path=").append(path);
        sb.append(", icon=").append(icon);
        sb.append(", menuType=").append(menuType);
        sb.append(", url=").append(url);
        sb.append(", component=").append(component);
        sb.append(", keepalive=").append(keepalive);
        sb.append(", remark=").append(remark);
        sb.append(", sort=").append(sort);
        sb.append(", status=").append(status);
        sb.append(", display=").append(display);
        sb.append(", updateTime=").append(updateTime);
        sb.append(", createTime=").append(createTime);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}