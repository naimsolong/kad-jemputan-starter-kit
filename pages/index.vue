<script setup>
    const config = useRuntimeConfig()
</script>

<template>
    <div class="relative text-center bg-gray-100">
        <div class="absolute w-full h-6 z-10 text-xl align-middle inset-1/2 -translate-x-1/2 -translate-y-1/2 font-Cormorant drop-shadow-xl">
            <span class="px-8 py-2 bg-white rounded-lg">Walimatul Urus</span>
        </div>
        <div class="w-screen h-screen flex flex-col gap-5 p-5">
            <NuxtLink to="/pengantin-lelaki" class="h-1/2">
                <card class="bg-groomPrimary" type="groom">
                    <div class="flex w-full h-full items-center tracking-widest font-bold text-groomTertiary font-GreatVibes group">
                        <span class="mx-auto z-10">
                            <h1 class="text-4xl md:text-8xl mt-12 mb-3 group-hover:scale-[1.2]">Majlis Pengantin Lelaki</h1>
                            <p class="text-center text-md md:text-2xl text-groomSecondary font-['Georgia']">{{ config.public.groomCalendarDateMasihih }}</p>
                            <p class="text-center text-md md:text-2xl text-groomSecondary font-['Georgia']">{{ config.public.groomAddressLine2 }}, {{ config.public.groomAddressState }}</p>
                        </span>
                        <img class="absolute bottom-0 right-0 w-16 -translate-x-8 scale-[3]" src="~/assets/images/flower-1.svg" alt="Flower 1"/>
                        <img class="absolute bottom-0 left-0 w-16 translate-x-8 scale-[4]" src="~/assets/images/flower-2.svg" alt="Flower 2"/>
                        <img class="absolute top-0 right-0 w-16 -translate-x-8 scale-[5]" src="~/assets/images/flower-3.svg" alt="Flower 3"/>
                        <img class="absolute top-0 left-0 w-16 translate-x-8 scale-[3]" src="~/assets/images/flower-4.svg" alt="Flower 4"/>
                    </div>
                </card>
            </NuxtLink>
            <NuxtLink to="/pengantin-perempuan" class="h-1/2">
                <card class="bg-white" type="bride">
                    <div class="flex w-full h-full items-center tracking-widest font-bold text-brideTertiary font-PlayfairDisplay group">
                        <span class="mx-auto z-10">
                            <h1 class="text-2xl md:text-6xl mt-12 mb-3 group-hover:scale-[1.2]">Majlis Pengantin Perempuan</h1>
                            <p class="text-center text-md md:text-2xl text-brideSecondary font-Cormorant">{{ config.public.brideCalendarDateMasihih }}</p>
                            <p class="text-center text-md md:text-2xl text-brideSecondary font-Cormorant">{{ config.public.brideAddressLine2 }}, {{ config.public.brideAddressState }}</p>
                        </span>
                        <img class="absolute bottom-0 right-0 w-16 -translate-x-16 -translate-y-10 scale-[3]" src="~/assets/images/flower-8.svg" alt="Flower 8"/>
                        <img class="absolute bottom-0 left-0 w-16 translate-x-12 -translate-y-16 scale-[3]" src="~/assets/images/flower-6.svg" alt="Flower 6"/>
                        <img class="absolute top-0 right-0 w-16 -translate-x-16 translate-y-10 scale-[3]" src="~/assets/images/flower-7.svg" alt="Flower 7"/>
                        <img class="absolute top-0 left-0 w-16 translate-x-12 translate-y-16 scale-[4]" src="~/assets/images/flower-5.svg" alt="Flower 5"/>
                    </div>
                </card>
            </NuxtLink>
        </div>
    </div>
</template>
  