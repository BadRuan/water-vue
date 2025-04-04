import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { RecentlyWaterInter } from '@/model'
import { getRecently } from '@/api/recently'


export const useRecentlyStore = defineStore('recently', () => {
    const recently_data = reactive<RecentlyWaterInter[]>([])
    const get_recently = async () => {
        let data = await getRecently()
        recently_data.splice(0, recently_data.length, ...data)
        
    }
    return { recently_data, get_recently }
}) 