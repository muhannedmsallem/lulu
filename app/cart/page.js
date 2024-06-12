"use client";

import { useEffect, useState } from 'react';
import { client, urlFor } from '../../sanity';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(storedCart);
      setIsLoading(false);
    };

    fetchCart();
  }, []);

  const getLocation = (e) => {
    if (e) {
      e.preventDefault(); // Prevent default form submission
    }
  
    navigator.geolocation.getCurrentPosition(function(position) {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  };  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const confirmRemoveFromCart = (index) => {
    if (confirm('هل أنت متأكد أنك تريد إزالة هذا العنصر من سلة التسوق؟')) {
      removeFromCart(index);
    }
  };
  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + (product.price * (product.quantity || 1)), 0);
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    // Construct Google Maps URL if location is available
    const locationUrl = location
      ? `https://www.google.com/maps?q=${location.lat},${location.lon}`
      : '';
  
    const order = {
      _type: 'order',
      name,
      address: locationUrl || address,
      phoneNumber,
      items: cart.map((product, index) => ({
        key: product.index,
        _type: 'orderItem',
        productName: product.title || "منتج بدون اسم",
        productRef: {
          _type: 'reference',
          _ref: product._id,
        },
        quantity: product.quantity || 1,
        price: product.price,
        totalPrice: product.price * (product.quantity || 1),
      })),
      totalOrderPrice: calculateTotalPrice(),
      location:locationUrl, // Include location URL in the order object
    };
  
    try {
      const token = 'skMuyw0al2locWT7DGTeGftHSEEIlQcWaykJV8J6qdXxVQrjouuBIEmlFGNTBOWuI0LFmIrRMN3RjEQsbFThTGkG9UqLKbm8aZncweW8nK17NSwco4hU9DNU0mxMSyrKFs2OObhyfoow1MtNlWQsoSKthTquglxVauiK8ecpCF3cgIO2pbZT';
      await client.create(order, { token });
      localStorage.removeItem('cart');
      setCart([]);
      setOrderPlaced(true);
      console.log('تم تقديم الطلب بنجاح');
    } catch (error) {
      console.error('خطأ في إنشاء الطلب:', error);
    }
  };

  const closePopup = () => {
    setOrderPlaced(false);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 rtl">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          {orderPlaced && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">تم تقديم الطلب بنجاح!</h2>
                <p className="mb-4">شكرًا على الشراء.</p>
                <button
                  onClick={closePopup}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  إغلاق
                </button>
              </div>
            </div>
          )}
          {!orderPlaced && (
            <>
              <h1 className="text-black text-2xl font-bold mb-4">سلة التسوق الخاصة بك</h1>
              {cart.length === 0 ? (
                <div className="text-center mt-8">سلة التسوق الخاصة بك فارغة.</div>
              ) : (
                <>
                
                  <div className="grid gap-4">
                    {cart.map((product, index) => (
                      <div key={index} className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-4 mb-4 md:mb-0">
  <div className="flex md:flex-row flex-row-reverse items-center w-full">
    {product.images && product.images[0] ? (
      <img
        src={urlFor(product.images[0]).width(100).height(130).url()}
        alt={product.name}
        className="w-24 h-34 rounded-lg mr-4 mb-4 md:mb-0 md:mr-4"
      />
    ) : (
      <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg mr-4 mb-4 md:mb-0 md:mr-4">
        لا توجد صورة
      </div>
    )}
    <div className="flex-grow text-right">
      <h2 className="text-black text-lg mb-2">الإسم: {product.title || "منتج بدون اسم"}</h2>
      <h2 className="text-black text-lg mb-2">الحجم: {product.size || ""}</h2>
      <p className="text-black mb-2">السعر: {product.price || "غير متوفر"} دينار</p>
      <p className="text-black mb-2">الكمية: {product.quantity || 1}</p>
      <p className="text-black mb-2">الإجمالي: ${product.price * (product.quantity || 1)}</p>
      <button
        onClick={() => confirmRemoveFromCart(index)}
        className="text-red-500 mt-2"
      >
        إزالة
      </button>
    </div>
  </div>
</div>

                    ))}
                  </div>

                  <div className="mt-8 text-right">
                    <h2 className="text-black font-bold">الإجمالي: ${calculateTotalPrice()}</h2>
                  </div>
                  <form onSubmit={handleOrderSubmit} className="mt-8">
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">الاسم</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                    {location? <h1 className='text-2x1 text-green-700'>تم إختيار موقعك بنجاح</h1> : 
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">العنوان</label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                                          </div>}

                                        <div className="pt-5 pb-5">
                                        <button
                        onClick={getLocation}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        أو إرسال موقعك الحالي
                      </button>
    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">رقم الهاتف</label>
                      <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      تقديم الطلب
                    </button>
                  </form>
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartPage;
