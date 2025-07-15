<script setup>
const route = useRoute()

useHead({
    meta: [{ property: 'title', content: `Walimatul Urus - ${route.meta.title}` }]
})
</script>

<template>
    <div class="w-screen bg-gray-100">
        <div class="relative min-w-96 max-w-lg max-w-fit mx-auto drop-shadow-xl">
            <slot />
        </div>
    </div>
</template>