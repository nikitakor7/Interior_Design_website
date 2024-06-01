import "./blog.css";
import latestNews from "../images/articles/blogLatest.jpg";
import article1 from "../images/articles/article1.jpg";
import article2 from "../images/articles/article2.jpg";
import article3 from "../images/articles/article3.jpg";
import article4 from "../images/articles/article4.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export function Blog() {
  const handleChange = (e) => {
    const pClassList = e.target.parentElement;
    if (e.target.classList.contains("notaken")) {
      for (let i = 0; i < pClassList.childNodes.length; i++) {
        if (pClassList.childNodes[i].className === "blog-art taken") {
          pClassList.childNodes[i].className = "blog-art notaken";
        }
      }
      e.target.classList.remove("notaken");
      e.target.classList.add("taken");
    } else if (e.target.classList.contains("taken")) {
      for (let i = 0; i < pClassList.childNodes.length; i++) {
        if (pClassList.childNodes[i].className === "blog-art taken") {
          pClassList.childNodes[i].className = "blog-art notaken";
        }
      }
    }
  };
  return (
    <div className="blog">
      <div className="blog-header">
        <h1>
          Articles & News<p>Home / Blog</p>
        </h1>
      </div>

      <div className="latestNews">
        <h1>Latest Post</h1>
        <div className="lNews">
          <div className="ln-img">
            <img src={latestNews} alt="news"></img>
          </div>
          <div className="ln-text">
            <div className="ln-subtext">
              <h1>Designing Smart Kitchens for Modern Living</h1>
              <p>
                Welcome to the kitchen of the future! As an interior designer, I'm always excited about embracing cutting-edge technology to enhance our living spaces. Today, let's dive into the world of smart kitchens – spaces where innovation meets functionality, and convenience meets style.
                <br />
                <br />
                    Introduction:
                    Welcome to the kitchen of the future! As an interior designer, I'm always excited about embracing cutting-edge technology to enhance our living spaces. Today, let's dive into the world of smart kitchens – spaces where innovation meets functionality, and convenience meets style.
                    
                    Efficiency Redefined:
                    Smart kitchens are all about efficiency. Imagine a kitchen where your appliances seamlessly communicate with each other, optimizing energy usage and streamlining your cooking process. Smart refrigerators can keep track of your groceries, letting you know when it's time to restock, while smart ovens can preheat themselves to the perfect temperature, ensuring your meals are cooked to perfection every time.
                    
                    Connectivity is Key:
                    In today's interconnected world, our devices are constantly communicating with each other, and our kitchens are no exception. From controlling your coffee maker with your smartphone to receiving notifications when your dishwasher cycle is complete, smart kitchens make staying connected easier than ever. Integration with virtual assistants like Alexa or Google Assistant adds another layer of convenience, allowing you to control your kitchen with simple voice commands.
                    
                    Personalized Experiences:
                    Smart technology allows for a personalized kitchen experience tailored to your preferences. Smart lighting systems can adjust the ambiance of your kitchen based on the time of day or your activities, while smart faucets can dispense water at the perfect temperature and volume with just a touch. Customizable settings ensure that your kitchen adapts to your lifestyle, making everyday tasks more enjoyable and efficient.
                    
                    Sustainability and Savings:
                    Beyond convenience, smart kitchens also offer significant environmental and cost-saving benefits. Energy-efficient appliances, coupled with smart controls that optimize usage, can help reduce your carbon footprint and lower your utility bills. Smart water sensors can detect leaks early, helping to conserve water and prevent costly damage to your home. By investing in a smart kitchen, you're not only enhancing your living space but also contributing to a more sustainable future.
                    
                    Design Integration:
                    Incorporating smart technology into your kitchen doesn't mean sacrificing style. In fact, many smart appliances are designed with aesthetics in mind, seamlessly blending into your kitchen's design scheme. From sleek touchscreen displays to minimalist interfaces, these devices add a modern touch to any kitchen while enhancing functionality. As an interior designer, I always strive to find the perfect balance between form and function, creating spaces that are both beautiful and practical.
                    
                    Conclusion:
                    In the world of interior design, the possibilities are endless, and smart kitchens represent the next frontier in innovation. By embracing smart technology, we can create spaces that are not only more efficient and convenient but also more sustainable and stylish. Whether you're remodeling your existing kitchen or designing a new one from scratch, consider incorporating smart features to elevate your space to new heights of modern living. Welcome to the future – welcome to the smart kitchen revolution!
              </p>
            </div>
            <div className="ln-detail">
              <p className="ac-date">3 March 2024</p>
              <Link to={`/blog-details`}>
                <button>
                  <IoIosArrowForward />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="blogArticles">
        <h1>Articles & News</h1>
        <div className="blog-art-list">
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article1} alt="article"></img>`
            </div>
            <div className="blog-art-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ba-detail">
                <p className="ba-date">3 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article1} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ba-detail">
                <p className="ba-date">3 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article1} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ba-detail">
                <p className="ba-date">3 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article1} alt="article"></img>
            </div>
            <div className="blog-art-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ba-detail">
                <p className="ba-date">3 March 2023</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
