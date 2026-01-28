# Photo Gallery Setup Guide

## How to Add Your Own Photos

The invitation currently has 8 photo placeholder slots with beautiful gradient backgrounds. Here's how to add your actual photos:

### Step 1: Prepare Your Photos

**Recommended Specifications:**
- **Number of photos:** 8-12 photos maximum (for optimal performance)
- **Dimensions:** 800x800 pixels (square format works best)
- **File size:** Under 200KB each
- **Format:** JPG or PNG

**Tools to resize/optimize photos:**
- Online: TinyPNG.com, Squoosh.app, or ImageOptim
- Desktop: Photoshop, GIMP, Preview (Mac), Paint (Windows)

### Step 2: Add Photos to Your Project

1. Create a photos folder:
   ```bash
   mkdir -p /app/frontend/public/gallery
   ```

2. Place your photos in the folder with names like:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
   - etc.

### Step 3: Update the Code

Edit `/app/frontend/src/App.js` and find the photo gallery section (around line 480). Replace the placeholder array with actual photo URLs:

```javascript
{[
  { id: 1, caption: "Niamh at the pool", src: "/gallery/photo1.jpg" },
  { id: 2, caption: "Khalev's splash", src: "/gallery/photo2.jpg" },
  { id: 3, caption: "Best friends forever", src: "/gallery/photo3.jpg" },
  { id: 4, caption: "Pool party fun", src: "/gallery/photo4.jpg" },
  { id: 5, caption: "Water games", src: "/gallery/photo5.jpg" },
  { id: 6, caption: "Summer memories", src: "/gallery/photo6.jpg" },
  { id: 7, caption: "Happy moments", src: "/gallery/photo7.jpg" },
  { id: 8, caption: "Making waves", src: "/gallery/photo8.jpg" }
].map((photo, index) => (
  <motion.div
    key={photo.id}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, rotate: 2 }}
    className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
    data-testid={`gallery-photo-${photo.id}`}
  >
    <img 
      src={photo.src} 
      alt={photo.caption}
      className="w-full h-full object-cover aspect-square"
    />
  </motion.div>
))}
```

### Performance Considerations

**How many photos can you add?**

| Number of Photos | Page Load Time | Performance Impact |
|-----------------|----------------|-------------------|
| 8 photos (200KB each) | ~2-3 seconds | ✅ Excellent |
| 12 photos (200KB each) | ~3-4 seconds | ✅ Good |
| 16 photos (200KB each) | ~5-6 seconds | ⚠️ Moderate |
| 20+ photos | ~8+ seconds | ❌ Slow |

**Best Practice:**
- **8-12 photos** is the sweet spot
- Keep each photo under 200KB
- Use lazy loading for more photos (already built-in with Framer Motion)

### Alternative: Use External Image Hosting

If you want to use more photos without affecting load times, consider:
- **Google Photos** (get shareable links)
- **Imgur** (free image hosting)
- **Cloudinary** (CDN with automatic optimization)

Just replace the `src` with the external URL:
```javascript
{ id: 1, caption: "Pool fun", src: "https://your-image-host.com/photo1.jpg" }
```

### Testing After Adding Photos

1. Refresh the page: `http://localhost:3000`
2. Check the gallery section
3. Verify photos load correctly
4. Test on mobile view

## Need Help?

If photos aren't showing:
1. Check file paths are correct
2. Ensure photos are in `/app/frontend/public/gallery/`
3. Clear browser cache and refresh
4. Check browser console for errors (F12)
