<template>
    <el-button @click="test">test</el-button>
</template>
<script>
    export default {
        data(){
            return{
                tableData:[{"id":1,"name":"xiaoming","sex":"male","adress":"beijing"},{"id":1,"name":"xiaoming","sex":"male","adress":"beijing"},{"id":1,"name":"xiaoming","sex":"male","adress":"beijing"}],
                list: [[1,"xiaoming","male","beijing"],[1,"xiaoming","male","beijing"],[1,"xiaoming","male","beijing"]],
                listLoading: true,
                filename: 'excel_personal_order',
                autoWidth: true,
                bookType: 'xlsx'
            }
        },
        methods:{
            test(){
                require.ensure([], () => {
                    const { export_json_to_excel } = require('../ventor/Export2Excel.js');
                    const tHeader = Object.keys(this.tableData[0])
                    const data = this.list
                    // const data = this.formatJson(filterVal, list)
                    export_json_to_excel({
                        header: tHeader,
                        data,
                        filename: this.filename,
                        autoWidth: this.autoWidth,
                        bookType: this.bookType
                    })
                })
            }
        }
    }
</script>
