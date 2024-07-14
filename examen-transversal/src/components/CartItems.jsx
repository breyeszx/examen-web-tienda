import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { TbTrash } from "react-icons/tb";

const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <section className="max_padd_container pt-28">
      <table className="w-full mx-auto">
        <thead>
          <tr className="bg-slate-900/10 regular-18 sm:regular-22 text-start py-12">
            <th className="p-1 py-2">Productos</th>
            <th className="p-1 py-2">Titulo</th>
            <th className="p-1 py-2">Precio</th>
            <th className="p-1 py-2">Cantidad</th>
            <th className="p-1 py-2">Total</th>
            <th className="p-1 py-2">Eliminar</th>
          </tr>
        </thead>
        <tbody className="pt-4">
          {all_products.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <tr
                  key={e.id}
                  className="border-b border-slate-900/20 p-6 medium-14 text-center"
                >
                  <td className="flexCenter">
                    <img
                      src={e.image}
                      alt=""
                      height={43}
                      width={43}
                      className="rounded ring-1 ring-slate-900"
                    />
                  </td>
                  <td className="p-1 py-2">{e.name}</td>
                  <td className="p-1 py-2">{e.price}</td>
                  <td className="p-1 py-2">{cartItems[e.id]}</td>
                  <td className="p-1 py-2">${e.new_price * cartItems[e.id]}</td>
                  <td className="p-1 py-2">
                    <button onClick={() => removeFromCart(e.id)}>
                      <TbTrash />
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <div className="flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md bg-white max-w-[666px]">
        <div className="flex flex-col gap-10 w-full">
          <h4 className="bold-20">Resumen</h4>
          <div>
            <div className="flexBetween">
              <h4 className="medium-16">subtotal</h4>
              <h4 className="text-gray-30 font-semibold">
                ${getTotalCartAmount()}
              </h4>
            </div>
            <hr />
            <div className="flexBetween py-4">
              <h4 className="medium-16">Envio</h4>
              <h4 className="text-gray-30 font-semibold">gratis</h4>
            </div>
            <hr />
            <div className="flexBetween py-4">
              <h4 className="bold-18">Total</h4>
              <h4 className="bold-18">${getTotalCartAmount()}</h4>
            </div>
          </div>
          <button className="btn_dark_rounded">Comprar</button>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
