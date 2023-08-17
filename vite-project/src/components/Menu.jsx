import React from 'react'
import "../index.css"
import wedio from "../assets/wedio.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import SportsIcon from '@mui/icons-material/Sports';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import FeedIcon from '@mui/icons-material/Feed';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

const Menu = () => {
  return (
    <div className='flex-1 bg-gray-800 h-full text-white text-[14px] sticky top-0'>
        <div className='px-[18px] py-[26px]'>
            <div className='flex items-center gap-[5px] mb-[25px]'>
              <img src={wedio} alt="wedio"  className='h-[40px] w-[50px]'/>
              <h1 className='font-bold'>weDio</h1>
            </div>
            <div className='flex items-center gap-[5px] py-[8px]'>
              <HomeIcon/>
              Home
            </div>
            <div className='flex items-center gap-[5px] py-[8px]'>
              <ExploreIcon/>
              Explore
            </div>
            <div className='flex items-center gap-[5px] py-[8px]'>
              <SubscriptionsIcon/>
              Subscriptions
            </div>
            <hr className='my-[3px]'/>
            <div className='flex items-center gap-[5px] py-[8px]'>
              <VideoLibraryIcon/>
              Library
            </div>
            <div className='flex items-center gap-[5px] py-[8px]'>
              <HistoryIcon/>
              History
            </div>
            <hr className='my-[3px]'/>
            <div className='my-2'>
                <h4 className='text-left'>Sign In to like, comment and subscribe</h4>
                <button className='mt-[5px] font-bold rounded-md border-solid border-2 border-blue-300 max-w-max px-3 py-1'>Sign In</button>
            </div>
            <hr className='my-[3px]'/>
            <div className='flex items-center gap-[5px] py-[8px]'>
              <MusicVideoIcon/>
              Music
            </div>
            <div className='flex items-center gap-[5px] py-[8px]'>
              <SportsIcon/>
              Sports
            </div>
            <div className='flex items-center gap-[5px] py-[8px]'>
              <SportsEsportsIcon/>
              Gaming
            </div>
            <div className='flex items-center gap-[5px] py-[8px]'>
              <MovieCreationIcon/>
              Movies
            </div>
            <div className='flex items-center gap-[5px] py-[8px]'>
              <FeedIcon/>
              News
            </div>
            <div className='flex items-center gap-[5px] py-[8px]'>
              <LiveTvIcon/>
              Live
            </div>
            <hr className='my-[3px]'/>
            <div className='flex items-center gap-[5px] py-[8px]'>
              <SettingsIcon/>
              Settings
            </div>
            <div className='flex items-center gap-[5px] py-[8px]'>
              <ReportIcon/>
              Report
            </div>
            <div className='flex items-center gap-[5px] py-[8px]'>
              <HelpCenterIcon/>
              Help
            </div>
        </div>
    </div>
  )
}

export default Menu