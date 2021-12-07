import { computed } from 'vue'

export default function useRepositoryNameSearch (repositories, text) {
  const repositoriesMatchingSearchQuery = computed(() => {
    return repositories.value.filter(
      repository => repository.name.includes(text.value)
    )
  })

  return {
    repositoriesMatchingSearchQuery
  }
}