// import { fetchUserRepositories } from '@/api/repositories'
import { ref, onMounted, watch } from 'vue'

export default function useUserRepositories (text, fetchUserRepositories) {
  const repositories = ref([])
  const getUserRepositories = async () => {
    repositories.value = await fetchUserRepositories()
  }

  onMounted(getUserRepositories)
  watch(text, getUserRepositories)

  return {
    repositories,
    getUserRepositories
  }
}