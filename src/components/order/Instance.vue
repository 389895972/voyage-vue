<template>
    <el-container>
        <div class="home-container">
            <div class="header">
                <img class="img" src="../../assets/images/logo.png" alt />
            </div>

        <div> 设备列表</div>
            <div>
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="设备名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="设备ID"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="设备型号">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="设备os">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="状态">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="配置">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <!--                     {{scope.row}}-->
                            <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row.id)">管理</el-button>
                            <el-button type="success" icon="el-icon-thumb" size="mini" @click="removeUserById(scope.row.id)">进入控制台</el-button>

                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </el-container>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }]
            }
        }
    }
</script>