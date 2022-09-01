require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

exports.handler = async(event) => {
    try{
      const { amount, name} = JSON.parse(event.body)

      const customer = await stripe.customers.create({
        name: name,
        address: {
          line1: '510 Townsend St',
          postal_code: '98140',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
        },
      });

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
        payment_method_types:["card"],
        description: 'test',
        customer: customer.id
      })

      

      return{
        statusCode: 200,
        body: JSON.stringify({ paymentIntent, customer })
      }

    }catch(error){
      console.log(error)
      return{
        statusCode: 400,
        body: JSON.stringify({error})
      }
    }
}