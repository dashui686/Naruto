<template>
    <div class="nav-menus" :class="configStore.layout.layoutMode">
        <router-link class="h100" target="_blank" title="首页" to="/">
            <div class="nav-menu-item">
                <Icon :color="configStore.getColorVal('headerBarTabColor')" class="nav-menu-icon" name="el-icon-Monitor" size="18" />
            </div>
        </router-link>
        
        <div @click="onFullScreen" class="nav-menu-item" :class="state.isFullScreen ? 'hover' : ''">
            <Icon
                :color="configStore.getColorVal('headerBarTabColor')"
                class="nav-menu-icon"
                v-if="state.isFullScreen"
                name="local-full-screen-cancel"
                size="18"
            />
            <Icon :color="configStore.getColorVal('headerBarTabColor')" class="nav-menu-icon" v-else name="el-icon-FullScreen" size="18" />
        </div>
        <!-- v-if="adminInfo.super" -->
        <el-dropdown
            @visible-change="onCurrentNavMenu($event, 'clear')"
            class="h100"
            size="large"
            :hide-timeout="50"
            placement="bottom"
            trigger="click"
            :hide-on-click="true"
        >
            <div class="nav-menu-item" :class="state.currentNavMenu == 'clear' ? 'hover' : ''">
                <Icon :color="configStore.getColorVal('headerBarTabColor')" class="nav-menu-icon" name="el-icon-Delete" size="18" />
            </div>
            <template #dropdown>
                <el-dropdown-menu class="dropdown-menu-box">
                    <el-dropdown-item @click="onClearCache('tp')">清理系统缓存</el-dropdown-item>
                    <el-dropdown-item @click="onClearCache('storage')">清理浏览器缓存</el-dropdown-item>
                    <el-dropdown-item @click="onClearCache('all')" divided>一键清理所有</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <el-popover
            @show="onCurrentNavMenu(true, 'adminInfo')"
            @hide="onCurrentNavMenu(false, 'adminInfo')"
            placement="bottom-end"
            :hide-after="0"
            :width="260"
            trigger="click"
            popper-class="admin-info-box"
        >
            <template #reference>
                <div class="admin-info" :class="state.currentNavMenu == 'adminInfo' ? 'hover' : ''">
                    <el-avatar :size="25" fit="fill">
                        <img :src="adminInfo.avatar" alt="" />
                    </el-avatar>
                    <div class="admin-name">{{ adminInfo.nickName }}</div>
                </div>
            </template>
            <div>
                <div class="admin-info-base">
                    <el-avatar :size="70" fit="fill">
                        <img :src="adminInfo.avatar" alt="" />
                    </el-avatar>
                    <div class="admin-info-other">
                        <div class="admin-info-name">{{ adminInfo.nickName }}</div>
                        <!-- <div class="admin-info-lasttime">{{ adminInfo.lastlogintime }}</div> -->
                    </div>
                </div>
                <div class="admin-info-footer">
                    <el-button @click="onAdminInfo" type="primary" plain>个人资料</el-button>
                    <el-button @click="onLogout" type="danger" plain>注销</el-button>
                </div>
            </div>
        </el-popover>
        <div @click="configStore.setLayout('showDrawer', true)" class="nav-menu-item">
            <Icon :color="configStore.getColorVal('headerBarTabColor')" class="nav-menu-icon" name="el-icon-Operation" size="18" />
        </div>
        <Config />
        <BLogAdd/>
   
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
// import { editDefaultLang } from '@/lang'
import screenfull from 'screenfull'
import { useConfig } from '@/stores/config'
import { ElMessage } from 'element-plus'
// import { useI18n } from 'vue-i18n'
import Config from './config.vue'
import BLogAdd from "@/views/backend/blog/blogs/profile/bLogAddView.vue"
import { useAdminInfo } from '@/stores/adminInfo'
import { Local, Session } from '@/utils/storage'
import { ADMIN_INFO, BA_ACCOUNT } from '@/stores/constant/cacheKey'
import router from '@/router'
import { routePush } from '@/utils/router'
import { logout } from '@/api/backend/index'
import { postClearCache } from '@/api/common'


// const { t } = useI18n()

const adminInfo = useAdminInfo()
const configStore = useConfig()


const state = reactive({
    isFullScreen: false,
    currentNavMenu: '',
    showLayoutDrawer: false,
})

const onCurrentNavMenu = (status: boolean, name: string) => {
    state.currentNavMenu = status ? name : ''
}

const onFullScreen = () => {
    if (!screenfull.isEnabled) {
        ElMessage.warning('您的浏览器不支持全屏，请更换浏览器再试~')
        return false
    }
    screenfull.toggle()
    screenfull.onchange(() => {
        state.isFullScreen = screenfull.isFullscreen
    })
}

const onAdminInfo = () => {
    routePush({ name: 'routine/adminInfo' })
}

const onLogout = () => {
    logout().then(() => {
        Local.remove(ADMIN_INFO)
        router.go(0)
    })
}

const onClearCache = (type: string) => {
    if (type == 'storage' || type == 'all') {
        const adminInfo = Local.get(ADMIN_INFO)
        const baAccount = Local.get(BA_ACCOUNT)
        Session.clear()
        Local.clear()
        Local.set(ADMIN_INFO, adminInfo)
        Local.set(BA_ACCOUNT, baAccount)
        if (type == 'storage') return
    }
    postClearCache(type).then(() => {})
}
</script>

<style scoped lang="scss">
.nav-menus.Default {
    border-radius: var(--el-border-radius-base);
    box-shadow: var(--el-box-shadow-light);
}
.nav-menus {
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: auto;
    background-color: v-bind('configStore.getColorVal("headerBarBackground")');
    overflow: hidden;
    .nav-menu-item {
        height: 100%;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .nav-menu-icon {
            box-sizing: content-box;
            color: v-bind('configStore.getColorVal("headerBarTabColor")');
        }
        &:hover {
            .icon {
                animation: twinkle 0.3s ease-in-out;
            }
        }
    }
    .admin-info {
        display: flex;
        height: 100%;
        padding: 0 10px;
        align-items: center;
        cursor: pointer;
        user-select: none;
        color: v-bind('configStore.getColorVal("headerBarTabColor")');
    }
    .admin-name {
        padding-left: 6px;
        white-space: nowrap;
    }
    .nav-menu-item:hover,
    .admin-info:hover,
    .nav-menu-item.hover,
    .admin-info.hover {
        background: v-bind('configStore.getColorVal("headerBarHoverBackground")');
    }
}
.dropdown-menu-box :deep(.el-dropdown-menu__item) {
    justify-content: center;
}
.admin-info-base {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 10px;
    .admin-info-other {
        display: block;
        width: 100%;
        text-align: center;
        padding: 10px 0;
        .admin-info-name {
            font-size: var(--el-font-size-large);
        }
    }
}
.admin-info-footer {
    padding: 10px 0;
    margin: 0 -12px -12px -12px;
    display: flex;
    justify-content: space-around;
}
.pt2 {
    padding-top: 2px;
}

@keyframes twinkle {
    0% {
        transform: scale(0);
    }
    80% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}
</style>
