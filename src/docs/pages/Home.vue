<template>
  <HomeLayout>
    <div class="p-12 flex flex-col">
      <div class="border p-3 mb-2">
        <h3>Buttons</h3>
        <div class="grid grid-cols-5 gap-2">
          <ZbButton @click="() => console.log('clicked')">Default Buton</ZbButton>
          <ZbButton disabled>Disabled Button</ZbButton>
          <ZbButton class="primary">Primary Button</ZbButton>
          <ZbButton class="danger">danager Button</ZbButton>
        </div>
      </div>

      <div class="border p-3">
        <h3 class="">Checkbox</h3>
        <div class="grid grid-cols-5 gap-2">
          <label class="flex items-center mr-2">
            <ZbCheckbox />
            Checkobx 1
          </label>
          <label class="flex items-center mr-2">
            <ZbCheckbox class="primary" />
            Checkobx 2
          </label>
          <ZbCheckbox as="ZbButton">
            <template #default="{ checked }"> Checked: {{ checked }}</template>
          </ZbCheckbox>
        </div>
      </div>
      <!-- 
      <z-base as="z-button">Button</z-base>

      <label>
        <z-checkbox @change="(e) => console.log(e)" />
        Checkbox
      </label>
      <z-checkbox v-model="chk" as="z-button" @change="(e) => console.log(e)">
        <template #default="{ checked }"> asdf: {{ checked }}</template>
      </z-checkbox>
      <div role="radiogroup">
        <div>Radios:</div>
        <label>
          <z-radio
            value="apple"
            class="px-8 min200"
            :class="{ 'bg-blue-300': fruite === 'apple' }"
            v-model="fruite"
            as="z-button"
          >
            <template #default="{ checked }">{{ checked }}</template>
          </z-radio>
        </label>
        <label>
          <z-radio
            value="berry"
            class="px-8 min200"
            :class="{ 'bg-red-300': fruite === 'berry' }"
            v-model="fruite"
            as="z-button"
          >
            <template #default="{ checked }"> {{ checked }}</template>
          </z-radio>
        </label>
      </div> -->

      <!-- <div>
        <z-input :style="{ border: '1px solid red' }" />
      </div> -->
    </div>
  </HomeLayout>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { HomeLayout } from '@/docs/layouts'

export default defineComponent({
  components: { HomeLayout },
  setup() {
    const margin = { top: 0, right: 0, bottom: 0, left: 0 }
    const chk = ref(false)
    const fruite = ref('apple')

    watch(fruite, () => {
      console.log('fruite:', fruite.value)
    })

    return { margin, chk, fruite, console }
  }
})
</script>

<style lang="postcss">
.min200 {
  min-width: 200px;
}
</style>
