import React from "react"
import { stats } from "../constants"
import styles from "../style"

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex flex-col sm:flex-row sm:flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => {
        return (
          <div
            key={stat.id}
            className={`flex-1 flex flex-col items-center sm:flex-row sm:justify-center sm:m-3 my-5`}
          >
            <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white ">
              {stat.value}
            </h4>
            <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase  ml-3">
              {stat.title}
            </p>
          </div>
        )
      })}
    </section>
  )
}

export default Stats
