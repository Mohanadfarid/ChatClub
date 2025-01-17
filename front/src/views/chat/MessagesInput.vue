<script lang="ts" setup>
//
</script>

<template>
  <v-text-field
    clearable
    rounded="lg"
    label="Your Message"
    variant="outlined"
  >
    <template v-slot:append-inner>
      <v-icon icon="mdi-send-outline"></v-icon>
    </template>

    <template v-slot:prepend-inner>
      <v-icon icon="mdi-attachment"></v-icon>
    </template>
  </v-text-field>
</template>
