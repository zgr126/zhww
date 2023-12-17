<template>
    <el-upload
      ref="upload"
      v-model:file-list="fileList"
      class="upload-demo"
      action=""
      multiple
      :limit="30"
      :auto-upload="false"
    >
    <el-button type="primary" >Click to upload</el-button>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500KB.
        </div>
      </template>
    </el-upload>
    <el-button type="primary" @click="uploadFile">上传</el-button>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  
  import { UploadProps, UploadUserFile } from 'element-plus'
  import axios from 'axios'
  
  let fileList = ref([])
  const uploadFile = (e)=>{
    console.log(e)
    console.log(fileList)
    var bodyFormData = new FormData();
    bodyFormData.append('file',fileList.value[0].raw)
    axios.post('/goods',bodyFormData,{
        headers: { "Content-Type": "multipart/form-data" }
    })
  }

  </script>