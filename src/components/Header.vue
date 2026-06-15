<template>
    <header class="bg-white h-14">
        <div class="w-4xl h-full mx-auto flex items-center justify-between">
            <div class="md:flex">
                <div class="w-full">
                    <img src="/logo.svg" alt="logo" />
                </div>
            </div>
            <nav class="flex gap-4 items-center">
                <RouterLink class="w-20 group" :to="{ name: 'Home' }">
                    <div
                        class="text-gray-900 text-center text-base group-hover:text-primary-300 group-active:text-primary-300">
                        网站首页
                    </div>
                    <div
                        class="text-gray-400 text-center text-xs group-hover:text-primary-400  group-active:text-primary-400">
                        Home Page</div>
                </RouterLink>
                <RouterLink class="w-20 group" :to="{ name: 'Plan' }">
                    <div
                        class="text-gray-900 text-center text-base group-hover:text-primary-300 group-active:text-primary-300">
                        未来计划</div>
                    <div class="text-gray-400 text-center text-xs group-hover:text-primary-400 group-active:text-primary-400"
                        group-active:text-primary-400>Future Palns</div>
                </RouterLink>
                <RouterLink class="w-20 group" :to="{ name: 'History' }">
                    <div class="text-gray-900 text-center text-base group-hover:text-primary-300 group-active:text-primary-300"
                        group-active:text-primary-300>开发历程</div>
                    <div
                        class="text-gray-400 text-center text-xs group-hover:text-primary-400 group-active:text-primary-400">
                        Code History</div>
                </RouterLink>
            </nav>
        </div>
    </header>
</template>