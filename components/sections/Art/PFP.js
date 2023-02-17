import React, { useEffect, useState } from "react";
import TekoHeading from "../../TekoHeading";
import MainButton from "../../MainButton";

const PFP = () => {
  const getTokenURIs = (ids) => {
    let uri =
      "https://fafz.mypinata.cloud/ipfs/QmVUgP9fnFh9R6HF3eMP3ro2fxvv76fQsrBud7yyPDAMdQ/";
    return ids?.map((id) => `${uri}${id}.png`);
  };

  const [ids, setIds] = useState([]);
  useEffect(() => {
    let randomIds = [];
    for (let i = 0; i < 21; i++) {
      randomIds.push(Math.floor(Math.random() * 10000) + 1);
    }
    setIds(randomIds);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row border-b border-t border-black dark:border-white px-[1.6rem] lg:px-0">
      <div className="min-h-[50%] w-full lg:max-h-screen flex justify-center items-center flex-1 overflow-y-hidden">
        <div className="grid grid-cols-3 gap-[2rem] w-[60%]">
          {ids?.map((id) => {
            return <GUImage key={id} id={id} />;
          })}
        </div>
      </div>
      <div className="min-h-[50%] w-full lg:min-h-screen flex flex-col justify-center items-center flex-1 ">
        <div className="flex flex-col gap-[2.5rem] w-full lg:w-[60%] ">
          <h2
            className={`text-[2.3rem] md:text-[3rem] lg:text-[4.0rem] xl:text-[4.5rem] xxl:text-[5.5rem] leading-none font-didot flex flex-col `}
          >
            {" "}
            <span className="whitespace-nowrap z-10">
              THE BEST <TekoHeading>PFP</TekoHeading>
            </span>
          </h2>
          <p className="text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Elementum nisi quis eleifend quam adipiscing. Mauris nunc congue
            nisi vitae suscipit tellus.
          </p>
          <MainButton page={false} styles=" mb-0">
            MARKETPLACE
          </MainButton>
        </div>
      </div>
    </section>
  );
};

export default PFP;

const GUImage = ({ id }) => {
  const [isOverlay, setIsOverlay] = useState(false);
  return (
    <div className="w-full aspect-square relative cursor-pointer flex justify-center items-center">
      <div
        className={`w-full aspect-square rounded-full bg-center bg-contain z-1 relative transition-all duration-300 ${
          isOverlay ? "grayscale" : ""
        }`}
        style={{
          backgroundImage: `url(https://fafz.mypinata.cloud/ipfs/QmVUgP9fnFh9R6HF3eMP3ro2fxvv76fQsrBud7yyPDAMdQ/${id}.png)`,
        }}
        onMouseEnter={() => {
          setIsOverlay(!isOverlay);
        }}
      >
        {isOverlay && (
          <div
            onMouseLeave={() => setIsOverlay(!isOverlay)}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-300 z-10"
          >
            <a
              href={`https://portal.genuineundead.io/collections/0x209e639a0ec166ac7a1a4ba41968fa967db30221/tokens/${id}`}
              className="text-white font-teko text-[2rem] font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              BUY
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
