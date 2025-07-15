// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Walimatul Urus',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=0' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  runtimeConfig: {
    public: {
      // ##### GROOM DETAILS
      // Personal
      groomName: process.env.GROOM_NAME,
      groomFullName: process.env.GROOM_FULL_NAME,
      groomFatherName: process.env.GROOM_FATHER_NAME,
      groomFatherFullName: process.env.GROOM_FATHER_FULL_NAME,
      groomMotherName: process.env.GROOM_MOTHER_NAME,
      groomMotherFullName: process.env.GROOM_MOTHER_FULL_NAME,

      // Groom Address Configuration
      groomAddressVenue: process.env.GROOM_ADDRESS_VENUE,
      groomAddressLine1: process.env.GROOM_ADDRESS_LINE1,
      groomAddressLine2: process.env.GROOM_ADDRESS_LINE2,
      groomAddressState: process.env.GROOM_ADDRESS_STATE,

      // Groom Calendar Configuration
      groomCalendarDay: process.env.GROOM_CALENDAR_DAY,
      groomCalendarDate: process.env.GROOM_CALENDAR_DATE,
      groomCalendarDateMasihih: process.env.GROOM_CALENDAR_DATE_MASIHIH,
      groomCalendarDateHijrah: process.env.GROOM_CALENDAR_DATE_HIJRAH,
      groomCalendarTime: process.env.GROOM_CALENDAR_TIME,
      groomCalendarGcalendarUrl: process.env.GROOM_CALENDAR_GCALENDAR_URL,
      groomCalendarIcs: process.env.GROOM_CALENDAR_ICS,
      groomCalendarOutlookUrl: process.env.GROOM_CALENDAR_OUTLOOK_URL,

      // Groom Contacts Configuration
      groomContact1Name: process.env.GROOM_CONTACT_1_NAME,
      groomContact1Number: process.env.GROOM_CONTACT_1_NUMBER,
      groomContact2Name: process.env.GROOM_CONTACT_2_NAME,
      groomContact2Number: process.env.GROOM_CONTACT_2_NUMBER,
      groomContact3Name: process.env.GROOM_CONTACT_3_NAME,
      groomContact3Number: process.env.GROOM_CONTACT_3_NUMBER,
      groomContact4Name: process.env.GROOM_CONTACT_4_NAME,
      groomContact4Number: process.env.GROOM_CONTACT_4_NUMBER,

      // Groom Maps Configuration
      groomMapsIframe: process.env.GROOM_MAPS_IFRAME,
      groomMapsGmapUrl: process.env.GROOM_MAPS_GMAP_URL,
      groomMapsWazeUrl: process.env.GROOM_MAPS_WAZE_URL,

      // Groom RSVP Configuration
      groomRsvpIframe: process.env.GROOM_RSVP_IFRAME,

      // ##### BRIDE DETAILS
      // Personal
      brideName: process.env.BRIDE_NAME,
      brideFullName: process.env.BRIDE_FULL_NAME,
      brideFatherName: process.env.BRIDE_FATHER_NAME,
      brideFatherFullName: process.env.BRIDE_FATHER_FULL_NAME,
      brideMotherName: process.env.BRIDE_MOTHER_NAME,
      brideMotherFullName: process.env.BRIDE_MOTHER_FULL_NAME,

      // Bride Address Configuration
      brideAddressVenue: process.env.BRIDE_ADDRESS_VENUE,
      brideAddressLine1: process.env.BRIDE_ADDRESS_LINE1,
      brideAddressLine2: process.env.BRIDE_ADDRESS_LINE2,
      brideAddressState: process.env.BRIDE_ADDRESS_STATE,

      // Bride Calendar Configuration
      brideCalendarDay: process.env.BRIDE_CALENDAR_DAY,
      brideCalendarDate: process.env.BRIDE_CALENDAR_DATE,
      brideCalendarDateMasihih: process.env.BRIDE_CALENDAR_DATE_MASIHIH,
      brideCalendarDateHijrah: process.env.BRIDE_CALENDAR_DATE_HIJRAH,
      brideCalendarTime: process.env.BRIDE_CALENDAR_TIME,
      brideCalendarGcalendarUrl: process.env.BRIDE_CALENDAR_GCALENDAR_URL,
      brideCalendarIcs: process.env.BRIDE_CALENDAR_ICS,
      brideCalendarOutlookUrl: process.env.BRIDE_CALENDAR_OUTLOOK_URL,

      // Bride Contacts Configuration
      brideContact1Name: process.env.BRIDE_CONTACT_1_NAME,
      brideContact1Number: process.env.BRIDE_CONTACT_1_NUMBER,
      brideContact2Name: process.env.BRIDE_CONTACT_2_NAME,
      brideContact2Number: process.env.BRIDE_CONTACT_2_NUMBER,
      brideContact3Name: process.env.BRIDE_CONTACT_3_NAME,
      brideContact3Number: process.env.BRIDE_CONTACT_3_NUMBER,
      brideContact4Name: process.env.BRIDE_CONTACT_4_NAME,
      brideContact4Number: process.env.BRIDE_CONTACT_4_NUMBER,

      // Bride Maps Configuration
      brideMapsIframe: process.env.BRIDE_MAPS_IFRAME,
      brideMapsGmapUrl: process.env.BRIDE_MAPS_GMAP_URL,
      brideMapsWazeUrl: process.env.BRIDE_MAPS_WAZE_URL,

      // Bride RSVP Configuration
      brideRsvpIframe: process.env.BRIDE_RSVP_IFRAME,
    }
  }
})
