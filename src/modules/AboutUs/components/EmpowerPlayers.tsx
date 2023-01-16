import { MouseParallaxContainer } from "react-parallax-mouse";
import { useSelector } from "react-redux";
import { Parallax } from "react-scroll-parallax";
import { Images } from "../../../assets/imgs/Images";
import {
  Container,
  ResponsiveParallaxLayer,
  SectionHead,
} from "../../../components";
import { GlobalState } from "../../../reducer";

export type EmpowerPlayersType = {
  isMobile: boolean;
};

export const EmpowerPlayers = ({ isMobile }: EmpowerPlayersType) => {
  const { passportSigns } = useSelector((state: GlobalState) => state.aboutUs);

  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      containerStyle={{
        // Reset overflow hidden added by module
        overflow: "initial",
      }}
    >
      <Container className='flex flex-col items-center justify-between flex-1 pt-[57px] md:flex-row lg:pt-[111px] lg:pb-[80px] md:h-screen'>
        <div className='md:flex-1 md:max-w-[500px]'>
          <Parallax speed={isMobile ? 4 : 10}>
            <SectionHead
              title='We Empower Players'
              description='We believe that players should be able to own their gaming data and use it to unlock opportunities that truly reward them.'
            />
          </Parallax>
          <Parallax speed={isMobile ? 1 : 5} opacity={[2, 0]}>
            <div className='flex items-center pt-3.5 md:pt-[30px]'>
              <div className='font-normal text-primary100 text-2xl md:text-[32px] md:font-medium tracking-[0.2rem]'>
                {passportSigns.toLocaleString()}
              </div>
              <div className='text-[15px] text-light100 pl-3.5 tracking-widest'>
                Gaming Passport Signups
              </div>
            </div>
          </Parallax>
        </div>

        <div className='md:flex-1 relative w-full md:max-w-[500px] h-[340px] mt-5 md:mt-0 md:max-h-full md:h-full'>
          <ResponsiveParallaxLayer
            image={Images.lines01}
            factorX={-0.2}
            factorY={-0.2}
            speed={isMobile ? 2 : 5}
            scale={isMobile ? 1 : 1.3}
            imageClassName='max-h-[324px] md:max-h-full'
          />
          <ResponsiveParallaxLayer
            image={Images.mouse}
            factorX={-0.2}
            factorY={-0.2}
            speed={isMobile ? 2 : 5}
            imageClassName='max-h-[324px] md:max-h-full'
          />
          <ResponsiveParallaxLayer
            image={Images.headset}
            factorX={-0.3}
            factorY={-0.5}
            speed={isMobile ? 4 : 10}
            imageClassName='max-h-[324px] md:max-h-full'
          />
          <ResponsiveParallaxLayer
            image={Images.keyboard}
            factorX={-0.4}
            factorY={-0.2}
            speed={isMobile ? 10 : 20}
            imageClassName='max-h-[324px] md:max-h-full'
          />
        </div>
      </Container>
    </MouseParallaxContainer>
  );
};
