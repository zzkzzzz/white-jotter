<template>
  <div>
    <em
      class="el-icon-circle-plus-outline"
      @click="dialogFormVisible = true"
    ></em>
    <el-dialog title="Add/Edit Book" v-model="dialogFormVisible" @close="clear">
      <el-form v-model="form" style="text-align: left" ref="dataForm">
        <el-form-item
          label="Book Title"
          :label-width="formLabelWidth"
          prop="title"
        >
          <el-input
            v-model="form.title"
            autocomplete="off"
            placeholder="without《》"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Author"
          :label-width="formLabelWidth"
          prop="author"
        >
          <el-input v-model="form.author" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="Publication Date"
          :label-width="formLabelWidth"
          prop="date"
        >
          <el-input v-model="form.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="Publisher"
          :label-width="formLabelWidth"
          prop="press"
        >
          <el-input v-model="form.press" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Cover" :label-width="formLabelWidth" prop="cover">
          <el-input
            v-model="form.cover"
            autocomplete="off"
            placeholder="image URL"
          ></el-input>
          <img-upload @onUpload="uploadImg" ref="imgUpload"></img-upload>
        </el-form-item>
        <el-form-item
          label="Introduction"
          :label-width="formLabelWidth"
          prop="abs"
        >
          <el-input
            type="textarea"
            v-model="form.abs"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Category" :label-width="formLabelWidth" prop="cid">
          <el-select v-model="form.category.id" placeholder="Choose Category">
            <el-option label="Arts" value="1"></el-option>
            <el-option label="Fashion" value="2"></el-option>
            <el-option label="Culture" value="3"></el-option>
            <el-option label="Life" value="4"></el-option>
            <el-option label="Management" value="5"></el-option>
            <el-option label="Technology" value="6"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="id" style="height: 0">
          <el-input
            type="hidden"
            v-model="form.id"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <slot name="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="onSubmit">Confirm</el-button>
      </slot>
    </el-dialog>
  </div>
</template>

<script>
import ImgUpload from "./ImgUpload";

export default {
  name: "EditForm",
  components: { ImgUpload },
  data() {
    return {
      dialogFormVisible: false,
      form: {
        id: "",
        title: "",
        author: "",
        date: "",
        press: "",
        cover: "",
        abs: "",
        category: {
          id: "",
          name: "",
        },
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    clear() {
      this.form = {
        id: "",
        title: "",
        author: "",
        date: "",
        press: "",
        cover: "",
        abs: "",
        category: {},
      };
      this.$refs.imgUpload.$refs.upload.clearFiles();
    },

    onSubmit() {
      this.$axios
        .post("/books", {
          id: this.form.id,
          cover: this.form.cover,
          title: this.form.title,
          author: this.form.author,
          date: this.form.date,
          press: this.form.press,
          abs: this.form.abs,
          category: this.form.category,
        })
        .then((resp) => {
          if (resp && resp.status === 200) {
            this.dialogFormVisible = false;
            this.$emit("onSubmit");
          }
        });
    },

    uploadImg() {
      this.form.cover = this.$refs.imgUpload.url;
    },
  },
};
</script>

<style scoped>
.el-icon-circle-plus-outline {
  margin: 50px 0 0 20px;
  font-size: 100px;
  float: left;
  cursor: pointer;
}
</style>
