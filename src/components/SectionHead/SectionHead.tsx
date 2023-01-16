import { Fade } from "react-awesome-reveal";
import { Images } from "../../assets/imgs/Images";

export type SectionHeadType = {
  title: string;
  description?: string;
};

export const SectionHead = ({ title, description }: SectionHeadType) => {
  return (
    <div className='flex flex-col relative mt-12 md:mt-0'>
      <div className='flex relative'>
        <div className='w-0.5 bg-primary100 drop-shadow-[0px_0px_4px_#EB3A4A]' />
        <div className='flex flex-col pl-3.5 md:pl-[1.375rem]'>
          <img src={Images.logo.default} alt={title} className='w-2.5' />
          <h1 className='text-2xl leading-[30px] text-primary100 font-black pt-4 font-section tracking-widest md:text-[2rem] md:leading-[3.125rem] lg:text-[2.5rem]'>
            {title}
          </h1>
        </div>
      </div>
      {description && (
        <Fade cascade damping={0.9} duration={500}>
          <h2 className='text-light100 text-sm leading-[26px] font-normal tracking-[0.06em] mt-4 md:leading-7 md:text-base md:pl-6'>
            {description}
          </h2>
        </Fade>
      )}
    </div>
  );
};
