<template>
  <el-container>
    <div class="home-container">
      <el-button type="primary" @click="test">GETDATA</el-button> 


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

    };
  },
  methods: {
    test() {
      var res = {
        flag: true,
        code: 20000,
        message: "查询成功",
        data: [
          {
            id: 1,
            goods_id: null,
            title: "Thundercomm TurboX AI Kit",
            price: 100.0,
            num: 5,
            image: "sssss",
            status: "1",
            create_time: null,
            update_time: null,
            category: "aikit",
            brand: "创达",
            spec: [
              { attributeName: "linux", attributeValue: "ubuntu 16.04" },
              { attributeName: "颜色", attributeValue: "蓝色" }
            ]
          },
          {
            id: 2,
            goods_id: null,
            title: "Thundercomm TurboX AI Kit",
            price: 100.0,
            num: 5,
            image: "ssss",
            status: "1",
            create_time: null,
            update_time: null,
            category: "aikit",
            brand: "创达",
            spec: [
              { attributeName: "android", attributeValue: "androidO" },
              { attributeName: "颜色", attributeValue: "蓝色" }
            ]
          },
          {
            id: 3,
            goods_id: null,
            title: "Thundercomm TurboX AI Kit",
            price: 100.0,
            num: 5,
            image: "ssss",
            status: "1",
            create_time: null,
            update_time: null,
            category: "aikit",
            brand: "创达",
            spec: [
              { attributeName: "linux", attributeValue: "ubuntu 18.04" },
              { attributeName: "颜色", attributeValue: "蓝色" }
            ]
          },
          {
            id: 4,
            goods_id: null,
            title: "Thundercomm TurboX AI Kit",
            price: 100.0,
            num: 5,
            image: "sssss",
            status: "1",
            create_time: null,
            update_time: null,
            category: "aikit",
            brand: "创达",
            spec: [
              { attributeName: "windows", attributeValue: "windows 10" },
              { attributeName: "颜色", attributeValue: "蓝色" }
            ]
          }
        ]
      };

      var d = res.data;
      for (var i in d) {
        var spec = d[i].spec;
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
    }
  },

  computed: {
    //   oss(){
    //       return Object.keys(this.os_specs)
    //   }
  },
  watch:{
      current_os(){
          this.current_os_version = '';
          
        //   this.current_os_version = this.os_specs[this.current_os][0];
      }
  }
};
</script>