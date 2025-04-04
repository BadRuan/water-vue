import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { getCount } from '@/api/count.ts'
import type { CountInter } from '@/model'


export const useCountStore = defineStore('count', () => {
    const count = reactive<CountInter>({
        total_count: 0,
        thisyear_count: 0,
        visits: 0,
        downloads: 0
    })

    const loadData = async () => {
        const count_source = await getCount()
        count.total_count = count_source.total_count
        count.thisyear_count = count_source.this_year_count
        count.visits = count_source.visit_count
        count.downloads = count_source.download_count
    }

    return {
        count, loadData
    }
})
