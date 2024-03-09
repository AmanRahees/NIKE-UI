import { useState } from "react";
import ShoeCard from "./ShoeCard";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";

function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="Home"
      className="flex xl:flex-row flex-col justify-center items-center gap-10 max-container min-h-screen"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28">
        <p className="text-xl text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-slate-gray text-lg mt-6 mb-14 leading-8 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <button className="flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
          Shop Now
          <img src={arrowRight} alt="" className="ml-2 rounded-full w-5 h-5" />
        </button>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((statistic, idx) => (
            <div className="" key={idx}>
              <p className="text-4xl font-bold">{statistic.value}</p>
              <p className="leading-7 text-slate-gray">{statistic.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt=""
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, idx) => (
            <div className="" key={idx}>
              <ShoeCard
                imageURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImage={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
