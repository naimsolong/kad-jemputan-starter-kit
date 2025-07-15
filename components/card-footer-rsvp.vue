<script setup>
const props = defineProps({
    rsvp: Object
})

</script>

<template>
    <div class="relative text-white w-full h-full">
        <p class="text-xl mb-9 uppercase font-bold">RSVP</p>
        <iframe :src="props.rsvp.iframe" style="border:0; width: 100%; height: 55vh; margin: 0;" frameborder="0" marginheight="0" marginwidth="0" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade">Loading…</iframe>
    </div>
</template>