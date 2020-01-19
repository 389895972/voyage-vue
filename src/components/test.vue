<template>
  <el-container>
    <div class="home-container">

      <div>
        <div class="configure">
          <span class="configure_title">操作系统</span>
          <span class="configure_os">
            <el-select v-model="current_os" placeholder="请选择">
              <el-option
                v-for="item in oss"
                :key="item"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </span>
         
        <el-select v-model="current_os_version" placeholder="请选择">
            <el-option
                v-for="item in os_specs[current_os]"
                :key="item"
                :label="item"
                :value="item"
             ></el-option>
        </el-select>
        
        </div>
      </div>


      
    </div>
  </el-container>

</template>
<script>
export default {
  data() {
    return {
      os_specs: {},
      oss:[],
      current_os:'',
      current_os_version:'',
      tableData:[],

    };
  },
  methods: {
  },

  computed: {

  },
  watch:{
      current_os(){
          this.current_os_version = '';
          
        //   this.current_os_version = this.os_specs[this.current_os][0];
      }
  },
  mounted(){
    this.$http
            .get('/order/findOrders',{params:{ userId:1}})
            .then(function(res){
                this.tableData = res.data;
                for (var i in this.tableData) {
                    var spec = this.tableData[i].spec;
                    let spec_attr_name = spec[0].attributeName;
                    let spec_attr_val = spec[0].attributeValue;
                    if (spec_attr_name && spec_attr_val) {
                    if (this.os_specs[spec_attr_name] == undefined) {
                        this.os_specs[spec_attr_name] = [spec_attr_val];
                    } else {
                        if (this.os_specs[spec_attr_name].indexOf(spec_attr_val) == -1) {
                        this.os_specs[spec_attr_name].push(spec_attr_val);
                        }
                    }
                    }
                }

                this.oss = Object.keys(this.os_specs)
            })
            .catch(function(error){
                window.console.log(error);
            });
 

  }
};
</script>