# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for the "Home Court Series" - a beach volleyball tournament series in the Dallas-Fort Worth area. The site handles team registration, displays tournament information, and showcases participating venues.

## Architecture

This is a simple static HTML/CSS/JavaScript website without a build system or package management. The site uses:

- **HTML**: Main content structure with inline JavaScript for form handling
- **CSS**: Tailwind CSS loaded via CDN (styles.css contains minimal custom overrides)
- **JavaScript**: Vanilla JS for video playback and email-based registration form submission

## Key Files and Structure

- `index.html` - Main landing page with tournament info and registration form
- `rules.html` - Tournament rules and format details
- `formats.html` - Detailed format explanations
- `registered-teams.html` - List of registered teams
- `results.html` - Tournament results
- `bakyard-info.html` - Venue-specific information and rules
- `waiver.html` - Liability waiver and media release
- `css/styles.css` - Custom CSS overrides (minimal)
- `js/main.js` - JavaScript utilities (currently just email form handler)
- `js/analytics.js` - Analytics tracking code

## Registration System

The registration form uses `mailto:` links to send registration data via email to `homecourtsignup@beachbakyard.com` with CCs to organizers. Payment is handled separately via Venmo (@Daytonscott).

## Development Notes

- No build process or dependencies - files can be edited directly
- Uses Tailwind CSS via CDN for styling
- Form validation happens in JavaScript before email submission
- Images and videos are stored in the root directory
- Google Analytics tracking is included via gtag

## Common Tasks

Since this is a static site with no build system:
- **Edit content**: Modify HTML files directly
- **Update styles**: Edit `css/styles.css` or use Tailwind classes in HTML
- **Test locally**: Open HTML files in browser or use a simple HTTP server
- **Deploy**: Upload files to web server (no compilation needed)

## Email Configuration

Registration emails are sent to:
- Primary: `homecourtsignup@beachbakyard.com`
- CC: `dayton.arellano@gmail.com`, `wayne@rwysolutions.com`