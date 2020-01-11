<template>
    <div>
        <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
            <span class="lang">
                <i class="iconfont" :class="lang==='zh'?'el-icon-eleme':'el-icon-delete'"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="zh" :disabled="lang==='zh'">中文</el-dropdown-item>
                <el-dropdown-item command="en" :disabled="lang==='en'">English</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        computed:{
            lang(){
               // return this.$store.getters.language
                return {};
            }
        },
        created(){

        },
        methods:{
            handleSetLanguage(lang){
                this.$i18n.locale=lang
                this.$store.commit('set_language',lang)
                this.$message.success('switch language success')
            }
        }

    }
</script>