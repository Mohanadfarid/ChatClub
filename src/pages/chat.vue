<script lang="ts" setup>
import SideBar from '@/views/chat/SideBar.vue';

  //
</script>


<template>

<VContainer>
  <div class="py-5" style="height: 100vh">
    <VRow class="h-100" style="border: 1px solid green;">
      <VCol cols="4">
        <SideBar/>
      </VCol>
      <VCol cols="8">main content</VCol>
    </VRow>
  </div>
</VContainer>
</template>

