import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import _ from 'lodash';

type Instagram = {
  caption: string;
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
};

export async function getStaticProps({ locale }: any) {
  const res = await fetch(
    `https://graph.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,thumbnail_url,caption&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`
  );
  const { data } = await res.json();
  return {
    props: {
      instagram: data,
    },
  };
}
const About = ({ instagram }: any) => {
  // const [[instagram1, instagram2], setInstagram] = useState<any>([[], []]);

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch(
  //       `https://graph.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,thumbnail_url,caption&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`
  //     );
  //     const { data } = await res.json();
  //     const exceptionNull = [
  //       Array(10)
  //         .fill(null)
  //         .map((_) => ({ media_url: '/TODO:EmptyImage', caption: 'media' })),
  //       Array(10)
  //         .fill(null)
  //         .map((_) => ({ media_url: '/TODO:EmptyImage', caption: 'media' })),
  //     ];
  //     setInstagram(
  //       data
  //         ? _.chunk(
  //             _.shuffle(_.filter(data, (item) => item.media_type !== 'VIDEO')),
  //             _.round(data.length / 2)
  //           )
  //         : exceptionNull
  //     );
  //   })();
  // }, []);

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="h-[100vh] px-[300px]">
        <div className="flex justify-start ">
          <div className="w-[70%] flex  pt-[100px] relative">
            <h1
              style={{ fontSize: '14vw' }}
              className="z-10 relative -right-[10px] font-bodoniModa font-midium"
            >
              About
            </h1>
            <div className=" bg-slate-700 h-[500px] w-[400px] absolute -right-[200px]"></div>
          </div>
        </div>
        <div className="w-[50%] pt-[30px]">
          <p style={{ fontSize: 25 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
          </p>
          <p style={{ fontSize: 25 }} className="mt-[20px]">
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
      </div>

      <div>
        <h2
          className="mb-[100px] bg-black text-white px-[300px] py-[10px]"
          style={{ fontSize: 130 }}
        >
          Services
        </h2>
        <div className="px-[350px]">
          <div>
            <div className="flex justify-between ">
              <div className="w-[45%] h-[400px]  mt-[350px]">
                <div className="flex border-b-2 border-black items-center justify-between">
                  <h3 style={{ fontSize: 100 }} className=" font-bold">
                    02
                  </h3>
                  <h3
                    className="font-yanone font-medium relative top-[15px]"
                    style={{ fontSize: 80 }}
                  >
                    Backend
                  </h3>
                </div>

                <p className="mt-[30px]" style={{ fontSize: 25 }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s Lorem Ipsum is simply
                  dummy text of the printing
                </p>
              </div>
              <div className="w-[45%] h-[400px]  ">
                <div className="flex border-b-2 border-black items-center justify-between">
                  <h3 style={{ fontSize: 100 }} className=" font-bold">
                    01
                  </h3>
                  <h3
                    className="font-yanone font-medium relative top-[15px]"
                    style={{ fontSize: 80 }}
                  >
                    Frontend
                  </h3>
                </div>

                <p className="mt-[30px]" style={{ fontSize: 25 }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s Lorem Ipsum is simply
                  dummy text of the printing
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-[-100px] ">
              <div className="w-[45%] h-[400px]  mt-[350px]">
                <div className="flex border-b-2 border-black items-center justify-between">
                  <h3 style={{ fontSize: 100 }} className=" font-bold">
                    04
                  </h3>
                  <h3
                    className="font-yanone font-medium relative top-[15px]"
                    style={{ fontSize: 80 }}
                  >
                    Management
                  </h3>
                </div>

                <p className="mt-[30px]" style={{ fontSize: 25 }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s Lorem Ipsum is simply
                  dummy text of the printing
                </p>
              </div>
              <div className="w-[45%] h-[400px]  ">
                <div className="flex border-b-2 border-black items-center justify-between">
                  <h3 style={{ fontSize: 100 }} className=" font-bold">
                    03
                  </h3>
                  <h3
                    className="font-yanone font-medium relative top-[15px]"
                    style={{ fontSize: 80 }}
                  >
                    Deploy
                  </h3>
                </div>

                <p className="mt-[30px]" style={{ fontSize: 25 }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s Lorem Ipsum is simply
                  dummy text of the printing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[250px]  w-full">
        <div className="h-full w-full">
          <h2
            className="bg-black text-white px-[300px] py-[10px] "
            style={{ fontSize: 130 }}
          >
            Life Outside Work
          </h2>

          <div className="w-full h-full z-0 relative overflow-hidden pt-[100px]">
            {/* <div
              className="h-[300px] bottom-[130px] absolute left-0 flex-wrap"
              style={{
                transform: 'rotate(-23deg)',
                width: 'calc(100% + 400px)',
              }}
            >
              <div className="relative inline-flex gap-[20px]">
                {instagram1.map((item: Instagram, key: number) => (
                  <div
                    key={key}
                    className="w-[300px] h-[300px] border-2 overflow-hidden border-black rounded-full flex"
                  >
                    <Image
                      src={item.media_url}
                      alt={item.caption}
                      width={300}
                      height={300}
                      style={{ rotate: '23deg' }}
                      priority={false}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="h-[300px] bottom-[-200px] absolute left-0 flex-wrap"
              style={{
                transform: 'rotate(-23deg)',
                width: 'calc(100% + 400px)',
              }}
            >
              <div className="relative inline-flex gap-[20px]">
                {instagram2.map((item: Instagram, key: number) => (
                  <div
                    key={key}
                    className="w-[300px] h-[300px] border-2 overflow-hidden border-black rounded-full flex"
                  >
                    <Image
                      src={item.media_url}
                      alt={item.caption}
                      width={300}
                      height={300}
                      style={{ rotate: '23deg' }}
                      priority={false}
                    />
                  </div>
                ))}
              </div>
            </div> */}
            <div className="px-[300px] pb-[400px]">
              <div className="w-[55%]">
                <p style={{ fontSize: 25 }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s Lorem Ipsum is simply
                  dummy
                </p>
                <p style={{ fontSize: 25 }} className="w-[80%] mt-[30px]">
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industrys standard text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
