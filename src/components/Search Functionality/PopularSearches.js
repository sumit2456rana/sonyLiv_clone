import React, { useEffect, useState } from "react"
const data = [
  "https://images.slivcdn.com/videoasset_images/kbc23_3_portrait_thumb_5.jpg?w=194&q=high&fr=webp",
  "https://images.slivcdn.com/videoasset_images/scam2003thetelgistory_set5_hindi_multilang_18sept_new_show_portrait_thumb.jpg?w=194&q=high&fr=webp",
  "https://images.slivcdn.com/videoasset_images/barsatein_2_portrait_thumb_dated_1.jpg?w=194&q=high&fr=webp",
  "https://images.slivcdn.com/videoasset_images/balhs3_2_portrait_thumb.jpg?w=194&q=high&fr=webp",
  "https://images.slivcdn.com/videoasset_images/tmkoc22_portrait_thumb.jpg?w=194&q=high&fr=webp",
  "https://images.slivcdn.com/videoasset_images/kathaankhahee_portrait_thumb.jpg?w=194&q=high&fr=webp",
  "https://images.slivcdn.com/videoasset_images/tkss_2022_23_portrait_thumb_plumber.jpg?w=194&q=high&fr=webp",
  "https://images.slivcdn.com/videoasset_images/balveers2_portrait_thumbset1set1.jpg?w=194&q=high&fr=webp",
  "https://images.slivcdn.com/videoasset_images/ibd_portrait_thumb_1.jpg?w=194&q=high&fr=webp",
  "https://images.slivcdn.com/videoasset_images/2018_oscar_malayalam_multi_portrait_thumb.jpg?w=194&q=high&fr=webp",
  "https://images.slivcdn.com/videoasset_images/kafas_set5_multilang_24june_portrait_thumb.jpg?w=194&q=high&fr=webp",
  "https://images.slivcdn.com/portrait_thumb/WaglekiDuniya_Portrait_Thumb.jpg?w=194&q=high&fr=webp",
  "https://images.slivcdn.com/videoasset_images/hrnrh_portrait_thumb.jpg?w=194&q=high&fr=webp",
  "https://images.slivcdn.com/portrait_thumb/Pushpa1_Portrait_Thumb.jpg?w=194&q=high&fr=webp",
]
function PopularSearches() {
  // const [movies , setMovies] = useState([]);
  // async function fetchData() {
  //   let url = "https://academics.newtonschool.co/api/v1/ott/show?filter={\"type\" : \"web series\"}";
  //   const resp = await fetch(url , {
  //     headers:{
  //       'projectId' : "ub5yjy8wj6ez",
  //     }
  //   })

  //   const data = await resp.json();
  //   // console.log(data);
  //   setMovies(data.data);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, [])
  return (
    <div>
      <div className="categories_header">
        <h2>Popular Searches</h2>
      </div>
      <div className="popSearches_container">
        {
          data.map((e , i) => (
             <img src={e} key={i} /> 
          ))
        }
      </div>
    </div>
  )
};

export default PopularSearches;
