# Pool Party Invitation - Audio Setup Instructions

## Background Music Not Playing?

The invitation website includes a music toggle button, but external audio URLs are being blocked by the browser or network restrictions.

### Solution: Add Your Own Music File

1. **Find a royalty-free summer/pool party music file** (MP3 format recommended)
   - Suggested sources:
     - YouTube Audio Library (free)
     - Incompetech (free with attribution)
     - Bensound (free with attribution)
     - Local music files you own

2. **Add the music file to your project:**
   - Place your MP3 file in `/app/frontend/public/` folder
   - For example: `/app/frontend/public/pool-party-music.mp3`

3. **Update the audio source in the code:**
   - Edit `/app/frontend/src/App.js`
   - Find the `<audio>` tag (around line 70)
   - Change the source to: `<source src="/pool-party-music.mp3" type="audio/mpeg" />`

4. **Test the music:**
   - Reload the page
   - Click the music button (bottom right corner)
   - The music should now play!

### Current Music Button Status
✅ Button is visible and clickable
✅ Toggle functionality works (mute/unmute)
⚠️ No audio file is currently loaded (needs your own music file)

### Alternative: Remove Music Feature
If you don't want background music, you can simply remove the music button by commenting out or deleting the music button code in `/app/frontend/src/App.js` (lines 70-85 for audio tag and lines 87-98 for the button).
