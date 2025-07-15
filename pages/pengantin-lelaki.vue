<script setup>
    import moment from 'moment'
    
    definePageMeta({
        layout: "card",
        title: "Majlis Lelaki"
    })

    const config = useRuntimeConfig()

    const calendarDate = moment(config.public.groomCalendarDate)

    const calendar = {
        day: config.public.groomCalendarDay,
        date: {
            masihih: config.public.groomCalendarDateMasihih,
            hijrah: config.public.groomCalendarDateHijrah
        },
        time: config.public.groomCalendarTime,
        add: {
            gcalendar: config.public.groomCalendarGcalendarUrl,
            ics: config.public.groomCalendarIcs,
            outlook: config.public.groomCalendarOutlookUrl,
        }
    }

    const contacts = []
    if (config.public.groomContact1Name && config.public.groomContact1Number) {
        contacts.push({
            name: config.public.groomContact1Name,
            number: config.public.groomContact1Number
        })
    }
    if (config.public.groomContact2Name && config.public.groomContact2Number) {
        contacts.push({
            name: config.public.groomContact2Name,
            number: config.public.groomContact2Number
        })
    }
    if (config.public.groomContact3Name && config.public.groomContact3Number) {
        contacts.push({
            name: config.public.groomContact3Name,
            number: config.public.groomContact3Number
        })
    }
    if (config.public.groomContact4Name && config.public.groomContact4Number) {
        contacts.push({
            name: config.public.groomContact4Name,
            number: config.public.groomContact4Number
        })
    }

    const maps = {
        iframe: config.public.groomMapsIframe,
        share: {
            gmap: config.public.groomMapsGmapUrl,
            waze: config.public.groomMapsWazeUrl
        }
    }
    
    const rsvp = {
        iframe: config.public.groomRsvpIframe
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
        <card-section class="overflow-hidden flex flex-col justify-center text-groomSecondary bg-groomPrimary font-['Georgia']">
            <div class="relative m-3 px-3 py-32 border-8 border-[#e0d4bf]">
                <img class="absolute bottom-0 right-0 w-16 translate-y-1/2 scale-[3]" src="~/assets/images/flower-1.svg" alt="Flower 1"/>
                <img class="absolute bottom-0 left-0 w-16 translate-y-1/2 scale-[4]" src="~/assets/images/flower-2.svg" alt="Flower 2"/>
                <img class="absolute top-0 right-0 w-16 translate-y-1/2 scale-[5]" src="~/assets/images/flower-3.svg" alt="Flower 3"/>
                <img class="absolute top-0 left-0 w-16 -translate-x-1/2 -translate-y-20 scale-[3]" src="~/assets/images/flower-4.svg" alt="Flower 4"/>
                <p class="uppercase tracking-widest">Majlis Perkahwinan</p>
                <div class="text-3xl tracking-widest font-bold text-center text-groomTertiary my-12 font-GreatVibes">
                    <p class="sm:text-5xl">{{ config.public.groomName }}</p>
                    <p class="text-sm font-['Georgia']">dan</p>
                    <p class="sm:text-5xl">{{ config.public.brideName }}</p>
                </div>
                <p class="flex flex-row text-center justify-center mb-3">
                    <span class="align-middle my-auto mx-3">{{ calendarDate.format('MMM') }}</span>
                    <span class="align-middle mx-3 px-3 border-x-4">{{ calendar.day }}<br/><span class="text-2xl">{{ calendarDate.format('D') }}</span></span>
                    <span class="align-middle my-auto mx-3">{{ calendarDate.format('YYYY') }}</span>
                </p>
                <p class="text-center">{{ config.public.groomAddressVenue }}<br/>{{ config.public.groomAddressLine2 }}, {{ config.public.groomAddressState }}.</p>
            </div>
        </card-section>
        <card-section class="text-center text-groomSecondary bg-groomPrimary font-['Georgia']">
            <p class="tracking-widest mb-3">Assalamualaikum W.B.T</p>
            <p class="text-xl mb-3 font-Baskerville">{{ config.public.groomFatherFullName }}<br/>{{ config.public.groomMotherFullName }}</p>
            <p class="text-xs">
                Dengan penuh kesyukuran ke hadrat Ilahi, kami sekeluarga menjemput
                <br/>
                Dato' / Datin / Tuan / Puan / Encik / Cik / Hj / Hjh
            </p>
            <p class="text-xs mb-6">sekeluarga hadir ke Majlis Pernikahan anakanda kami</p>
            <p class="text-lg font-Baskerville">{{ config.public.groomFullName }}</p>
            <p class="text-xs">dan</p>
            <p class="text-lg font-Baskerville">{{ config.public.brideFullName }}</p>
        </card-section>
        <card-section class="text-center text-groomTertiary bg-white font-Baskerville">
            <p>{{ calendar.day }}, {{ calendar.date.masihih }}</p>
            <p class="mb-3" v-if="calendar.date.hijrah">{{ calendar.date.hijrah }}</p>
            <p class="mb-3">{{ calendar.time }}</p>
            <p v-if="config.public.groomAddressVenue">{{ config.public.groomAddressVenue }},</p>
            <p v-if="config.public.groomAddressLine1">{{ config.public.groomAddressLine1 }},</p>
            <p v-if="config.public.groomAddressLine2">{{ config.public.groomAddressLine2 }},</p>
            <p v-if="config.public.groomAddressState">{{ config.public.groomAddressState }}.</p>
        </card-section>
        <card-section class="text-center text-groomSecondary bg-groomPrimary font-Baskerville">
            <p>Semoga dengan kehadiran dan doa restu</p>
            <p>Dato' / Datin / Tuan / Puan / Encik / Cik / Hj / Hjh</p>
            <p>dapat menyerikan lagi majlis kami dan diberkati Allah SWT</p>
        </card-section>
        <card-section class="text-center text-groomSecondary bg-groomPrimary font-Baskerville">
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
