<script lang="ts" setup>
//
</script>

<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        :class="`ma-2 ms-0 ${isHovering ? 'bg-grey' : ''}`"
        variant="flat"
      >
        <template v-slot:prepend>
          <div>
            <img
              class="avatar rounded"
              width="70"
              height="70"
              src="https://picsum.photos/200/300"
              alt=""
            />
          </div>
        </template>

        <template v-slot:title>
          <div class="w-100 d-flex justify-space-between">
            <p>title</p>
            <div>
              <span class="text-subtitle-2 me-1">4m</span>
              <v-icon class="text-subtitle-1">mdi-check-all</v-icon>
            </div>

          </div>
        </template>

        <template v-slot:subtitle> This is a card subtitle </template>

        <template v-slot:text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          ratione debitis quis est labore voluptatibus!
        </template>
      </v-card>
    </template>
  </v-hover>
</template>

<style>
.avatar {
  background-position: center;
  background-size: cover;
}
</style>
