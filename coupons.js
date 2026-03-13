// ============================================================
//  COUPONS.JS — Central Coupon Manager
//  Edit this file to manage coupons for ALL hotels
//  
//  HOW TO USE:
//  - Add/remove coupons in the COUPONS object below
//  - Set activeCouponCode to show ONE coupon visibly on the page
//  - Set activeCouponCode to null to hide the coupon banner
//
//  COUPON TYPES:
//  - type: 'flat'    → fixed rupee discount  (e.g. ₹100 off)
//  - type: 'percent' → percentage discount   (e.g. 5% off)
//
//  TO ADD A NEW HOTEL:
//  - Add a new entry under HOTEL_COUPONS with the hotel's key
//  - Set its activeCouponCode and COUPONS list
// ============================================================

const COUPON_CONFIG = {

  // ── HOTEL HARSHDEEP ──────────────────────────────────────
  harshdeep: {

    // The ONE coupon shown visibly on the page to create urgency
    // Set to null to hide the banner
    activeCouponCode: 'HARSHDEEP100',

    // Urgency message shown with the active coupon
    urgencyMessage: 'Book today and save instantly!',

    // All valid coupon codes for this hotel
    COUPONS: {
      'HARSHDEEP100': { type: 'flat',    value: 100, label: '₹100 off',      description: 'Special booking discount' },
      'PILGRIM50':    { type: 'flat',    value: 50,  label: '₹50 off',       description: 'Pilgrim special offer'    },
      'BABA100':      { type: 'flat',    value: 100, label: '₹100 off',      description: 'Shyam baba blessing deal' },
      'WELCOME5':     { type: 'percent', value: 5,   label: '5% off',        description: 'First time booker offer'  },
    }
  },

  // ── ADD MORE HOTELS HERE IN FUTURE ───────────────────────
  // example_hotel: {
  //   activeCouponCode: 'NEWHOTEL50',
  //   urgencyMessage: 'Limited time offer!',
  //   COUPONS: {
  //     'NEWHOTEL50': { type: 'flat', value: 50, label: '₹50 off', description: 'Opening offer' },
  //   }
  // },

};
