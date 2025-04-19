import { SectionTitle } from "./Hero";
/******** icons **********/
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaExclamationTriangle } from "react-icons/fa";
import { IoIosGift } from "react-icons/io";
import { BsStars } from "react-icons/bs";
/********************* */
const plans = [
  {
    title: "Basic",
    price: "800 – 1200 EGP",
    timeframe: "2 – 4 days",
    features: [
      "Single page (Landing Page)",
      "Basic UI/UX design included",
      "Responsive design",
      "Developed with React",
      "Clean and scalable code",
      "3 days post-delivery revision period",
      "Hosting on GitHub Pages",
    ],
  },
  {
    title: "Standard",
    price: "1500 – 2200 EGP",
    timeframe: "5 – 8 days",
    features: [
      "Multi-page website using React Router",
      "Custom UI/UX design included",
      "Responsive and dynamic design",
      "Tailwind or Bootstrap integration",
      "Data fetching from external API",
      "Engaging animations throughout the site",
      "7 days post-delivery support & revisions",
      "Hosting on GitHub Pages",
      "Dashboard available if needed",
    ],
    highlighted: true,
  },
  {
    title: "Pro",
    price: "3500 – 4500 EGP",
    timeframe: "7 – 14 days",
    features: [
      "Fully dynamic multi-page site with React",
      "Custom API/backend integration",
      "Advanced tools (Axios, Zustand, Context)",
      "Performance & UX optimization",
      "Advanced animations (Scroll, Motion UI, Transitions)",
      "Professional UI/UX design included",
      "1 month post-delivery support & unlimited revisions",
      "Hosting on paid VPS & custom domain",
      "Full-featured admin dashboard",
    ],
  },
];

function Pricing() {
  return (
    <section className="Pricing">
      <span className="new">new</span>
      <div className="main-container">
        <div className="pricing-content">
          <div className="pricing-header">
            <SectionTitle Title="Pricing Plans" />
            <p>Choose the perfect plan for your project needs</p>
          </div>

          <div className="plansContainer">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={`planCard ${plan.highlighted ? "highlighted" : ""}`}
              >
                <div className="planHeader">
                  <h3>{plan.title}</h3>
                  <div className="price">{plan.price}</div>
                  <div className="timeframe">Delivery: {plan.timeframe}</div>
                </div>
                <ul className="features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <IoCheckmarkSharp size={18} className="checkIcon" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  className="ctaButton"
                  href="https://wa.me/+201272073227?"
                  target="_blank"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <div className="notes">
            <div className="note">
              <div className="note-icons">
                <IoIosGift />
                <BsStars />
              </div>
              <p>
                {" "}
                Every package comes with professional animations for free – to
                make your website smoother, more interactive, and user-friendly
                at no extra cost.
              </p>
            </div>
            <div className="note">
              <div className="note-icons">
                <IoIosGift />
                <BsStars />
              </div>
              <p>
                {" "}
                Prices are approximate and may vary depending on your project
                details. If you have any concerns about the pricing, feel free
                to reach out — I’ll do my best to find a solution that fits your
                needs. All packages are based on React development by default,
              </p>
            </div>
            <div className="important note">
              <div className="note-icons">
                <FaExclamationTriangle className="important" />
              </div>
              <p>
                {" "}
                All listed packages cover Frontend development only, using
                React. If your project requires a Backend or a database – such
                as login systems, dashboards, or data storage – we will
                collaborate with a dedicated Backend developer, and the Backend
                cost will be calculated separately based on your project’s
                specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
