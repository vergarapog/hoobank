import styles from "../style"
import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div
        className={`${styles.flexStart} md:flex-row flex-col  mb-8 w-full border-b-2 border-gray-700 pb-8`}
      >
        <div className="flex-1">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} my-4`}>
            A new way to make the payments <br className="sm:block hidden" />{" "}
            easy, reliable and secure
          </p>
        </div>
        <div className="flex flex-[1.5] w-full mt-5 md:mt-0">
          {footerLinks.map((obj) => {
            return (
              <div key={obj.title} className={`flex-1`}>
                <h3 className="text-white text-[18px] sm:text-[22px] font-poppins">
                  {obj.title}
                </h3>
                <ul className="my-4 space-y-2">
                  {obj.links.map((link) => {
                    return (
                      <li key={link.name}>
                        <a
                          className="text-dimWhite font-poppins hover:text-secondary"
                          href={link.link}
                        >
                          {link.name}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div>
          <p className={`text-dimWhite font-poppins`}>
            Copyright Ⓒ <br className="sm:hidden block" /> 2021 HooBank.{" "}
            <br className="sm:hidden block" /> All Rights Reserved
          </p>
        </div>
        <div className="flex space-x-5">
          {socialMedia.map((item) => {
            return (
              <div key={item.id}>
                <img
                  src={item.icon}
                  alt=""
                  className="w-[30px] h-[30px] object-contain"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Footer
