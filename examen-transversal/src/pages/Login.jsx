import React from "react";

const Login = () => {
  return (
    <section className="max_padd_cpntainer flexCenter flex-col pt-32">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 ring-1 ring-slate-900">
        <h3 className="h3">Registrate</h3>
        <div className="flex flex-col gap-4 mt-7">
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
          <input
            type="email"
            placeholder="Ingresa tu mail"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
        </div>
        <button className="btn_dark_rounded my-5 w-full !rounden-md ">
          {" "}
          Continuar
        </button>
        <p className="text-black font-bold">
          ya tienes una cuenta?{" "}
          <span className="text-secondary underline cursor-pointer">Login</span>
        </p>
        <div className="flexCenter mt-6 gap-3">
          <input type="checkbox" id="" />
          <p>Al continuar acepto los terminos y condiciones de servicio</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
