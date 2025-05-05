import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Blog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const blogPosts = [
    {
      id: 1,
      title: "Day 1: Where the Past Lives On: A Journey to Intramuros and Rizal Park",
      shortDesc: "Exploring historic sites and bonding with classmates at Mall of Asia.",
      fullContent: "After lunch, under the blazing afternoon sun, our class embarked on an educational trip. Our first stop was the historic Intramuros, where we explored Fort Santiago and walked the same grounds where Dr. Jose Rizal spent his final days. The old stone walls and preserved structures transported us to a time when the fight for freedom was still unfolding. From there, we moved to Rizal Park, where the iconic monument stood proudly in the middle of a bustling yet respectful crowd. The stories of Rizal's heroism, paired with the atmosphere of the park, left a lasting impression on all of us. After the meaningful tour, we were dropped off at SM Mall of Asia (MOA) for two hours of free time to explore, relax, and bond with classmates. At 5 PM, we regrouped, boarded the bus, and made our way back to the dormitory, tired but fulfilled. The day gave us not just knowledge from the past, but memories we'll carry for a long time.",
      images: [
        "/day1/day1 (1).jpg", 
        "/day1/day1 (2).jpg", 
        "/day1/day1 (3).jpg", 
        "/day1/day1 (4).jpg", 
        "/day1/day1 (5).jpg", 
        "/day1/day1 (6).jpg"
      ]
    },
    {
      id: 2,
      title: "Day 2: Exploring Subic: Security, Seaports, and Souvenirs",
      shortDesc: "Learning about law enforcement, communications, and enjoying the Freeport Zone.",
      fullContent: "On the second day of our educational tour, we left early in the morning for Subic Bay, carrying only our packed lunches and a strong sense of excitement. Our first stop was the SBMA Law Enforcement Department, where we were welcomed by officers who introduced us to their roles in maintaining security within the Freeport Zone. They shared how teamwork, discipline, and quick decision-making were essential in their line of work. We then proceeded to the SBMA Seaport Department. While we expected to learn about cargo and logistics, the highlight of the visit turned out to be their focus on radio and communications. The staff explained how crucial communication is in coordinating ship movements, responding to emergencies, and ensuring safety across the port. We were shown actual radio equipment and even got a brief demo on how messages are relayed between vessels and control stations. It was a unique look into the behind-the-scenes operations of a busy seaport. After the tour, we gathered in a shaded area to enjoy our packed lunches. Though simple, eating together outdoors added a sense of adventure to the day. Before heading back, we had a quick stop at Duty Free Shopping, where we browsed shelves of imported goods and picked up souvenirs and treats.",
      images: [
        "/day2/day2 (1).jpg", 
        "/day2/day2 (2).jpg", 
        "/day2/day2 (3).jpg", 
        "/day2/day2 (4).jpg", 
        "/day2/day2 (5).jpg", 
        "/day2/day2 (6).jpg", 
        "/day2/day2 (7).jpg", 
        "/day2/day2 (8).jpg",
        "/day2/day2 (9).jpg",
        "/day2/day2 11).jpg"
      ]
    },
    {
      id: 3,
      title: "Day 3: Presidents, Nature, and Pure Fun: A Balanced Day of Learning",
      shortDesc: "Visiting museums and enjoying the thrills of StarCity.",
      fullContent: "On our third day, we explored a different side of learning—culture, leadership, and leisure. We began at the National Museum of Natural History, where we admired stunning exhibits on biodiversity, ecosystems, and the natural wonders of the Philippines. We then visited the Museo ni Manuel Quezon, where we explored the life, achievements, and legacy of one of our former presidents. His leadership and impact became more real to us through the carefully preserved artifacts and stories. Our last stop before lunch was the Museo ng Pampangulong Sasakyan, where we saw the actual presidential cars used through the years. It was amazing to see how these vehicles reflected the times and personalities of past leaders. After returning to the dormitory for a quick rest, the highlight of the evening awaited—StarCity! The laughter, screams, and joy from the rides and games gave us memories we'll never forget. It was the perfect way to balance our minds and hearts with some pure fun.",
      images: [
        "/day3/day3 (1).jpg", 
        "/day3/day3 (2).jpg", 
        "/day3/day3 (3).jpg", 
        "/day3/day3 (4).jpg", 
        "/day3/day3 (5).jpg", 
        "/day3/day3 (6).jpg", 
        "/day3/day3 (7).jpg", 
        "/day3/day3 (8).jpg"
      ]
    },
    {
      id: 4,
      title: "Day 4: Powering Knowledge: A Day of Finance and Innovation",
      shortDesc: "Exploring the Bangko Sentral ng Pilipinas and Hytec Power INC.",
      fullContent: "On the fourth day of our educational trip, we delved into the world of finance and technology. Our first stop was the Bangko Sentral ng Pilipinas (BSP), where we learned about the country's central bank and its crucial role in the economy. Phones were strictly prohibited, and we couldn't take pictures, which gave the experience a unique and serious atmosphere, allowing us to focus entirely on the wealth of knowledge shared by our guides. We were given a tour of the various exhibits showcasing the history of Philippine currency, from ancient bartering systems to modern-day coins and bills. The most memorable part of the visit was when we learned about the security features incorporated into bills to prevent counterfeiting. The importance of monetary policy and how it affects the economy left us with a newfound appreciation for financial institutions and their role in national stability. In the afternoon, we visited Hytec Power INC, a leading company in industrial power solutions. There, we were given an insightful tour of their operations, from the assembly of power equipment to its testing and distribution. It was amazing to see the level of innovation that goes into power generation and distribution systems, and how companies like Hytec help keep industries running smoothly. We were also introduced to the cutting-edge technologies in power solutions that contribute to sustainable energy use in the country. After a full day of learning, we returned to the dormitory to relax and reflect on the complexities of finance and industry.",
      images: [
        "/day4/day4 (1).jpg", 
        "/day4/day4 (2).jpg", 
        "/day4/day4 (3).jpg", 
        "/day4/day4 (4).jpg", 
        "/day4/day4 (5).jpg", 
        "/day4/day4 (6).jpg", 
        "/day4/day4 (7).jpg", 
        "/day4/day4 (8).jpg"
      ]
    },
    {
      id: 5,
      title: "Day 5: Urban Efficiency: Insights into Manila's Transportation and Traffic Management",
      shortDesc: "Learning about LRT operations and MMDA's urban management strategies.",
      fullContent: "Day 5 of our educational trip took us into the heart of Manila's transportation system and urban management. Our first stop was LRT Station 2, where we learned about the importance of the Light Rail Transit (LRT) system in easing traffic and providing an efficient way for commuters to get around Metro Manila. We were given a tour of the station, where we explored its operations and how it connects different parts of the city. The experience gave us a deeper understanding of how public transportation impacts urban life and contributes to the daily grind of millions of commuters. In the afternoon, we headed to the MMDA's new main branch, where we learned about the Metropolitan Manila Development Authority's (MMDA) role in managing the city's traffic, public safety, and environmental efforts. We were briefed on the challenges faced by the MMDA in a fast-growing metropolis like Manila, and how they use technology and planning to alleviate traffic congestion and ensure the safety of citizens. The visit provided us with a closer look at how urban management operates at a large scale and the systems in place to improve city living.",
      images: [
        "/day5/day5 (1).jpg", 
        "/day5/day5 (2).jpg", 
        "/day5/day5 (3).jpg", 
        "/day5/day5 (4).jpg", 
        "/day5/day5 (5).jpg", 
        "/day5/day5 (6).jpg", 
        "/day5/day5 (7).jpg", 
        "/day5/day5 (8).jpg"
      ]
    },
    {
      id: 6,
      title: "Day 6: Exploring the Beauty and Heritage of Baguio City",
      shortDesc: "Visiting iconic Baguio landmarks and experiencing the Night Market.",
      fullContent: "On the sixth day of our educational trip, we left at 1 AM for the cool mountain air of Baguio City. After arriving, we started our day at the famous Strawberry Farm, where we took plenty of pictures and bought some local souvenirs, especially strawberry jams. Next, we visited Bell Temple Church, a serene and beautiful place of worship perched on the mountainside. The peaceful atmosphere and stunning views offered a moment of reflection, while the temple's unique architecture gave us insight into the region's spiritual heritage. After that, we headed to The Mansion, the official summer residence of the President of the Philippines. We toured the grounds and admired its architecture. The next stop was a visit to the Philippine Military Academy (PMA). Here, we learned about the academy's history, mission, and the intense training cadets undergo to prepare for leadership roles in the Armed Forces. Our last stop was Mines View Park, where we were treated to breathtaking panoramic views of the surrounding mountains and valleys. The park's view deck offered perfect photo opportunities, and we took in the stunning scenery. We also visited local souvenir shops, where many of us picked up handmade crafts as mementos of our trip. In the evening, just when we thought the day was over, we went out to experience Burnham Park's Night Market. The lively energy of the night crowd, the colorful stalls, and the variety of affordable clothes, accessories, and street food made it an exciting way to cap off our Baguio adventure.",
      images: [
        "/day6/day6 (1).jpg", 
        "/day6/day6 (2).jpg", 
        "/day6/day6 (3).jpg", 
        "/day6/day6 (4).jpg", 
        "/day6/day6 (5).jpg", 
        "/day6/day6 (6).jpg", 
        "/day6/day6 (7).jpg", 
        "/day6/day6 (8).jpg"
      ]
    },
    {
      id: 7,
      title: "Day 7: A Memorable Morning in Baguio",
      shortDesc: "Final explorations in Baguio before heading back to Manila.",
      fullContent: "Our final day began early as we made the most of our remaining hours in Baguio City. Before heading back to Manila, we set out to explore Burnham Park, one of the city's most iconic and refreshing spots. Surrounded by greenery and the cool morning breeze, we took pictures, enjoyed the peaceful atmosphere, and soaked in the beauty that makes Baguio so beloved. Later, Zeinab and I took a local jeepney—an authentic Baguio experience—on our way to SM Baguio. Once there, we explored the mall, browsed through souvenir shops, and bought gifts to bring home. We also grabbed Starbucks, and instead of rushing, we stayed a while to enjoy the stunning view from the open deck. The cool breeze, the mountain skyline, and the peaceful moment made it a perfect way to end our trip. Afterward, we took a taxi back to our hotel, packed our things, and shared our final lunch together as a group. By 12 noon, we were back on the road to Manila—carrying not just bags and souvenirs, but a week's worth of unforgettable experiences, new friendships, and valuable lessons.",
      images: [
        "/day7/day7 (1).jpg", 
        "/day7/day7 (2).jpg", 
        "/day7/day7 (3).jpg", 
        "/day7/day7 (4).jpg", 
        "/day7/day7 (5).jpg", 
        "/day7/day7 (6).jpg"
      ]
    }
  ];

  return (
    <div className="hero-container">
      <header className="hero-header">
        <div className="logo">B.A.</div>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        <nav className={`hero-nav ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/blog" onClick={toggleMenu}>Blog</Link>
          <Link to="/experience" onClick={toggleMenu}>Experience</Link>
          <Link to="/projects" onClick={toggleMenu}>Projects</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </nav>
      </header>

      <div className="blog-container">
        <h1 className="blog-title">Educational Tour Blog</h1>
        
        {selectedBlog ? (
          <div className="blog-post-full">
            <button className="back-button" onClick={() => setSelectedBlog(null)}>
              ← Back to all posts
            </button>
            <h2 className="blog-post-title">{selectedBlog.title}</h2>
            <div className="blog-post-images">
              {selectedBlog.images.map((img, index) => (
                <div key={index} className="blog-image-container">
                  <img 
                    src={img} 
                    alt={`Day ${selectedBlog.id} - Image ${index + 1}`} 
                    className="blog-image" 
                  />
                </div>
              ))}
            </div>
            <p className="blog-post-content">{selectedBlog.fullContent}</p>
          </div>
        ) : (
          <div className="blog-grid">
            {blogPosts.map(post => (
              <div 
                key={post.id} 
                className="blog-card"
                onClick={() => setSelectedBlog(post)}
              >
                <div className="blog-card-image-container">
                  <img 
                    src={post.images[0]} 
                    alt={`Featured image for ${post.title}`} 
                    className="blog-card-image" 
                  />
                </div>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-desc">{post.shortDesc}</p>
                  <button className="blog-read-more">Read More</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
