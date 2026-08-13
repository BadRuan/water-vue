<template>
    <header class="bg-white h-16">
        <div class="w-6xl h-full mx-auto flex items-center justify-between px-4">
            <div class="md:flex">
                <div class="w-full flex flex-row items-center">
                    <img src="/logo.svg" class="mx-4" alt="logo" />
                    <img src="/logo_text.svg" class="w-full h-2/3" alot="logo-text" />
                </div>
            </div>

            <ul class="flex flex-row gap-8 items-center justify-center font-medium">
                <li class="flex flex-col items-center border-b border-gray-100">
                    <div class="text-gray-800">网站首页</div>
                    <div class="text-gray-400 text-sm hover:bg-gray-50">Home</div>
                </li>

                <li class="flex flex-col items-center border-b border-gray-100">
                    <div class="text-gray-800">开发历程</div>
                    <div class="text-gray-400 text-sm">History</div>
                </li>

                <li class="flex flex-col items-center border-b border-gray-100">
                    <div class="text-gray-800">下步计划</div>
                    <div class="text-gray-400 text-sm">Plan</div>
                </li>
            </ul>

        </div>
    </header>
</template>