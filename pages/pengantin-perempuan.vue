<script setup>
    import moment from 'moment'
    
    definePageMeta({
        layout: "card",
        title: "Majlis Perempuan"
    })

    const backgroundUrl = '/pattern-1.png'

    const config = useRuntimeConfig()
    
    const calendarDate = moment(config.public.brideCalendarDate)

    const calendar = {
        day: config.public.brideCalendarDay,
        date: {
            masihih: config.public.brideCalendarDateMasihih,
            hijrah: config.public.brideCalendarDateHijrah
        },
        time: config.public.brideCalendarTime,
        add: {
            gcalendar: config.public.brideCalendarGcalendarUrl,
            ics: config.public.brideCalendarIcs,
            outlook: config.public.brideCalendarOutlookUrl,
        }
    }

    const contacts = []
    if (config.public.brideContact1Name && config.public.brideContact1Number) {
        contacts.push({
            name: config.public.brideContact1Name,
            number: config.public.brideContact1Number
        })
    }
    if (config.public.brideContact2Name && config.public.brideContact2Number) {
        contacts.push({
            name: config.public.brideContact2Name,
            number: config.public.brideContact2Number
        })
    }
    if (config.public.brideContact3Name && config.public.brideContact3Number) {
        contacts.push({
            name: config.public.brideContact3Name,
            number: config.public.brideContact3Number
        })
    }
    if (config.public.brideContact4Name && config.public.brideContact4Number) {
        contacts.push({
            name: config.public.brideContact4Name,
            number: config.public.brideContact4Number
        })
    }
    
    const maps = {
        iframe: config.public.brideMapsIframe,
        share: {
            gmap: config.public.brideMapsGmapUrl,
            waze: config.public.brideMapsWazeUrl
        }
    }
    
    const rsvp = {
        iframe: config.public.brideRsvpIframe
    }

    const footerDetails = {
        calendar: calendar,
        contacts: contacts,
        maps: maps,
        rsvp: rsvp,
    }
</script>

<template class="bg-gray-100">
    <div>
        <card-section class="overflow-hidden flex flex-col justify-center text-brideSecondary bg-white" :style="{ backgroundRepeat: repeat, backgroundImage: `url(${backgroundUrl})` }">
            <div class="relative m-3 px-3 py-32 text-center">
                <div class="absolute top-0 left-0 w-full h-full border-8 border-white drop-shadow-xl"></div>
                <img class="absolute bottom-0 right-0 w-16 -translate-x-1/2 -translate-y-1/2 scale-[4]" src="~/assets/images/flower-8.svg" alt="Flower 8"/>
                <img class="absolute bottom-0 left-0 w-16 translate-x-1/2 -translate-y-1/2 scale-[4]" src="~/assets/images/flower-6.svg" alt="Flower 6"/>
                <img class="absolute top-0 right-0 w-16 -translate-x-1/2 translate-y-1/2 scale-[5]" src="~/assets/images/flower-7.svg" alt="Flower 7"/>
                <img class="absolute top-0 left-0 w-16 translate-x-1/2 scale-[4]" src="~/assets/images/flower-5.svg" alt="Flower 5"/>
                <p class="uppercase text-lg text-brideTertiary font-Cormorant">Jemputan Majlis</p>
                <p class="text-xl text-brideTertiary font-GreatVibes">Walimatul Urus</p>
                <div class="text-3xl my-12 font-PlayfairDisplay">
                    <p class="tracking-widest sm:text-5xl italic">{{ config.public.brideName }}</p>
                    <p class="text-sm">&</p>
                    <p class="tracking-widest sm:text-5xl italic">{{ config.public.groomName }}</p>
                </div>
                <p class="text-brideTertiary font-spinwerad">{{ calendar.day }}</p>
                <p class="flex flex-row text-center justify-center mb-3 text-brideTertiary font-Cormorant">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;{{ calendarDate.format('DD') }}</span>
                    <span class="mx-3 px-3 border-x-4">{{ calendarDate.format('MMMM') }}</span>
                    <span>{{ calendarDate.format('YYYY') }}</span>
                </p>
                <p class="font-Cormorant">{{ config.public.brideAddressVenue }}<br/>{{ config.public.brideAddressLine2 }}, {{ config.public.brideAddressState }}.</p>
            </div>
        </card-section>
        <card-section class="text-center text-brideSecondary bg-white font-Cormorant" :style="{ backgroundRepeat: repeat, backgroundImage: `url(${backgroundUrl})` }">
            <p class="tracking-widest mb-3">Assalamualaikum W.B.T</p>
            <p class="text-xl mb-3 font-spinwerad uppercase">{{ config.public.brideFatherFullName }}<br/>{{ config.public.brideMotherFullName }}</p>
            <p class="text-xs">
                Dengan penuh kesyukuran ke hadrat Ilahi, kami sekeluarga menjemput
                <br/>
                Dato' / Datin / Tuan / Puan / Encik / Cik / Hj / Hjh
            </p>
            <p class="text-xs mb-6">sekeluarga hadir ke Majlis Pernikahan anakanda kami</p>
            <p class="text-lg font-spinwerad uppercase">{{ config.public.brideFullName }}</p>
            <p class="text-xs">dan</p>
            <p class="text-lg font-spinwerad uppercase">{{ config.public.groomFullName }}</p>
        </card-section>
        <card-section class="text-center text-brideTertiary bg-white font-Cormorant">
            <p>{{ calendar.day }}, {{ calendar.date.masihih }}</p>
            <p class="mb-3" v-if="calendar.date.hijrah">{{ calendar.date.hijrah }}</p>
            <p class="mb-3">{{ calendar.time }}</p>
            <p v-if="config.public.brideAddressVenue">{{ config.public.brideAddressVenue }},</p>
            <p v-if="config.public.brideAddressLine1">{{ config.public.brideAddressLine1 }},</p>
            <p v-if="config.public.brideAddressLine2">{{ config.public.brideAddressLine2 }},</p>
            <p v-if="config.public.brideAddressState">{{ config.public.brideAddressState }}.</p>
        </card-section>
        <card-section class="text-center text-brideSecondary bg-white font-Cormorant" :style="{ backgroundRepeat: repeat, backgroundImage: `url(${backgroundUrl})` }">
            <p>Semoga dengan kehadiran dan doa restu</p>
            <p>Dato' / Datin / Tuan / Puan / Encik / Cik / Hj / Hjh</p>
            <p>dapat menyerikan lagi majlis kami dan diberkati Allah SWT</p>
        </card-section>
        <card-section class="text-center text-brideSecondary bg-white font-Cormorant" :style="{ backgroundRepeat: repeat, backgroundImage: `url(${backgroundUrl})` }">
            <p>Hubungi:</p>
            <table class="mx-auto">
                <tbody>
                    <tr v-for="contact in contacts">
                        <td class="text-right">
                            {{ contact.name }} :
                        </td>
                        <td class="text-left pl-3">
                            {{ contact.number }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>Turut Mengundang Seisi Keluarga</p>
        </card-section>
        <div class="py-1 text-xs text-white text-center bg-[#282928] border-t border-black">
            Dihasilkan oleh <a href="https://naimsolong.com" target="_blank" class="hover:font-bold underline">Amirul Naim</a>
        </div>
    </div>
    <card-footer :footerDetails="footerDetails"/>
</template>
