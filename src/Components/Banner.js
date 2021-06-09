import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
    return (
        <div className='relative'>
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators = {false}
                showThumbs ={false}
                interval ={5000}
            >
                <div>
                <img loading = "lazy" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt="" />

                </div>

                <div>
                <img loading = "lazy" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg" alt="" />
                </div>

                <div>
                <img loading = "lazy" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" alt="" />
                </div>
                <div>
                <img loading = "lazy" src="https://images.squarespace-cdn.com/content/v1/59fada44ace8647a7ae9f0ed/1576830629985-HQ0BX7JR9H3MDGWF7L6Z/ke17ZwdGBToddI8pDm48kDLNi4VuRPPv4o6xvaQaV48UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dgPj-jb3FIxaFObZnptc5ZqmTvRvnyT87dNVz9QRODYYMW9u6oXQZQicHHG1WEE6fg/1500+x+600+LS_Z00601-1_Z00602-1_Z00603-1_Z00604-1_Z00605-1_FOODIE_black_props.jpg?format=1500w" alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
