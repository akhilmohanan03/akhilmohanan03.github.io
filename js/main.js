import { preloadImages, preloadFonts } from '../utils';
import GalleryController from './galleryController';
import { gsap } from 'gsap';

// Preload images and fonts
Promise.all([preloadImages('.gallery__item-imginner'), preloadFonts('lty4rfv')]).then(() => {
    // Remove loader (loading class)
    document.body.classList.remove('loading');

    // Initialize custom cursor
    const cursor = new Cursor(document.querySelector('.cursor'));

    // Initialize the GalleryController
    new GalleryController(document.querySelector('.gallery'));

  
});

