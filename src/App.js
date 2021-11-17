import React from 'react';
import Card from './card';
import './App.css';

function App() {

  let details = [
    {
      packageName : "FREE",
      price : 0,
      currency : "$",
      period : "month",
      features : [
        {
          name : "Single User",
          isEnabled : true
        },
        {
          name : "5GB Storage",
          isEnabled : true
        },
        {
          name : "Unlimited Public Projects",
          isEnabled : true
        },
        {
          name : "Community Access",
          isEnabled : true
        },
        {
          name : "Unlimited Private Projects",
          isEnabled : false
        },
        {
          name : "Dedicated Phone Support",
          isEnabled : false
        },
        {
          name : "Free Subdomain",
          isEnabled : false
        },
        {
          name : "Monthly Status Reports",
          isEnabled : false
        }
      ] 
    },
    {
      packageName : "PLUS",
      price : 9,
      currency : "$",
      period : "month",
      features : [
        {
          name : "5 Users",
          isEnabled : true,
          isBold : true
        },
        {
          name : "50GB Storage",
          isEnabled : true
        },
        {
          name : "Unlimited Public Projects",
          isEnabled : true
        },
        {
          name : "Community Access",
          isEnabled : true
        },
        {
          name : "Unlimited Private Projects",
          isEnabled : true
        },
        {
          name : "Dedicated Phone Support",
          isEnabled : true
        },
        {
          name : "Free Subdomain",
          isEnabled : true
        },
        {
          name : "Monthly Status Reports",
          isEnabled : false
        }
      ]
    },
    {
      packageName : "PRO",
      price : 49,
      currency : "$",
      period : "month",
      features : [
        {
          name : "Unlimited Users",
          isEnabled : true,
          isBold : true
        },
        {
          name : "500GB Storage",
          isEnabled : true
        },
        {
          name : "Unlimited Public Projects",
          isEnabled : true
        },
        {
          name : "Community Access",
          isEnabled : true
        },
        {
          name : "Unlimited Private Projects",
          isEnabled : true
        },
        {
          name : "Dedicated Phone Support",
          isEnabled : true
        },
        {
          name : " Unlimited Free Subdomain",
          isEnabled : true,
          isBold : true
        },
        {
          name : "Monthly Status Reports",
          isEnabled : true
        }
      ]
    }
  ]

  let onSubscribe = (plan) => {
    console.log(plan);
    alert (`You have subscribed to ${plan} plan. Thank you!`)
}
  
  return (
    <section class="pricing py-5">
      <div class="container">
      <div class ="row">
        {
          details.map((card) => {
            return <Card data={card} handleSubscribe={onSubscribe}></Card>
          })
        }
      </div>
      </div>
    </section>

  );
}

export default App;
