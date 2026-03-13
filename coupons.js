// ============================================================
//  COUPONS.JS — Central Coupon Manager
//  Edit this file to manage coupons for ALL hotels
//
//  HOW TO USE:
//  - Add/remove coupons in the COUPONS object below
//  - All coupons are shown as a clickable offers board
//  - urgencyMessage is shown at the top right of the board
//
//  COUPON TYPES:
//  - type: 'flat'    → fixed rupee discount  (e.g. ₹100 off)
//  - type: 'percent' → percentage discount   (e.g. 5% off)
//
//  TO ADD A NEW HOTEL IN FUTURE:
//  - Add a new entry under COUPON_CONFIG with the hotel's key
//  - That hotel's page will automatically load its own coupons
// ============================================================

const COUPON_CONFIG = {

  // ── HOTEL HARSHDEEP ──────────────────────────────────────
  harshdeep: {

    // Shown at top right of the offers board — change anytime
    urgencyMessage: '🕐 Valid today only!',

    // All coupons shown as clickable cards to the customer
    // Add/remove/edit freely — changes reflect instantly on website
    COUPONS: {
      'HARSHDEEP100': {
        type: 'flat',
        value: 100,
        label: '₹100 off',
        description: 'Special booking discount'
      },
      'PILGRIM50': {
        type: 'flat',
        value: 50,
        label: '₹50 off',
        description: 'Pilgrim special offer'
      },
      'BABA100': {
        type: 'flat',
        value: 100,
        label: '₹100 off',
        description: 'Shyam Baba blessing deal'
      },
      'WELCOME5': {
        type: 'percent',
        value: 5,
        label: '5% off',
        description: 'First time booker offer'
      },
    }
  },

  // ── ADD MORE HOTELS HERE IN FUTURE ───────────────────────
  // hotel2: {
  //   urgencyMessage: '🔥 Limited rooms available!',
  //   COUPONS: {
  //     'HOTEL2OPEN': { type: 'flat', value: 150, label: '₹150 off', description: 'Grand opening offer' },
  //   }
  // },

};
