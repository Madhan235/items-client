import React, { useContext, useEffect } from "react";
import Header from "./Header";

import { Line } from "react-chartjs-2";
import { Dropdown } from "react-bootstrap";
import api from "./api";
import DataContext from "../Context/DataContext";
import oilPic from "./oilprice1.jpg"

 

const Home = () => {
  const {
    verifyToken,
    authError,
    errorMessage,
    btnText,
    setBtnText,
    dieselData,
    setDieselData,
    petrolData,
    setPetrolData,
    goldData,
    setGoldData,
  } = useContext(DataContext);

  useEffect(() => {
    verifyToken();
    handleYear(2019);
  }, []);

  const years = [2019, 2020, 2021, 2022, 2023];

  const handleYear = async (year) => {
    try {
      setBtnText(year);

      const response = await api.post("/content", { year: year });
      setDieselData(response?.data.diesel);
      setPetrolData(response?.data.petrol);
      setGoldData(response?.data.gold);
    } catch (error) {
      console.error(error);
    }
  };
  const filteredYears = years?.filter(
    (item) => Number(item) !== Number(btnText)
  );

  const options = {
    scales: {
      y: {
        ticks: {
          callback: function (value, index, values) {
            return "₹" + value;
          },
        },
      },
    },
  };

  return (
    <>
      <Header />

      <main>
        {authError ? (
          errorMessage()
        ) : (
          <>
            <section className="blog" style={{ margin: "1rem" }}>
              <h2>
                The Rising Tide: Understanding the Surge in Fuel & Gold Prices
                in India
              </h2>

              <h6>
                <ul>
                  <li>
                    Brief overview of the current situation regarding fuel
                    prices in India.
                  </li>
                  <li>
                    Importance of fuel in daily life and its impact on various
                    sectors of the economy.
                  </li>
                </ul>
              </h6>
<section className="flexOne">
  <div>
    <p><b>Global Supply and Demand Dynamics</b></p>
    <p><span>The balance between oil supply and demand plays a pivotal role in determining prices. Supply disruptions, whether due to geopolitical conflicts, natural disasters, or production cuts by major oil-producing nations, can quickly send prices soaring. Conversely, fluctuations in global demand, influenced by factors such as economic growth, industrial activity, and transportation needs, can also impact oil prices. For instance, during periods of economic expansion, demand for oil tends to increase, putting upward pressure on prices.</span></p>
    <p><b>Implications for Businesses</b></p>
    <p><span>Oil price hikes pose significant challenges for businesses across various sectors. Industries heavily reliant on oil, such as transportation, manufacturing, and agriculture, face mounting operational costs, which can erode profitability and strain budgets. Airlines grapple with higher fuel expenses, leading to increased ticket prices or reduced services. Manufacturers contend with elevated production costs, potentially resulting in higher prices for goods and services. Moreover, small businesses and entrepreneurs may struggle to absorb the added expenses, hampering growth and innovation.</span></p>
  </div>
  <img src={oilPic} alt="oil-pirce-hike" className="pic1" />
</section>
              <p>
                <b>Factors Contributing to the Increase:</b>
              </p>
              <p>
                <b>Global Oil Market Trends:</b>
              </p>
              <ul>
                <li>
                  Explanation of how global factors such as geopolitical
                  tensions, supply-demand dynamics, and OPEC decisions influence
                  oil prices.
                </li>
                Impact of events like conflicts in oil-producing regions,
                changes in production quotas, and natural disasters.
              </ul>

              <>
            <Dropdown
              className="year-btns"
              onSelect={(eventKey) => handleYear(eventKey)}
            >
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                {btnText}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {filteredYears?.map((item, index) => (
                  <Dropdown.Item key={index} eventKey={item}>
                     
                    {item}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <section className="charts">
              <Line
                data={{
                  labels: dieselData?.map((item) => item.label),
                  datasets: [
                    {
                      label: "petrol",
                      data: petrolData?.map((item) => item.value),

                      backgroundColor: "#064FF0",
                      borderColor: "#064FF0",
                    },
                    {
                      label: "diesel",
                      data: dieselData?.map((item) => item.value),

                      backgroundColor: "#712cf9",
                      borderColor: "#712cf9",
                    },
                  ],
                }}
                options={{
                  responsive:true,
                  plugins: {
                    title: {
                      display: true,
                      text: `Avg Petrol and Diesel prices per litre in India ${btnText}`,
                      font: {
                        size: 18,
                        weight: "bold",
                      },
                    },
                  },
                  scales: {
                    y: {
                      ticks: {
                        callback: function (value, index, values) {
                          return "₹" + value;
                        },
                      },
                    },
                  },
                }}
              />

              <Line
                data={{
                  labels: goldData.map((item) => item.label),
                  datasets: [
                    {
                      label: "Gold",
                      data: goldData.map((item) => item.value),
                      backgroundColor: " #FFD700",
                      borderColor: "#FFD700",
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: ` Avg 24K Gold prices per gram in India ${btnText}`,
                      font: {
                        size: 18,
                        weight: "bold",
                      },
                    },
                  },
                  scales: {
                    y: {
                      ticks: {
                        callback: function (value, index, values) {
                          return " ₹" + value;
                        },
                      },
                    },
                  },
                }}
              />
            </section>
            </>
            <a href="" style={{textDecoration:'none',color:"black"}}><section className="ads">
   
            <p><b>Invest in These Guaranteed Products</b></p>
<p style={{ margin: "1rem 1.5rem" }}> Interested in investing in commodities like Fossil Fuels, Gold, etc.? Need expert consultation with over 20 years of experience? <a href="">Contact</a></p>
</section></a>

              <p><b>Domestic Policy and Taxes:</b></p>
              <ul><li>Discussion on how government policies, taxation, and subsidies affect fuel prices.</li>
              <li>Explanation of specific taxes like excise duty, Value Added Tax (VAT), and dealer commissions.</li>
              </ul>
              <p><b>Currency Fluctuations:</b></p>
              <ul><li>Examination of how fluctuations in the value of the Indian rupee against major currencies impact fuel prices.</li>
              <li>Connection between currency movements, international trade, and fuel imports.
                </li></ul>
                <p><b>Impact on Consumers and Economy:</b></p>
                <ul><li>Analysis of the direct and indirect effects of rising fuel prices on consumers, businesses, and the overall economy.</li>
                <li>Consideration of inflationary pressures, transportation costs, and implications for various industries.</li>

                </ul>
                <p><b>Alternative Solutions and Future Outlook:</b></p>
                <ul><li>Exploration of alternative energy sources, <a href="https://e-amrit.niti.gov.in/electric-vehicle-incentives" target="_blank">renewable technologies</a>, and sustainable transportation options.</li>
                <li>Consideration of long-term strategies for reducing dependence on fossil fuels and promoting energy efficiency.</li>
                </ul>
                <h4><strong>Solution</strong></h4>
                <p style={{margin: "1rem 1.5rem"}}>With the recent surge in fuel prices across India, citizens and businesses alike are feeling the strain on their wallets. The rise in fuel costs has rippled through various sectors of the economy, impacting transportation, logistics, and daily commuting expenses. Consider <b>Electric Vechiles</b>.</p>
                
            </section>

          </>
        )}
      </main>
    </>
  );
};

export default Home;

// backgroundColor:[
//   "rgba(43,63,229,0.8)",
//   "rgba(250,192,19,0.8)",
//   "rgba(253,135,135,0.8)",
//     " #4285f4",
//     "rgba(52, 168, 83,0.8)",
//      "#712cf9" ,
//      "rgba(43,63,229,0.8)",
//      "rgba(250,192,19,0.8)",
//      "rgba(253,135,135,0.8)",
//        " #4285f4",
//        "rgb(52, 168, 83,0.8)",
//         "#712cf9"
// ],
// borderRadius:5,
