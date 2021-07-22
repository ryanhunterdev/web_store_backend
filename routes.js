require('dotenv').config();
const express = require("express");
const products = require('./db/products.json')
const STRIPE_API_SECRET = process.env.STRIPE_API_SECRET
const stripe = require('stripe')(STRIPE_API_SECRET)
const validateCartItems = require('./validateCartItems.js')

module.exports = function getRoutes() {
  const router = express.Router();

  router.get('/products', getProducts)
  router.get('/products/:productName', getProduct)

  router.post('/checkout-sessions', createCheckoutSession)
  router.get('/checkout-sessions/:sessionId', getCheckoutSession)

  return router;
};

async function getCheckoutSession(req, res) {
  const { sessionId } = req.params
  try {
    if (!sessionId.startsWith("cs_")) {
      throw Error('Incorrect checkout session id')
    }
    const checkout_session = await stripe.checkout.sessions.retrieve(
      sessionId,
      { expand: ["payment_intent"]}
    )
    res.status(200).json(checkout_session)
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message })
  }
}

function getProducts(req, res) {
  res.status(200).json({ products })
}

function fixName(string) {
  const regex = /-/g;
  return string.replace(regex, " ")
}

function getProduct(req, res) {
  const { productName } = req.params

  const product = products.find(product => product.name === fixName(productName))
  try {
    if (!product) {
      throw Error(`No product found for name: ${productName}`)
    }
    res.status(200).json({ product });
  } catch (error) {
    return res.status(404).json({ statusCode: 404, message: error.essage })
  }
}

async function createCheckoutSession(req, res) {
  try {
    const cartItems = req.body
    console.log("products:", products, "CART", cartItems);
    const line_items = validateCartItems(products, cartItems)
    

    const origin = process.env.NODE_ENV === 'production' ? req.headers.origin : 'http://localhost:3000'

    const params = {
      submit_type: "pay",
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      line_items,
      success_url: `${origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: origin + '/shop',
      mode: 'payment'
    }
    const checkoutSession = await stripe.checkout.sessions.create(params);
    res.status(200).json(checkoutSession) 

  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message })
  }
} 