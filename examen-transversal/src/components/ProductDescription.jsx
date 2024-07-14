import React from "react";

const ProductDescription = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Descripcion
        </button>
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          cuidados
        </button>
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Guia Tallas
        </button>
      </div>
      <div>
        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dolorem
          consectetur quam odit eum rerum delectus, nam optio nobis, error
          voluptatem provident, esse assumenda qui asperiores neque eius veniam
          possimus!
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          quod dolore ex odio vel error nobis ullam illo accusantium tenetur in
          dolorum molestias iusto, assumenda facilis nisi, quam labore. Enim.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
