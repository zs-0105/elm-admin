<template>
  <div>
    <el-card style="margin: 20px 0">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="一级分类">
          <el-select
            :disabled="disabled"
            v-model="category1Id"
            placeholder="请选择"
            @change="handle1"
          >
            <el-option
              v-for="i in list1"
              :key="i.id"
              :label="i.name"
              :value="i.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级分类">
          <el-select
            :disabled="disabled"
            v-model="category2Id"
            placeholder="请选择"
            @change="handle2"
          >
            <el-option
              v-for="i in list2"
              :key="i.id"
              :label="i.name"
              :value="i.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="三级分类">
          <el-select
            :disabled="disabled"
            v-model="category3Id"
            placeholder="请选择"
            @change="handle3"
          >
            <el-option
              v-for="i in list3"
              :key="i.id"
              :label="i.name"
              :value="i.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "AttrSelect",
  data() {
    return {
      category1Id: "",
      category2Id: "",
      category3Id: "",
      list1: [],
      list2: [],
      list3: [],
    };
  },
  mounted() {
    this.getList1();
  },
  props: ["disabled"],
  methods: {
    async getList1() {
      const res = await this.$API.attr.getList1();
      if (res.code == 200) this.list1 = res.data;
    },
    async handle1() {
      // 清除数据
      this.category2Id = "";
      this.category3Id = "";
      this.list2 = [];
      this.list3 = [];
      this.$emit("categoryChange", { categoryId: this.category1Id, level: 1 });
      const res = await this.$API.attr.getList2(this.category1Id);
      if (res.code == 200) this.list2 = res.data;
    },
    async handle2() {
      // 清除数据
      this.category3Id = "";
      this.list3 = [];
      this.$emit("categoryChange", { categoryId: this.category2Id, level: 2 });
      const res = await this.$API.attr.getList3(this.category2Id);
      if (res.code == 200) this.list3 = res.data;
    },
    handle3() {
      this.$emit("categoryChange", { categoryId: this.category3Id, level: 3 });
    },
  },
};
</script>

<style>
</style>