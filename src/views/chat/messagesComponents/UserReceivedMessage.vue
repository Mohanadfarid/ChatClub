<script lang="ts" setup>
//
</script>

<template>
  <div class="d-flex align-end mb-3" >
    <!-- user image  -->

    <div class="me-2">
      <img
        class="avatar rounded"
        width="70px"
        height="70px"
        src="https://picsum.photos/200/300"
        alt=""
      />
    </div>

    <!-- user message -->
    <div class="received-message-body bg-grey-lighten-3 pa-4 mb-2" style="max-width: 50%">
      <div class="text-primary">jasmin lowery</div>
      this is the receved message this is the receved message this is the
      receved message this is the receved message this is the receved message
      this is the receved message this is the receved message this is the
      receved message this is the receved message
      <div class="text-end text-grey mt-2">09:24</div>
    </div>
  </div>
</template>

<style>
.received-message-body {
  border-radius: 25px 25px 25px 0px;
}
</style>
