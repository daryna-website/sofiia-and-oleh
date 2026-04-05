import React from 'react';
export function GallerySection() {
  return (
    <section className="w-full px-2 md:px-[6px] py-12 md:py-24">
      <div className="max-w-[1908px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="bg-beige-300 rounded-[14px] w-full h-[300px] md:h-[464px] transition-transform hover:scale-[1.02] duration-300" />
            <div className="bg-beige-300 rounded-[14px] w-full h-[300px] md:h-[466px] transition-transform hover:scale-[1.02] duration-300" />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="bg-beige-300 rounded-[14px] w-full h-[250px] md:h-[300px] transition-transform hover:scale-[1.02] duration-300" />
            <div className="bg-beige-300 rounded-[14px] w-full h-[350px] md:h-[630px] transition-transform hover:scale-[1.02] duration-300" />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="bg-beige-300 rounded-[14px] w-full h-[250px] md:h-[360px] transition-transform hover:scale-[1.02] duration-300" />
            <div className="bg-beige-300 rounded-[14px] w-full h-[350px] md:h-[570px] transition-transform hover:scale-[1.02] duration-300" />
          </div>
        </div>
      </div>
    </section>);

}