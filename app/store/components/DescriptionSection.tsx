"use client";

import React, { useState } from "react";

const DescriptionSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full max-w-6xl mx-auto bg-[#181818] rounded-2xl p-6 md:p-10 mb-8 text-white text-right rtl relative overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 font-morabba text-white">قهوه روبوستا</h2>
      <div className={expanded ? "" : "relative max-h-40 overflow-hidden transition-all duration-300"}>
        <p className="font-yekan text-base leading-8 mb-4 text-gray-200">
          قهوه نوشیدنی مورد علاقه افراد زیادی است و در ابتدا به صورت گیاه قهوه به وجود می‌آید. قهوه روبوستا در حدود ۲۵ تا ۴۰ درصد تولید قهوه جهان را به خود اختصاص می‌دهد. قهوه روبوستا از دانه گیاه کانفورا به دست می‌آید. قهوه روبوستا دارای طعم تلخ‌تر و اسیدیته پایین‌تری است و همچنین این نوع قهوه برای بلند و ترکیب کردن دانه‌ها استفاده می‌شود و به دلیل وجود کافئین پایین‌تر در دانه‌های عربیکا و بادی کمتر آنها برای ایجاد تعادل در فنجان قهوه و ایجاد فوم نهایی قهوه به کار می‌رود.
        </p>
        {expanded && (
          <>
            <p className="font-yekan text-base leading-8 mb-4 text-gray-200">
              گیاه قهوه روبوستا به نسبت عربیکا دارای مقاومت بیشتری نسبت به تغییرات آب و هوایی است. همچنین در ارتفاعات پایین‌تری با حداکثر ارتفاع ۸۰۰ متر از سطح دریا رشد می‌کند. همین امر باعث می‌شود قیمت پایینی نیز داشته باشد.
            </p>
            <p className="font-yekan text-base leading-8 mb-4 text-gray-200">
              در ضمن قهوه روبوستا باعث ایجاد فوم غلیظ بر روی اسپرسو می‌شود. قهوه روبوستا دارای کافئین بالاتری به نسبت قهوه عربیکا است و مناسب دوستداران قهوه با کافئین بالا است و وجود کافئین بیشتر در دانه‌های روبوستا افزایش هوشیاری و تمرکز بیشتری را به مصرف کننده این کافئین می‌دهد. در ضمن می‌دانید که کافئین بیشتر تاثیر زیادی روی چربی سوزی و افزایش متابولیسم بدن نیز دارد در ضمن عملکرد فیزیکی بدن را نیز بهبود می‌دهد.
            </p>
            <p className="font-yekan text-base leading-8 text-gray-200 mb-8">
              میزان اسیدیته و قند دانه‌های قهوه روبوستا نسبت به عربیکا کمتر است و دانه‌ها تا حدودی گردتر هستند. تعدادی از کشورها همچنین به دلیل مقاومت بالا، هزینه تولید پایین‌تر و عملکرد نزدیک به عربیکا، اقدام به کشت روبوستا می‌کنند.
            </p>
          </>
        )}
        {/* Shadow effect for collapsed state */}
        {!expanded && (
          <div
            className="pointer-events-none absolute left-0 right-0 bottom-0 h-20"
            style={{
              background: "linear-gradient(180deg, rgba(24,24,24,0) 0%, #181818 90%)",
            }}
          />
        )}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-[#00C16A] hover:bg-[#009e53] text-white font-yekan px-8 py-3 rounded-full transition flex items-center gap-2 text-lg font-bold"
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          {expanded ? "بستن" : "مطالعه بیشتر"}
          <span className="text-2xl leading-none">{expanded ? "↑" : "↓"}</span>
        </button>
      </div>
    </section>
  );
};

export default DescriptionSection;
