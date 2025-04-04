<template>
    <div class="content">
        <a-divider />
        <a-layout-footer class="footer">
            版权所有 @ 2024-{{ new Date().getFullYear() }} 阮福民
        </a-layout-footer>
    </div>

</template>

<style scoped>
.content {
    width: 1440px; 
    margin: auto;
}

.footer {
    text-align: center;
    margin: auto;
    height: 60px;
}
</style>