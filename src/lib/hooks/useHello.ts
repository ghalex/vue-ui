import { ref } from 'vue'

export default () => {
  const name = ref('Name')
  return { name }
}