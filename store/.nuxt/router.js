import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5e01b1b0 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "pages/Category" */))
const _58acbab4 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _dbdd90b6 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "" */))
const _30c089b0 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _20601918 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _4d4481ca = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _c86e4410 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _41df2c93 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "pages/Checkout/Billing" */))
const _3ee302c4 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "pages/Checkout/Payment" */))
const _39c09c46 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "pages/Checkout/Shipping" */))
const _234e67ed = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "pages/Checkout/ThankYou" */))
const _78bdec9c = () => interopDefault(import('..\\pages\\ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _8ddc0c82 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "" */))
const _66a7ae11 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _186d271f = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _4b7d173e = () => interopDefault(import('..\\pages\\MyAccount\\AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _4e39dc86 = () => interopDefault(import('..\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _28254347 = () => interopDefault(import('..\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _3860fb84 = () => interopDefault(import('..\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _4865ebee = () => interopDefault(import('..\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _e02e6540 = () => interopDefault(import('..\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _13a61ce5 = () => interopDefault(import('..\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _28dd1c05 = () => interopDefault(import('..\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _39e818a6 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "pages/Product" */))
const _46b60f9e = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _ba6e3d82 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "" */))
const _d43b1344 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _5e01b1b0,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _58acbab4,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _dbdd90b6,
      name: "billing___en"
    }, {
      path: "payment",
      component: _30c089b0,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _20601918,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _4d4481ca,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _c86e4410,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _41df2c93,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _3ee302c4,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _39c09c46,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _234e67ed,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _78bdec9c,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _8ddc0c82,
    name: "home___de"
  }, {
    path: "/Home",
    component: _66a7ae11,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _186d271f,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _4b7d173e,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _4e39dc86,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _28254347,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _3860fb84,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _4865ebee,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _e02e6540,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _13a61ce5,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _28dd1c05,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _39e818a6,
    name: "Product___en"
  }, {
    path: "/de/Category",
    component: _5e01b1b0,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _58acbab4,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _dbdd90b6,
      name: "billing___de"
    }, {
      path: "payment",
      component: _30c089b0,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _20601918,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _4d4481ca,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _c86e4410,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _41df2c93,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _3ee302c4,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _39c09c46,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _234e67ed,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _78bdec9c,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _66a7ae11,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _186d271f,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _4b7d173e,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _4e39dc86,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _28254347,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _3860fb84,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _4865ebee,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _e02e6540,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _13a61ce5,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _28dd1c05,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _39e818a6,
    name: "Product___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _46b60f9e,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _ba6e3d82,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _d43b1344,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _46b60f9e,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _ba6e3d82,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _d43b1344,
    name: "category___en"
  }, {
    path: "/",
    component: _8ddc0c82,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
