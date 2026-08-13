<script setup lang="ts">
import { ref } from 'vue'
import Deciaml from 'decimal.js'

interface Water {
    name: string
    today: number
    yesterday: number
    date: string
}

const min = (a: number, b: number) => {
    return new Deciaml(a).minus(b).toNumber()
}

const water_list = ref<Water[]>([
    {
        name: '无为大堤',
        today: 10.38,
        yesterday: 10.38,
        date: '2026-06-14 20:06:00'
    },
    {
        name: '城北圩',
        today: 8.61,
        yesterday: 8.62,
        date: '2026-06-14 20:06:00'
    },
    {
        name: '江北（沈巷）长江堤',
        today: 8.62,
        yesterday: 8.63,
        date: '2026-06-14 20:06:00'
    },
    {
        name: '万春圈堤',
        today: 8.81,
        yesterday: 8.79,
        date: '2026-06-14 20:06:00'
    },
    {
        name: '裕溪口江堤',
        today: 8.62,
        yesterday: 8.63,
        date: '2026-06-14 20:06:00'
    },
    {
        name: '裕溪河堤',
        today: 8.63,
        yesterday: 8.55,
        date: '2026-06-14 20:06:00'
    },
    {
        name: '牛屯河堤',
        today: 8.15,
        yesterday: 8.14,
        date: '2026-06-14 20:06:00'
    },
    {
        name: '惠生连圩堤',
        today: 10.38,
        yesterday: 10.38,
        date: '2026-06-14 20:06:00'
    },
    {
        name: '永定大圩堤',
        today: 10.38,
        yesterday: 10.38,
        date: '2026-06-14 20:06:00'
    },
    {
        name: '黑沙洲、天然洲圩',
        today: 10.38,
        yesterday: 10.38,
        date: '2026-06-14 20:06:00'
    }
])
</script>

<template>
    <div class="w-6xl m-auto">
        <div class="m-4 text-center text-gray-900 text-2xl font-bold">鸠江测站最新水位数据一览</div>
        <div class="m-2 text-center text-gray-600">即时查看鸠江区水文测站最新水位数据</div>
        <table class="text-center overflow-hidden bg-white rounded-xl min-w-full">
            <thead class="bg-gray-200">
                <tr class="h-14">
                    <th class="text-gray-600 font-medium px-8">序号</th>
                    <th class="text-gray-600 font-medium px-4">站名</th>
                    <th class="text-gray-600 font-medium p-4">更新时间</th>
                    <th class="text-gray-600 font-medium p-4">当前水位</th>
                    <th class="text-gray-600 font-medium p-4">昨日同期水位</th>
                    <th class="text-gray-600 font-medium px-8">较昨日同期水位+涨-落</th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
                <tr v-for="(water, index) in water_list" :key="index" class="hover:bg-blue-50 ">
                    <td class="text-gray-600 py-4">{{ index + 1 }}</td>
                    <td class="text-gray-600 py-4">📍{{ water.name }}</td>
                    <td class="text-gray-600 py-4">{{ water.date }}</td>
                    <td class="text-gray-600 py-4 font-bold">{{ water.today }} m</td>
                    <td class="text-gray-600 py-4">{{ water.yesterday }} m</td>
                    <td class="text-gray-600 py-4">
                        <div v-if="min(water.today, water.yesterday) == 0"
                            class="inline-flex text-gray-600 px-6 py-1 bg-gray-300 rounded-full text-sm font-medium">→
                            持平
                        </div>
                        <div v-else-if="min(water.today, water.yesterday) > 0"
                            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700">
                            ↑ +{{ min(water.today, water.yesterday) }}m</div>
                        <div v-else="min(water.today, water.yesterday) < 0"
                            class="inline-flex text-green-700 px-3 py-1 rounded-full text-sm font-medium bg-green-100 ">
                            ↓ -{{ min(water.yesterday, water.today) }}m</div>
                    </td>
                </tr>


            </tbody>
        </table>
    </div>
</template>