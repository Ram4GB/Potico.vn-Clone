/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import MainLayout from "../components/MainLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProduct from "../components/ProductCard";
import ProductSection from "../components/ProductSection";
import data from "../data";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="container mt-2">
        <div className="row d-flex align-items-center">
          <div className="col-lg-9 col-xl-6">
            <Slider
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={false}
              autoplay={true}
            >
              <div>
                <img
                  className="carousel-image h-md-auto"
                  src="/carousel/2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img className="carousel-image" src="/carousel/1.jpg" alt="" />
              </div>
              <div>
                <img className="carousel-image" src="/carousel/3.jpg" alt="" />
              </div>
            </Slider>
          </div>
          <div className="col-lg-0 d-none d-xl-block col-xl-3">
            <div className="banner">
              <div className="d-flex flex-column justify-content-between align-items-center">
                <img
                  className="banner__image"
                  style={{ width: "100%" }}
                  src="/banner/747_Q3IeBYVpVrItpM665wMOuqJBi.jpg"
                  alt=""
                />
                <img
                  className="banner__image"
                  style={{ width: "100%" }}
                  src="/banner/747_WChe4dTHDIJPzB0KISxVsooSt.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-none d-lg-block col-xl-3">
            <CardProduct item={data[0]}></CardProduct>
          </div>
        </div>
      </div>

      <div className="breakline"></div>

      <div className="container">
        <ProductSection
          title="B??n ch???y nh???t H?? N???i"
          startIndex={0}
          total={12}
        ></ProductSection>
      </div>

      <div className="container">
        <ProductSection
          title="Ch??c M???ng Ng??y Ph??? N??? Vi???t Nam 20.10"
          startIndex={12}
          total={12}
        ></ProductSection>
      </div>

      <div className="container">
        <ProductSection
          title="T???t nghi???p"
          startIndex={24}
          total={6}
        ></ProductSection>
      </div>

      <div className="container">
        <ProductSection
          title="S???n Ph???m M???i H?? N???i"
          startIndex={30}
          total={6}
        ></ProductSection>
      </div>

      <div className="container">
        <ProductSection
          title="Gi??? hoa thanh l???ch"
          startIndex={36}
          total={6}
        ></ProductSection>
      </div>

      <div className="container">
        <ProductSection
          title="H???p hoa ?????c ????o"
          startIndex={42}
          total={6}
        ></ProductSection>
      </div>

      <div className="container">
        <ProductSection
          title="Qu?? t???ng sinh nh???t H?? N???i"
          startIndex={48}
          total={6}
        ></ProductSection>
      </div>

      <div className="container">
        <ProductSection
          title="Qu?? t???ng ?? ngh??a"
          startIndex={54}
          total={12}
        ></ProductSection>
      </div>
    </MainLayout>
  );
};

export default Home;
