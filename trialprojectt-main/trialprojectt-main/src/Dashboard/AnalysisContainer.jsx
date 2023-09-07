import React from 'react'
import FirstChartContainer from './FirstChartContainer';
import SecondChartContainer from './SecondChartContainer'
import ThirdChartContainer from './ThirdChartContainer';
import FourthChartContainer from './FourthChartContainer';
import FifthChartContainer from './FifthChartContainer';
import SixthChartContainer from './SixthChartContainer';
import SeventhChartContainer from './SeventhChartContainer';
import EightChartContainer from './EightChartContainer';
import NinthChartContainer from './NinthChartContainer';
import CountContainer from './CountContainer';

const AnalysisContainer = () => {
  return (
    <>
    <div className='d-flex-start CardsWrapper'>
      <CountContainer />
        </div>
            <FirstChartContainer/>
            <SecondChartContainer/>
            <ThirdChartContainer/>
            <FourthChartContainer/>
            <FifthChartContainer/>
            <SixthChartContainer/>
            <SeventhChartContainer/>
            <EightChartContainer/>
            <NinthChartContainer/>
    </>
  )
}

export default AnalysisContainer
