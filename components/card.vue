<script setup>
    const backgroundUrl = '/pattern-1.png'

    const props = defineProps({
        type: String
    })

    const styling = (type) => {
        return type == 'groom' ? {} : { backgroundRepeat: 'repeat', backgroundImage: `url(${backgroundUrl})` };
    }
</script>

<template>
    <div class="h-full w-full p-8 drop-shadow-md bg-gray-50 rounded-2xl overflow-hidden hover:drop-shadow-xl" :style="styling(props.type)">
        <slot />
    </div>
</template>