# Environment Variables Setup Guide

This guide explains how to configure the environment variables for this Nuxt.js wedding invitation application.

## Overview

The application uses environment variables to customize wedding details for both the bride and groom. All configurations are stored in a `.env` file at the root of the project.

## Environment File Structure

Create a `.env` file in the root directory with the following structure:

```bash
# Copy the example below and customize with your details
cp .env.example .env
```

## Required Environment Variables

### Groom Details

#### Personal Information
```env
GROOM_NAME=Your Name
GROOM_FULL_NAME=Your Full Name
GROOM_FATHER_NAME=Father's Name
GROOM_FATHER_FULL_NAME=Father's Full Name
GROOM_MOTHER_NAME=Mother's Name
GROOM_MOTHER_FULL_NAME=Mother's Full Name
```

#### Address Configuration
```env
GROOM_ADDRESS_VENUE=Venue Name (optional)
GROOM_ADDRESS_LINE1=Address Line 1
GROOM_ADDRESS_LINE2=Address Line 2
GROOM_ADDRESS_STATE=State
```

#### Calendar Configuration
```env
GROOM_CALENDAR_DAY=Day Name (e.g., Sabtu)
GROOM_CALENDAR_DATE=2023-09-16  # Format: YYYY-MM-DD
GROOM_CALENDAR_DATE_MASIHIH=16 September 2023
GROOM_CALENDAR_DATE_HIJRAH=30 Safar 1445H
GROOM_CALENDAR_TIME=11.30 AM - 4.00 PM
GROOM_CALENDAR_GCALENDAR_URL=Google Calendar URL
GROOM_CALENDAR_ICS=/ics/majlis_lelaki.ics
GROOM_CALENDAR_OUTLOOK_URL=Outlook Calendar URL
```

#### Contact Information
```env
GROOM_CONTACT_1_NAME=Contact Name 1
GROOM_CONTACT_1_NUMBER=Phone Number 1
GROOM_CONTACT_2_NAME=Contact Name 2
GROOM_CONTACT_2_NUMBER=Phone Number 2
GROOM_CONTACT_3_NAME=Contact Name 3
GROOM_CONTACT_3_NUMBER=Phone Number 3
GROOM_CONTACT_4_NAME=Contact Name 4
GROOM_CONTACT_4_NUMBER=Phone Number 4
```

#### Maps Configuration
```env
GROOM_MAPS_IFRAME=Google Maps Embed URL
GROOM_MAPS_GMAP_URL=Google Maps Share URL
GROOM_MAPS_WAZE_URL=Waze Navigation URL
```

#### RSVP Configuration
```env
GROOM_RSVP_IFRAME=Google Forms Embed URL
```

### Bride Details

#### Personal Information
```env
BRIDE_NAME=Bride Name
BRIDE_FULL_NAME=Bride Full Name
BRIDE_FATHER_NAME=Father's Name
BRIDE_FATHER_FULL_NAME=Father's Full Name
BRIDE_MOTHER_NAME=Mother's Name
BRIDE_MOTHER_FULL_NAME=Mother's Full Name
```

#### Address Configuration
```env
BRIDE_ADDRESS_VENUE=Venue Name
BRIDE_ADDRESS_LINE1=Address Line 1
BRIDE_ADDRESS_LINE2=Address Line 2
BRIDE_ADDRESS_STATE=State
```

#### Calendar Configuration
```env
BRIDE_CALENDAR_DAY=Day Name
BRIDE_CALENDAR_DATE=2023-09-09  # Format: YYYY-MM-DD
BRIDE_CALENDAR_DATE_MASIHIH=09 September 2023
BRIDE_CALENDAR_DATE_HIJRAH=23 Safar 1445H
BRIDE_CALENDAR_TIME=11.30 AM - 4.00 PM
BRIDE_CALENDAR_GCALENDAR_URL=Google Calendar URL
BRIDE_CALENDAR_ICS=/ics/majlis_perempuan.ics
BRIDE_CALENDAR_OUTLOOK_URL=Outlook Calendar URL
```

#### Contact Information
```env
BRIDE_CONTACT_1_NAME=Contact Name 1
BRIDE_CONTACT_1_NUMBER=Phone Number 1
BRIDE_CONTACT_2_NAME=Contact Name 2
BRIDE_CONTACT_2_NUMBER=Phone Number 2
BRIDE_CONTACT_3_NAME=Contact Name 3
BRIDE_CONTACT_3_NUMBER=Phone Number 3
BRIDE_CONTACT_4_NAME=Contact Name 4
BRIDE_CONTACT_4_NUMBER=Phone Number 4
```

#### Maps Configuration
```env
BRIDE_MAPS_IFRAME=Google Maps Embed URL
BRIDE_MAPS_GMAP_URL=Google Maps Share URL
BRIDE_MAPS_WAZE_URL=Waze Navigation URL
```

#### RSVP Configuration
```env
BRIDE_RSVP_IFRAME=Google Forms Embed URL
```

## Important Configuration Notes

### Date Format
- `CALENDAR_DATE` must be in **YYYY-MM-DD** format
- This is used for calendar integrations and ICS file generation

### ICS Files
- Can generate using https://ical.marudot.com/
- ICS files should be placed in the `public/ics/` directory
- Default files: `majlis_lelaki.ics` and `majlis_perempuan.ics`
- These provide calendar download functionality

### Google Calendar URLs
Generate Google Calendar URLs using this format:
```
https://calendar.google.com/calendar/render?action=TEMPLATE&text=EVENT_TITLE&details=EVENT_DESCRIPTION&dates=START_DATE/END_DATE&location=LOCATION
```

### Google Forms (RSVP)
- Create Google Forms for RSVP collection
- Use the embed URL format: `https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true`

### Maps Integration
- **Google Maps Iframe**: Get embed code from Google Maps
- **Google Maps URL**: Use the share link from Google Maps
- **Waze URL**: Get from Waze live map sharing

## Security Considerations

### For Development
- Never commit the `.env` file to version control
- Add `.env` to your `.gitignore` file

### For Production (Cloudflare Pages)
- Add environment variables in the Cloudflare Pages dashboard
- Go to your project → Settings → Environment variables
- Add each variable individually

## Testing Your Configuration

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Check the pages**:
   - Visit `/` for the main page
   - Visit `/pengantin-lelaki` for groom's details
   - Visit `/pengantin-perempuan` for bride's details

3. **Verify functionality**:
   - Calendar links work correctly
   - Maps open properly
   - Contact numbers are clickable
   - RSVP forms load

## Troubleshooting

### Common Issues

1. **Environment variables not loading**
   - Restart the development server after changes
   - Check for syntax errors in `.env` file
   - Ensure no spaces around the `=` sign

2. **Calendar links not working**
   - Verify date format is YYYY-MM-DD
   - Check URL encoding for special characters
   - Ensure start/end times are correct

3. **Maps not displaying**
   - Verify iframe URLs are complete
   - Check if maps URLs are publicly accessible
   - Ensure proper URL encoding