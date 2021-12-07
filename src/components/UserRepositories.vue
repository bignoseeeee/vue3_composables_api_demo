<template>
  <span>
    <el-input type="text" v-model="text" />
    <el-button @click="onRefresh">刷新</el-button>
    <div>
      <div v-for="(item, index) in repositories" :key="index">
        {{ item.name }}
      </div>
    </div>
  </span>
</template>

<script>
// 组合式api
import { fetchUserRepositories } from '@/api/repositories'
import useUserRepositories from '@/composables/useUserRepositories'
import useRepositoryNameSearch from '@/composables/useRepositoryNameSearch'
import { onMounted, ref } from 'vue'
export default {
  setup () {
    const text = ref('')

    // 获取列表
    const { repositories, getUserRepositories } = useUserRepositories(text, fetchUserRepositories)

    // 搜索列表
    const {
      repositoriesMatchingSearchQuery
    } = useRepositoryNameSearch(repositories, text)

    onMounted(() => {
      getUserRepositories()
    })

    const onRefresh = () => {
      text.value = ''
    }



    return {
      text,
      repositories: repositoriesMatchingSearchQuery,
      getUserRepositories,
      onRefresh
    }
  },
  // template: `
  //   <span>
  //     <input type="text" v-model="text" />
  //     <el-button @click="onRefresh">刷新</el-button>
  //     <div>
  //       <div v-for="(item, index) in repositories" :key="index">
  //         {{ item.name }}
  //       </div>
  //     </div>
  //   </span>
  // `

}
</script>