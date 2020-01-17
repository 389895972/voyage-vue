<template>
    <div >
        <span  class="configure_os">
            <el-select v-model="oss" placeholder="请选择">
                            <el-option  v-for="item in spec"  :key="item.id"  :label="item.attributeName"
                                        :value="item.attributeName">
                            </el-option>
                        </el-select>
                        </span>
    </div>
</template>
<script>
   export default {
       data() {
           return {
               os_specs:[],
               data:[ { "id": 1, "goods_id": null, "title": "Thundercomm TurboX AI Kit", "price": 100, "num": 5, "image": "sssss", "status": "1", "create_time": null, "update_time": null, "category": "aikit", "brand": "创达", "spec": "[{\"attributeName\":\"linux\",\"attributeValue\":\"ubuntu 16.04\"},{\"attributeName\":\"颜色\",\"attributeValue\":\"蓝色\"}]" }, { "id": 2, "goods_id": null, "title": "Thundercomm TurboX AI Kit", "price": 100, "num": 5, "image": "ssss", "status": "1", "create_time": null, "update_time": null, "category": "aikit", "brand": "创达", "spec": "[{\"attributeName\":\"android\",\"attributeValue\":\"android O\"},{\"attributeName\":\"颜色\",\"attributeValue\":\"蓝色\"}]" } ] [{"attributeName":"linux","attributeValue":"ubuntu 16.04"},{"attributeName":"颜色","attributeValue":"蓝色"}],

           }
       }
   }
</script>