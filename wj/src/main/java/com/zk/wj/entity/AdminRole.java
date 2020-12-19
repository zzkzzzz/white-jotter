package com.zk.wj.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "admin_role")
@JsonIgnoreProperties({"handler", "hibernateLazyInitializer"})
public class AdminRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    /**
     * Role name.
     */
    private String name;
    /**
     * Role name in Chinese.
     */
    @Column(name = "name_zh")
    private String nameZh;
    /**
     * Role status.
     */
    private boolean enabled;
    /**
     * Transient property for storing permissions owned by current role.
     */
    @Transient
    private List<AdminPermission> perms;
    /**
     * Transient property for storing menus owned by current role.
     */
    @Transient
    private List<AdminMenu> menus;


    public AdminRole() {
    }

    public AdminRole(int id, String name, String nameZh, boolean enabled, List<AdminPermission> perms, List<AdminMenu> menus) {
        this.id = id;
        this.name = name;
        this.nameZh = nameZh;
        this.enabled = enabled;
        this.perms = perms;
        this.menus = menus;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNameZh() {
        return nameZh;
    }

    public void setNameZh(String nameZh) {
        this.nameZh = nameZh;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public List<AdminPermission> getPerms() {
        return perms;
    }

    public void setPerms(List<AdminPermission> perms) {
        this.perms = perms;
    }

    public List<AdminMenu> getMenus() {
        return menus;
    }

    public void setMenus(List<AdminMenu> menus) {
        this.menus = menus;
    }

    @Override
    public String toString() {
        return "AdminRole{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", nameZh='" + nameZh + '\'' +
                ", enabled=" + enabled +
                ", perms=" + perms +
                ", menus=" + menus +
                '}';
    }
}
