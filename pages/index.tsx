import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import AppContextProvider, { Context } from '../components/AppContext/AppContext'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const contextdata = useContext(Context);
  // getting the cluecard url if game staus changes
  // const geturl = async () => {
  //   const data = await GetClueCardUrl(moment().format("MM/DD/YYYY"));
  //   console.log(data)
  //   contextdata?.dispatch({ type: actionsWords.setCluecardUrl, data: data });
  // };
  // // useEffect(() => {
  //   geturl();
  // }, [contextdata?.state.gameStatus]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="lg:w-8/12 sm:w-11/12 lg:shadow sm:shadow-none lg:rounded-2xl sm:rounded-0 sm:border-0 lg:my-12 my-5 mx-auto">
      <h1 className=" text-xl font-bold lg:pt-8 lg:text-3xl text-center logo">
        WORDHASH
      </h1>
      <h2 className="text-center mt-1  ">Your daily dose of wordplay</h2>
      <div className="lg:w-11/12 mx-auto mt-2 lg:mt-8 flex flex-wrap ">
        {contextdata?.state.gameStatus === "completed" || contextdata?.state.gameStatus === "over" ?
          <DisplayProgress />
          :
          <Letters />
        }
        <Board />
        <div>
          {
            contextdata?.state.isAValidWord ? (
              contextdata?.state.result === undefined ? undefined : contextdata
                .state.result ? (
                <TickerModal />
              ) : (
                <TickerModal />
              )

            ) : (<TickerModal />)
          }
        </div>
        <div>
        </div>
      </div>
      <KeyBoard />

      {false && <BottomNav />}
    </div>
  );

}

export default Home
