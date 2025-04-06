
// 'use client';
// import React from 'react';
// import { useCart } from '../context/CartContext';

// const OrderPage = () => {
//   const { cartItems } = useCart();

//   return (
//     <div className="p-6 text-white">
//       <h1 className="text-3xl font-bold mb-4">Your Selected Plans</h1>
//       {cartItems.length === 0 ? (
//         <p>No plans selected.</p>
//       ) : (
//         <ul className="space-y-4">
//           {cartItems.map((item, idx) => (
//             <li key={idx} className="bg-gray-800 mr-10 p-4 rounded-lg">
//               <p><strong>Plan:</strong> {item.plan}</p>
//               <p><strong>Cycle:</strong> {item.billingCycle}</p>
//               <p><strong>Price:</strong> ${item.price}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default OrderPage;


'use client';
import React from 'react';
import { useCart } from '../context/CartContext';

const OrderPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="p-6 text-white min-w-auto">
      <h1 className="text-3xl font-bold mb-4">Your Order <strong className='text-yellow-500'>Summary</strong></h1>
      {cartItems.length === 0 ? (
        <p>No plans selected.</p>
      ) : (
        <ul className="space-y-4 ">
          {cartItems.map((item, idx) => (
            <li key={idx} className="bg-gray-800 mr-10 p-4  rounded-lg">
           <div className='flex justify-between items-center'>
           <div>
              <p><strong>Plan:</strong> {item.plan}</p>
              <p><strong>Price:</strong> ${item.price}</p>
              <p className='text-gray-400'> {item.billingCycle}</p>
              </div>
              <button
                onClick={() => removeFromCart(idx)}
                className="mt-2 px-3 py-1 rounded-md bg-red-600 text-white hover:bg-red-700"
              >
                Remove
              </button>
           </div>
            </li>
            
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderPage;
