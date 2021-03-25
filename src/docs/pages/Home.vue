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
            <ZbCheckbox class="small" />
            Checkobx Small
          </label>
          <label class="flex items-center mr-2">
            <ZbCheckbox :modelValue="chk" @change="() => console.log('change')" />
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

      <div class="border p-3">
        <h3 class="">Radios</h3>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="flex items-center mr-2 mb-2">
              <ZbRadio value="r1" name="r" />
              Radio 1
            </label>
            <label class="flex items-center mr-2 mb-2">
              <ZbRadio class="primary small" value="r2" name="r" />
              Radio 2
            </label>
            <label class="flex items-center mr-2">
              <ZbRadio class="danger" value="r2" name="r" />
              Radio 2
            </label>
          </div>
          <div class="">
            <label>
              <ZbRadio
                value="apple"
                class="px-8 min200 rounded-r-none"
                :class="{ 'bg-blue-300': fruite === 'apple' }"
                v-model="fruite"
                as="ZbButton"
              >
                A
              </ZbRadio>
            </label>
            <label>
              <ZbRadio
                value="berry"
                class="px-8 min200 rounded-l-none"
                :class="{ 'bg-red-300': fruite === 'berry' }"
                v-model="fruite"
                as="ZbButton"
              >
                B
              </ZbRadio>
            </label>
          </div>
        </div>
      </div>
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
    const chk = ref(true)
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
