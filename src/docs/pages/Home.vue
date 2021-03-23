<template>
  <HomeLayout>
    <div>asdasd</div>
  </HomeLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { HomeLayout } from '@/docs/layouts'

export default defineComponent({
  components: { HomeLayout },
  setup() {
    const margin = { top: 0, right: 0, bottom: 0, left: 0 }

    return { margin }
  }
})
</script>

<style></style>
