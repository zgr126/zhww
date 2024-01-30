<template>
  <el-upload ref="upload" list-type="picture" v-model:file-list="fileList" class="upload-demo" action="" multiple
    :limit="30" :auto-upload="false">
    <el-button type="primary">选择文件</el-button>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png 文件小于 500KB.
      </div>
    </template>
  </el-upload>
  <el-button type="primary" @click="uploadFile" :disabled="isUpload">{{ isUpload ? '上传中' : '上传' }}</el-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

import { UploadProps, UploadUserFile } from 'element-plus'
import axios from 'axios'
const emit = defineEmits(["uploadOk"]);
const doSth = () => {
  //子组件用emit向父组件触发一个事件
  emit('uploadOk');
}
let fileList = ref([])
let isUpload = false
const uploadFile = (e) => {
  console.log(e)
  console.log(fileList)
  let promiseLst = []
  isUpload = true
  for (let i = 0; i < fileList.value.length; i++) {
    var bodyFormData = new FormData();
    bodyFormData.append('file', fileList.value[i].raw)
    let post = axios.post('/upload', bodyFormData, {
      headers: { "Content-Type": "multipart/form-data" }
    })
    promiseLst.push(post)
  }
  Promise.all(promiseLst).then(e => {
    console.log('ok')
    console.log(e)
    isUpload = false
    fileList.value = []
    doSth()
  }).catch(e => {
    console.log(e)
    isUpload = false
  })
}

</script>