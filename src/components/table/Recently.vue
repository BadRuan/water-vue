<script setup lang="ts">
import { onMounted } from 'vue';
import { useRecentlyStore } from '@/store/recently.ts';
const { recently_data, get_recently } = useRecentlyStore();
onMounted(() => {
    get_recently()
});
</script>

<template>
    <div class="box">
        <table>
            <caption>最新水位一览</caption>

            <thead>
                <tr>
                    <th>序号</th>
                    <th>站点名称</th>
                    <th>水位高程</th>
                    <th>最新水位时间</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in recently_data" :key="item.stcd">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.current }} m</td>
                    <td>{{ item.tm }} </td>
                </tr>
            </tbody>
        </table>

        <div class="button">
            <a href="#" @click="get_recently()" class="update">
                更新最新水位
            </a>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.box {
    table {
        margin: auto;
        text-align: center;
        box-shadow: 2px 2px 4px rgb(219, 219, 219);

        caption {
            margin: 20px;
            font-size: 1.5em;
            font-weight: bold;
        }

        thead {
            background-color: #c5c5c5;
        }

        th,
        td {
            padding: 20px 60px;
        }

        tbody tr:nth-child(even) {
            background-color: #EDF4FE;
        }
    }

    .button {
        margin: 20px auto;
        width: 160px;
        height: 42px;
        line-height: 42px;
        background-color: #F2F3F5;
        text-align: center;
        border-radius: 2px;
        font-weight: bold;


        a {
            text-decoration: none;
            color: #4E5969;
        }

        &:hover {
            background-color: #E5E6EB;

            a {
                color: $pcolor;
            }

        }
    }
}
</style>