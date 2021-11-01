import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-div">
      <div className="transition-image final">
        <motion.img
          transition={{
            ease: [0.6, 0.01, -0.05, 0.9],
            duration: 1.6,
          }}
          src={`/static/images/image-2.jpg`}
          layoutId="main-image-1"
        />
        <div className="about-content">
          <h2>Tumakbo para sa Bayan</h2>
          <p>
            This is an initiative to - Isa itong hakbang Ina akong nakikita ang
            pagdurusa ng minamahal kong bansa. Naniniwala ako: Ang pag-ibig,
            nasusukat hindi lang sa pagtitiis, kundi sa kahandaang lumaban,
            kahit gaano kahirap, para matapos na ang pagtitiis. Ang nagmamahal,
            kailangang ipaglaban ang minamahal
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
