import React from 'react';
import './Home.css';
import Product from "./Product";

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Audio/UnrecHeros/Under1499/Under1499_Tallhero_3000x1200._CB636198468_.jpg" alt="" />
                <div className="home_row">
                    <Product
                        id={"111"}
                        title={"Discover your home"}
                        price={549.99}
                        image={"https://images-eu.ssl-images-amazon.com/images/G/31/img21/soumya/OHL/HnK/Discover_Home/CC/PC-CC-758X608._SY304_CB636614722_.jpg\" class=\"landscape-image\" data-a-hires=\"https://images-eu.ssl-images-amazon.com/images/G/31/img21/soumya/OHL/HnK/Discover_Home/CC/379X304._SY608_CB636615541_.jpg"}
                        rating={5}
                    />
                    <Product
                        id={"112"}
                        title="The learn startup"
                        price={29.99}
                        image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                        rating={5}
                    />
                    <Product
                        id={"113"}
                        title={"Best Sellers in Sports, Fitness & Outdoors"}
                        price={156.22}
                        image={"https://m.media-amazon.com/images/I/71mjtedSW-L._AC_SY175_.jpg"}
                        rating={3}
                    />
                    <Product
                        id={"114"}
                        title={"Best Sellers in Grocery & Gourmet Foods"}
                        price={69.99}
                        image={"https://m.media-amazon.com/images/I/71hFwEGKyZL._AC_SY175_.jpg"}
                        rating={4}
                    />
                    <Product
                        id={"115"}
                        title={"Best Sellers in Toys & Games"}
                        price={999.99}
                        image={"https://m.media-amazon.com/images/I/71ML2TRKAUL._AC_SY195_.jpg"}
                        rating={2}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id={"116"}
                        title={"Automotive essentials | Up to 60% off"}
                        price={156000.22}
                        image={"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg"}
                        rating={4}
                    />
                    <Product
                        id={"117"}
                        title={"Up to 40% off | Glassware & dinnerware sets from local shops"}
                        price={179.99}
                        image={"https://m.media-amazon.com/images/I/51QaedulJxL._AC_SY200_.jpg"}
                        rating={3}
                    />
                    <Product
                        id={"118"}
                        title={"Up to 60% off | Professional tools & more"}
                        price={949.99}
                        image={"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCCC/cc_379x304-01._SY304_CB625511053_.jpg"}
                        rating={5}
                    />
                    <Product
                        id={"119"}
                        title={"All come in a simple decent gift box, includes a folding chess board, 32 chess pieces and also beginner's guide"}
                        price={99.99}
                        image={"https://images-eu.ssl-images-amazon.com/images/G/31/SnS/X-site/2022winter/XCM_Manual_ORIGIN_1402790_2138292_4419909_IN_SNS_GW_Spring_379x304_1X._SY304_CB624224587_.jpg"}
                        rating={3}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id={"120"}
                        title={"THE ULTIMATE COMPUTER GLASSES FOR EYE PROTECTION | Our blue light filter glasses for men and women are upgraded computer glasses crafted to help you adapt to your digital lifestyle."}
                        price={199.99}
                        image={"https://m.media-amazon.com/images/I/61Q272uAlQL._AC_SY200_.jpg"}
                        rating={4}
                    />
                    <Product
                        id={"121"}
                        title={"SMART ORTHO TECHNOLOGY: SmartGRID ergonomically adjusts to any body type by providing the utmost support to your spine"}
                        price={1189.99}
                        image={"https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Furn_1x._SY116_CB627275939_.jpg"}
                        rating={4}
                    />
                    <Product
                        id={"122"}
                        title={"Enjoy the scrumptious taste of mango, banana, pineapple, guava, jamun and bael, that has been squeezed into each pack of B Natural Mixed Fruit"}
                        price={89.99}
                        image={"https://m.media-amazon.com/images/I/71F+Yls8enL._AC_SY200_.jpg"}
                        rating={3}
                    />
                </div>
            </div>
        </div>
    )
}
export default Home
