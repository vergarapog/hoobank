import { apple, bill, google } from "../assets"
import styles, { layout } from "../style"

const Billing = () => {
  return (
    <section id="billing" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 white__gradient"></div>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 pink__gradient"></div>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className="hidden sm:block" /> billing &
          voicing
        </h2>
        <p className={`${styles.paragraph} max-w-[400px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          neque facilis dolorum, amet ut aspernatur ratione corporis laborum
          minus non a, dignissimos sed harum labore, in ipsam! Cupiditate,
          praesentium harum.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="play_store"
            className="w-[128px] h-[42px] object-contain ml-5 cursor-pointer"
          />
        </div>
      </div>
    </section>
  )
}

export default Billing
