import React, { useContext, useEffect } from "react";
import Header from "./Header";
import pic1 from "./teen-drug-abuse1.jpeg";
import pic3 from "./obesity1.jpg";
import { Bar } from "react-chartjs-2";
import DataContext from "../Context/DataContext";
import api from "./api";

const BarChart = () => {
  const {
    verifyToken,
    errorMessage,
    authError,
    iadData,
    setIadData,
    attackData,
    setAttackData,
    sugarData,
    setSugarData,
  } = useContext(DataContext);

  useEffect(() => {
    verifyToken();
    const AttackData = async () => {
      try {
        const response = await api.get("/iad");
        setAttackData(response?.data.iadData);
        setSugarData(response?.data.obessData);
      } catch (error) {
        console.log(error);
      }
    };
    AttackData();
  }, []);
  return (
    <>
      <Header />
      {authError ? (errorMessage()) : (
      <main className="bar_chart_main">
        <section>
          <h3 style={{ margin: "1rem" }}>
            The Looming Crisis: Exploring the Impact of Drugs and Junk Foods on
            Public Health{" "}
          </h3>
          <p>
            <span>
              Drug abuse has emerged as a significant public health concern,
              with far-reaching implications for individuals, families, and
              communities worldwide. From illicit substances like heroin and
              cocaine to prescription medications and synthetic drugs, the
              prevalence of drug abuse continues to rise, contributing to a
              myriad of health problems and social issues. In this blog, we'll
              delve into the various aspects of drug abuse and its alarming
              impact on public health.
            </span>
          </p>
          <p>
            <b>1.The Rise of Substance Abuse:</b>
          </p>
          <p>
            <span>
              In recent years, there has been a notable increase in the use and
              abuse of drugs across all demographics. Factors such as
              accessibility, peer influence, and socioeconomic disparities have
              contributed to this rise, leading to widespread substance abuse
              and addiction. From opioids and stimulants to sedatives and
              hallucinogens, the range of available drugs poses significant
              challenges for prevention and treatment efforts.
            </span>
          </p>
          <section className="img_text">
            <img src={pic1} className="pic1" alt="using_drugs" id="drug1" />
            <div>
              <p>
                <b>2. Health Consequences</b>
              </p>
              <p>
                <span>
                  Drug abuse can have devastating effects on both physical and
                  mental health. Chronic use of drugs like opioids and
                  methamphetamine can lead to severe addiction, overdose, and
                  death. Additionally, long-term substance abuse can contribute
                  to a host of health problems, including cardiovascular
                  disease, respiratory disorders, liver damage, and neurological
                  impairments. Mental health disorders such as depression,
                  anxiety, and psychosis are also commonly associated with drug
                  abuse.
                </span>
              </p>
              <p>
                <b>3. Infectious Diseases:</b>
              </p>
              <p>
                <span>
                  Injection drug use, in particular, poses a significant risk
                  for the transmission of infectious diseases such as HIV/AIDS,
                  hepatitis B, and hepatitis C. Sharing needles and engaging in
                  risky behaviors increase the likelihood of contracting these
                  infections, creating additional challenges for public health
                  authorities. The intersection of substance abuse and
                  infectious diseases further complicates efforts to control
                  outbreaks and provide adequate healthcare services to affected
                  individuals.
                </span>
              </p>
            </div>
          </section>

          <section className="img_text">
            <section className="bar_chart1">
              <Bar
                id="bar"
                data={{
                  labels: attackData?.map((item) => item.label),
                  datasets: [
                    {
                      label: "Heart Attack Death Rates in %",
                      data: attackData?.map((item) => item.value),
                      backgroundColor: ["rgba(250,192,19,0.8)"],
                      borderRadius: 5,
                    },
                    {
                      label: "Obesity Death Rates in %",
                      data: sugarData?.map((item) => item.value),
                      backgroundColor: ["rgba(253,135,135,0.8)"],
                      borderRadius: 5,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    title: {
                      display: true,
                      text: "Increasing Deaths for  Heart-Attaks and Obesity",
                      font: {
                        size: 18,
                        weight: "bold",
                      },
                    },
                  },
                }}
              />
            </section>
            <div>
              <p>
                <b>4. Impact on Families and Communities:</b>
              </p>
              <p>
                <span>
                  Drug abuse extends beyond the individual to impact families,
                  communities, and society as a whole. Families of individuals
                  struggling with addiction often experience emotional turmoil,
                  financial strain, and disruptions in daily life. Communities
                  grappling with high rates of drug abuse face increased crime,
                  unemployment, homelessness, and strained healthcare systems.
                  The ripple effects of drug abuse reverberate throughout
                  society, exacerbating social inequalities and undermining
                  public safety and well-being.
                </span>
              </p>
              <p>
                <b>5. Prevention and Treatment:</b>
              </p>
              <p>
                <span>
                  Addressing the complex issue of drug abuse requires a
                  multifaceted approach that combines prevention, treatment, and
                  harm reduction strategies. Prevention efforts should focus on
                  education, awareness, and early intervention to deter drug
                  experimentation and initiation. Treatment programs should
                  offer a continuum of care, including detoxification,
                  rehabilitation, counseling, and medication-assisted therapy.
                  Harm reduction measures such as needle exchange programs and
                  naloxone distribution can help reduce the adverse consequences
                  of drug abuse and save lives.
                </span>
              </p>
            </div>
          </section>

          <section className="chart_text">
            <div style={{ marginTop: "4rem" }}>
              <p>
                <b>6 .The Junk Food Epidemic: A Recipe for Disaster</b>
              </p>
              <p>
                <span>
                  Junk foods are typically high in unhealthy fats, sugars, and
                  salts, making them deliciously addictive but devastatingly
                  harmful to our bodies. Regular consumption of these foods can
                  lead to a host of health issues, including obesity, diabetes,
                  heart disease, and even certain types of cancer.
                </span>
              </p>
              <p>
                <b>7. Obesity: The Heavy Toll of Excessive Consumption</b>
              </p>
              <p>
                <span>
                  One of the most alarming consequences of junk food consumption
                  is the obesity epidemic gripping our society. With their high
                  calorie content and low nutritional value, these foods
                  contribute significantly to weight gain and obesity. The
                  excessive intake of junk foods overwhelms the body's ability
                  to metabolize fats and sugars, leading to the accumulation of
                  visceral fat, which surrounds vital organs and increases the
                  risk of metabolic syndrome and type 2 diabetes.
                </span>
              </p>
            </div>

            <img
              src={pic3}
              className="obess"
              alt="junk-foods"
              id="drug1"
              style={{ marginBottom: "1rem" }}
            />
          </section>
          <p><b>Empowering Change: Breaking Free from the Junk Food Trap</b></p>
          <p><span>While the allure of junk foods may be hard to resist, prioritizing our health and well-being is paramount. By making mindful choices and embracing a balanced diet rich in whole, unprocessed foods, we can safeguard ourselves against the detrimental effects of junk food consumption. Incorporating plenty of fruits, vegetables, lean proteins, and whole grains into our meals not only nourishes our bodies but also reduces the craving for unhealthy snacks.</span></p>
          <p><b>Conclusion</b></p>
          <p><span>The prevalence of junk foods in our modern diets poses a grave threat to our health and well-being. From obesity and diabetes to heart disease and cancer, the consequences of excessive consumption are dire. However, by raising awareness of these dangers and making conscious choices to prioritize nutrition, we can take control of our health and break free from the grip of junk food addiction. Remember, the choices we make today shape our health tomorrow. Choose wisely, and nourish your body for a healthier, happier future.</span></p>
        </section>
      </main>
      )}
    </>
  );
};

export default BarChart;
