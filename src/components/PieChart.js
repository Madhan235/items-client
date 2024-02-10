import React, { useContext, useEffect, version } from "react";
import Header from "./Header";
import DataContext from "../Context/DataContext";
import pic1 from "./smart_phone.png";
import { Pie } from "react-chartjs-2";
import api from "./api";

const PieChart = () => {
  const { verifyToken, errorMessage, authError, iadData, setIadData } =
    useContext(DataContext);

  useEffect(() => {
    verifyToken();
    const getIodData = async () => {
      try {
        const response = await api.get("/iad");
        setIadData(response?.data.iadData);
      } catch (error) {
        console.log(error);
      }
    };
    getIodData();
  }, []);
  return (
    <>
      <Header />
      {authError ? (
        errorMessage()
      ) : (
        <main >
          <section className="digi-blog">
            <section className="pic1_para">
              <img className="pic1" src={pic1} alt="child with mobile" />
              <div>
                <h5 style={{ margin: ".5rem 1rem" }}>
                  <b>Digital Hell :</b>
                </h5>
                <p>
                  <span>
                    In today's digital age, smartphones have become an integral
                    part
                  </span>{" "}
                  of teenagers' lives. From social media to gaming and instant
                  messaging, these devices offer a myriad of opportunities for
                  entertainment, communication, and learning. However, alongside
                  the benefits, there's growing concern about the psychological
                  impact of excessive smartphone use on teenagers. In this blog,
                  we'll delve into the various psychological problems that
                  teenagers may face as a result of their smartphone usage
                </p>
                <p>
                  <b>1. Social Media Addiction:</b>
                </p>
                <p>
                  {" "}
                  <span>
                    Social media platforms provide teenagers with a virtual
                    space
                  </span>{" "}
                  to connect with peers, share experiences, and seek validation.
                  However, excessive use of social media can lead to addiction,
                  wherein teenagers feel compelled to constantly check
                  notifications, post updates, and compare themselves to others.
                  This addiction can result in anxiety, depression, and low
                  self-esteem as teenagers become overly concerned about their
                  online image and popularity.
                </p>
              </div>
            </section>
            <p>
              <b>2. Cyberbullying:</b>
            </p>
            <p>
              <span>With </span>the anonymity and reach of the internet,
              cyberbullying has emerged as a prevalent issue among teenagers.
              Hurtful comments, rumors, and online harassment can have
              devastating effects on the mental health of victims, leading to
              feelings of isolation, shame, and even suicidal ideation.
              Smartphone use exacerbates the problem by providing bullies with
              constant access to their targets, making it difficult for victims
              to escape the harassment.
            </p>
            <section className="chart_text">
              <section style={{ margin: "1rem" }}>
                <Pie  id="pie"
                  data={{
                    labels: iadData.map((item) => item.label),
                    datasets: [
                      {
                        label: "Internet Addiction Disorder in %",
                        data: iadData.map((item) => item.value),
                        backgroundColor: [
                          "rgba(43,63,229,0.8)",
                          "rgba(250,192,19,0.8)",
                          " #4285f4",
                          "rgba(52, 168, 83,0.8)",
                          "rgba(153, 102, 255, 0.6)",
                          "rgba(253,135,135,0.8)",
                        ],
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio:false,
                    plugins: {
                      title: {
                        display: true,
                        text: "Increasing Internet Addiction Disorder Disease",
                        font: {
                          size: 18,
                          weight: "bold",
                        },
                      },
                    },
                  }}
                />
              </section>
              <div style={{ marginTop: "5rem" }}>
                <p>
                  <b>3. Sleep Disturbances:</b>
                </p>
                <p>
                  <span>
                    The blue light emitted by smartphone screens can disrupt the
                    production of melatonin, the hormone responsible for
                    regulating sleep-wake cycles. As a result, teenagers who use
                    their smartphones before bedtime may experience difficulties
                    falling asleep or maintaining a restful sleep throughout the
                    night. Chronic sleep disturbances can impair cognitive
                    function, mood regulation, and overall well-being,
                    contributing to increased stress and fatigue.
                  </span>
                </p>
                <p>
                  <b>4. Fear of Missing Out (FOMO):</b>
                </p>
                <p>
                  <span>
                    The constant stream of updates and notifications on social
                    media can instill a fear of missing out (FOMO) in teenagers,
                    compelling them to stay online and remain connected at all
                    times. This fear of missing out on social events, trends, or
                    opportunities can lead to heightened anxiety and a sense of
                    inadequacy as teenagers strive to keep up with their peers'
                    seemingly perfect lives portrayed on social media.
                  </span>
                </p>
                <p>
                  <b>5. Reduced Face-to-Face Interaction:</b>
                </p>
                <p>
                  <span>
                    Excessive smartphone use can detract from real-world
                    interactions and interpersonal relationships. Instead of
                    engaging in meaningful conversations or activities with
                    family and friends, teenagers may find themselves glued to
                    their screens, communicating through emojis and text
                    messages. This lack of face-to-face interaction can hinder
                    social skills development, empathy, and emotional
                    intelligence, leading to feelings of loneliness and
                    disconnection.
                  </span>
                </p>
              </div>
            </section>

            <h5 style={{ marginLeft: "1.5rem" }}>
              <b>Conclusion:</b>
            </h5>
            <p>
              <span>
                While smartphones offer numerous benefits and conveniences, it's
                essential to recognize and address the psychological challenges
                they pose for teenagers. By promoting digital literacy,
                fostering open communication, and encouraging healthy smartphone
                habits, parents, educators, and policymakers can help mitigate
                the negative impact of smartphone use on teenagers' mental
                health. Together, we can navigate the digital maze and create a
                safer, more supportive environment for the next generation.
              </span>
            </p>
          </section>
        </main>
      )}
    </>
  );
};

export default PieChart;
