import { useState } from 'react';
import OvalBar from '../ovalBar';
import { HiHome } from "react-icons/hi";
import { FaSearch } from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import { CiWallet } from "react-icons/ci";
import { MdShoppingBag } from "react-icons/md";
import MenuIcon from '@mui/icons-material/Menu';
import { RiLogoutCircleRLine } from "react-icons/ri";
import InterestsIcon from '@mui/icons-material/Interests';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Typography, TextField, Avatar, Tabs, Tab } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const data = [
  { name: '5', uv: 400 },
  { name: '9', uv: 300 },
  { name: '11', uv: 200 },
  { name: '13', uv: 250 },
  { name: '15', uv: 100 },
  { name: '17', uv: 350 },
  { name: '19', uv: 400 },
  { name: '21', uv: 300 },
  { name: '23', uv: 200 },
  { name: '25', uv: 250 },
  { name: '27', uv: 100 },
  { name: '29', uv: 350 },
  { name: '33', uv: 400 },
  { name: '37', uv: 300 },
  { name: '41', uv: 200 },
  { name: '45', uv: 250 },
  { name: '49', uv: 100 },
  { name: '53', uv: 350 },
];

const Dashboard = () => {
  const percentage = 66;
  const tabs = ['1', '2', '3', '4', '5'];
  const [value, setValue] = useState<number | null>(2);
  const [tab, setTab] = useState<any>(0);
  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
    console.log(newValue)
  };
  return (
    <div className="h-screen w-full bg-gray-900 text-white flex overflow-y-hidden">
      <div className='hidden md:block h-full md:w-[6%] lg:w-[5%] xl:w-[4%] bg-gray-800'>
        <div className='flex flex-col justify-between items-center h-full w-full'>
          <div className='py-4'>
            <div className='flex justify-center items-center'> <InterestsIcon sx={{ height: '40px', width: '40px', color: '#6EACDA' }} /></div>
            <Tabs
              orientation="vertical"
              value={tab}
              onChange={handleChangeTabs}
              aria-label="basic tabs example"
              sx={{ minWidth: '50px', paddingY: '14px' }}
            >
              {tabs.map((ele, index) => (
                <Tab
                  key={index}
                  sx={{
                    minWidth: '45px',
                    color: tab === ele ? 'primary.main' : 'white',
                  }}
                  icon={
                    ele === '1' ? <HiHome className='h-6 w-6' /> :
                      ele === '2' ? <AssessmentIcon className='h-6 w-6' /> :
                        ele === '3' ? <AssignmentTurnedInIcon className='h-6 w-6' /> :
                          ele === '4' ? <CiWallet className='h-6 w-6' /> :
                            ele === '5' ? <MdShoppingBag className='h-6 w-6' /> :
                              ''
                  }
                />
              ))}
            </Tabs>
          </div>
          <div className='py-4'>
            <RiLogoutCircleRLine className='h-5 w-5' />
          </div>
        </div>
      </div>
      <div className='w-[100%] md:w-[94%] lg:w-[95%] xl:w-[96%] overflow-y-scroll hidden-scrollbar'>
        <div className="flex justify-between p-4 bg-gray-800 sticky top-0 z-20">
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            InputProps={{
              startAdornment: <FaSearch className='mr-4 text-white' />,
            }}
            sx={{
              '& .MuiInputBase-input': {
                color: 'white', // Text color
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'white', // Placeholder text color
              },
            }}
            className='rounded-md bg-gray-700'
          />
          <div className='hidden md:block'>
            <div className='flex items-center gap-3'>
              <div className='bg-gray-700 py-1 px-1.5 rounded-full cursor-pointer'><MailOutlineIcon className='text-[#BEC6A0]' /></div>
              <div className='bg-gray-700 py-1 px-1.5 rounded-full cursor-pointer'><SettingsOutlinedIcon className='text-[#BEC6A0]' /></div>
              <div className='bg-gray-700 py-1 px-1.5 rounded-full cursor-pointer'><NotificationsNoneOutlinedIcon className='text-[#BEC6A0]' /></div>
              <Avatar className='cursor-pointer' />
            </div>
          </div>
          <div className='block md:hidden'><MenuIcon className='cursor-pointer' /></div>
        </div>
        <div className='grid grid-cols-6 m-4'>
          <div className='col-span-6 pb-4 text-2xl font-medium'>Dashboard</div>
          <div className='col-span-6 md:col-span-4 mb-4'>
            <div className='grid grid-cols-4 gap-3'>
              <div className='col-span-2 md:col-span-1 bg-gray-800 rounded-md p-4'>
                <span className='bg-[#03346E] px-1 pt-0.5 pb-1.5 rounded-lg cursor-pointer'><ShoppingBasketIcon className='text-blue-600' /></span>
                <div className='my-2 text-sm lg:text-base'>Total Orders</div>
                <div className='flex justify-between items-center'>
                  <div className='text-lg font-bold'>75</div>
                  <div className='flex items-center text-[#4BB543]'>
                    <ArrowDropUpIcon />
                    <div className='text-xs'>3%</div>
                  </div>
                </div>
              </div>
              <div className='col-span-2 md:col-span-1 bg-gray-800 rounded-md p-4'>
                <span className='bg-[#03346E] px-1 pt-0.5 pb-1.5 rounded-lg cursor-pointer'><ShoppingBasketIcon className='text-blue-600' /></span>
                <div className='my-2 text-sm lg:text-base'>Total Orders</div>
                <div className='flex justify-between items-center'>
                  <div className='text-lg font-bold'>75</div>
                  <div className='flex items-center text-[#4BB543]'>
                    <ArrowDropUpIcon />
                    <div className='text-xs'>3%</div>
                  </div>
                </div>
              </div>
              <div className='col-span-2 md:col-span-1 bg-gray-800 rounded-md p-4'>
                <span className='bg-[#03346E] px-1 pt-0.5 pb-1.5 rounded-lg cursor-pointer'><ShoppingBasketIcon className='text-blue-600' /></span>
                <div className='my-2 text-sm lg:text-base'>Total Orders</div>
                <div className='flex justify-between items-center'>
                  <div className='text-lg font-bold'>75</div>
                  <div className='flex items-center text-[#4BB543]'>
                    <ArrowDropUpIcon />
                    <div className='text-xs'>3%</div>
                  </div>
                </div>
              </div>
              <div className='col-span-2 md:col-span-1 bg-gray-800 rounded-md p-4'>
                <span className='bg-[#03346E] px-1 pt-0.5 pb-1.5 rounded-lg cursor-pointer'><ShoppingBasketIcon className='text-blue-600' /></span>
                <div className='my-2 text-sm lg:text-base'>Total Orders</div>
                <div className='flex justify-between items-center'>
                  <div className='text-lg font-bold'>75</div>
                  <div className='flex items-center text-[#4BB543]'>
                    <ArrowDropUpIcon />
                    <div className='text-xs'>3%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-6 md:col-span-2 md:ml-4 mb-4 md:mb-0'>
            <div className='bg-gray-800 rounded-md p-4 grid grid-cols-4'>
              <div className='col-span-3 flex flex-col justify-between'>
                <div className='my-2 text-sm lg:text-base'>Total Orders</div>
                <div className='text-lg font-bold'>$ 7564.25</div>
                {/* <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-2 text-[#4BB543]'>
                    <div className="z-10 w-0 h-0 rotate-[135deg] border-t-[10px] border-t-transparent border-l-[10px] border-l-[#4BB543] mt-1" />
                    <div className='text-xs'>3%</div>
                  </div>
                </div> */}
              </div>
              <div className='col-span-1 flex flex-col justify-center items-center'>
                <CircularProgressbar value={percentage} text={`${percentage}%`} className='max-h-[60px]' />
                {/* <div className='text-[8px]'>*The values here has been rounded off.</div> */}
              </div>
              <div className='col-span-4 flex justify-between py-1'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-2 text-[#4BB543]'>
                    <div className="z-10 w-0 h-0 rotate-[135deg] border-t-[10px] border-t-transparent border-l-[10px] border-l-[#4BB543] mt-1" />
                    <div className='text-xs'>3%</div>
                  </div>
                </div>
                <div className='text-[8px]'>*The values here has been rounded off.</div>
              </div>
            </div>
          </div>
          <div className='col-span-6 md:col-span-4 bg-gray-800 pt-4 pr-8 rounded-md'>
            <div className='text-xl font-medium pb-4 pl-4'>Activity</div>
            <div className="w-full h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                  <Bar dataKey="uv" fill="#8884d8" barSize={30} shape={<OvalBar />} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className='col-span-6 md:col-span-2 bg-gray-800 rounded-md md:ml-4 mt-4 md:mt-0 p-4 flex flex-col justify-evenly gap-4'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <div className='bg-gray-700 pt-1 pb-1.5 px-2 rounded-full cursor-pointer'><MailOutlineIcon className='text-[#BEC6A0]' fontSize='small' /></div>
                <div>Goals</div>
              </div>
              <div><KeyboardArrowRightIcon className='p-1 bg-slate-500 rounded-full' /></div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <div className='bg-gray-700 pt-1 pb-1.5 px-2 rounded-full cursor-pointer'><MailOutlineIcon className='text-[#BEC6A0]' fontSize='small' /></div>
                <div>Goals</div>
              </div>
              <div><KeyboardArrowRightIcon className='p-1 bg-slate-500 rounded-full' /></div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <div className='bg-gray-700 pt-1 pb-1.5 px-2 rounded-full cursor-pointer'><MailOutlineIcon className='text-[#BEC6A0]' fontSize='small' /></div>
                <div>Goals</div>
              </div>
              <div><KeyboardArrowRightIcon className='p-1 bg-slate-500 rounded-full' /></div>
            </div>
          </div>
          <div className='col-span-6 md:col-span-4 bg-gray-800 mt-4 px-4 pb-4 rounded-md text-xs md:text-sm max-h-[400px] overflow-y-scroll hidden-scrollbar'>
            <div className='sticky top-0 bg-gray-800 p-2 z-10'>
              <Typography variant="h6">Recent Orders</Typography>
            </div>
            <table className="w-full">
              <thead>
                <tr>
                  <td>Customer</td>
                  <td>Order No.</td>
                  <td>Amount</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <div className='h-3'></div>
                <tr>
                  <td className='flex items-center gap-1 md:gap-3'><Avatar sx={{ height: '24px', width: '24px' }} />John Doe</td>
                  <td>1234</td>
                  <td>$100</td>
                  <td><span className='bg-[#4BB543] rounded-full py-0.5 px-2'>Delivered</span></td>
                </tr>
                <div className='h-3'></div>
                <tr>
                  <td className='flex items-center gap-1 md:gap-3'><Avatar sx={{ height: '24px', width: '24px' }} />John Doe</td>
                  <td>1234</td>
                  <td>$100</td>
                  <td><span className='bg-[#4BB543] rounded-full py-0.5 px-2'>Delivered</span></td>
                </tr>
                <div className='h-3'></div>
                <tr>
                  <td className='flex items-center gap-1 md:gap-3'><Avatar sx={{ height: '24px', width: '24px' }} />John Doe</td>
                  <td>1234</td>
                  <td>$100</td>
                  <td><span className='bg-red-500 rounded-full py-0.5 px-2'>Pending</span></td>
                </tr>
                <div className='h-3'></div>
                <tr>
                  <td className='flex items-center gap-1 md:gap-3'><Avatar sx={{ height: '24px', width: '24px' }} />John Doe</td>
                  <td>1234</td>
                  <td>$100</td>
                  <td><span className='bg-red-500 rounded-full py-0.5 px-2'>Cancelled</span></td>
                </tr>
                <div className='h-3'></div>
                <tr>
                  <td className='flex items-center gap-1 md:gap-3'><Avatar sx={{ height: '24px', width: '24px' }} />John Doe</td>
                  <td>1234</td>
                  <td>$100</td>
                  <td><span className='bg-[#4BB543] rounded-full py-0.5 px-2'>Delivered</span></td>
                </tr>
                <div className='h-3'></div>
                <tr>
                  <td className='flex items-center gap-1 md:gap-3'><Avatar sx={{ height: '24px', width: '24px' }} />John Doe</td>
                  <td>1234</td>
                  <td>$100</td>
                  <td><span className='bg-[#4BB543] rounded-full py-0.5 px-2'>Delivered</span></td>
                </tr>
                <div className='h-3'></div>
                <tr>
                  <td className='flex items-center gap-1 md:gap-3'><Avatar sx={{ height: '24px', width: '24px' }} />John Doe</td>
                  <td>1234</td>
                  <td>$100</td>
                  <td><span className='bg-[#4BB543] rounded-full py-0.5 px-2'>Delivered</span></td>
                </tr>
                <div className='h-3'></div>
                <tr>
                  <td className='flex items-center gap-1 md:gap-3'><Avatar sx={{ height: '24px', width: '24px' }} />John Doe</td>
                  <td>1234</td>
                  <td>$100</td>
                  <td><span className='bg-[#4BB543] rounded-full py-0.5 px-2'>Delivered</span></td>
                </tr>
                <div className='h-3'></div>
                <tr>
                  <td className='flex items-center gap-1 md:gap-3'><Avatar sx={{ height: '24px', width: '24px' }} />John Doe</td>
                  <td>1234</td>
                  <td>$100</td>
                  <td><span className='bg-red-500 rounded-full py-0.5 px-2'>Pending</span></td>
                </tr>
                <div className='h-3'></div>
                <tr>
                  <td className='flex items-center gap-1 md:gap-3'><Avatar sx={{ height: '24px', width: '24px' }} />John Doe</td>
                  <td>1234</td>
                  <td>$100</td>
                  <td><span className='bg-red-500 rounded-full py-0.5 px-2'>Cancelled</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='col-span-6 md:col-span-2 bg-gray-800 rounded-md md:ml-4 mt-4 px-4 pb-4 text-xs md:text-sm max-h-[400px] overflow-y-scroll hidden-scrollbar'>
            <div className='sticky top-0 bg-gray-800 p-2 z-10'>
              <Typography variant="h6">Customer's Feedback</Typography>
            </div>
            <div className="w-full">
              <div className='py-2 border-b border-slate-700'>
                <div className='flex items-center gap-1 md:gap-3'><Avatar sx={{ height: '24px', width: '24px' }} />John Doe</div>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => { setValue(newValue) }}
                  className='py-2' sx={{ '& .MuiRating-iconEmpty': { color: 'white', }, fontSize: '20px' }}
                />
                <div className='text-xs font-light text-slate-300'>I enjoy watching or playing & watching cricket, running, and drawing.</div>
              </div>
              <div className='py-2 border-b border-slate-700'>
                <div className='flex items-center gap-1 md:gap-3'><Avatar sx={{ height: '24px', width: '24px' }} />John Doe</div>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => { setValue(newValue) }}
                  className='py-2' sx={{ '& .MuiRating-iconEmpty': { color: 'white', }, fontSize: '20px' }}
                />
                <div className='text-xs font-light text-slate-300'>I enjoy watching or playing & watching cricket, running, and drawing.</div>
              </div>
              <div className='py-2 border-b border-slate-700'>
                <div className='flex items-center gap-1 md:gap-3'><Avatar sx={{ height: '24px', width: '24px' }} />John Doe</div>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => { setValue(newValue) }}
                  className='py-2' sx={{ '& .MuiRating-iconEmpty': { color: 'white', }, fontSize: '20px' }}
                />
                <div className='text-xs font-light text-slate-300'>I enjoy watching or playing & watching cricket, running, and drawing.</div>
              </div>
              <div className='py-2 border-b border-slate-700'>
                <div className='flex items-center gap-1 md:gap-3'><Avatar sx={{ height: '24px', width: '24px' }} />John Doe</div>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => { setValue(newValue) }}
                  className='py-2' sx={{ '& .MuiRating-iconEmpty': { color: 'white', }, fontSize: '20px' }}
                />
                <div className='text-xs font-light text-slate-300'>I enjoy watching or playing & watching cricket, running, and drawing.</div>
              </div>
            </div>
          </div>
        </div>
        <div className='block md:hidden sticky bottom-0 w-full bg-gray-800 z-20'>
          <Tabs
            value={tab}
            onChange={handleChangeTabs}
            aria-label="basic tabs example"
            sx={{ width: '100%' }}
            className='w-full'
          >
            {tabs.map((ele, index) => (
              <Tab
                key={index}
                sx={{
                  minWidth: 0, // Allows the Tab to shrink to fit content
                  flex: 1, // Make tabs expand to fill available space
                  color: tab === ele ? 'primary.main' : 'white',
                }}
                icon={
                  ele === '1' ? <HiHome className='h-6 w-6' /> :
                    ele === '2' ? <AssessmentIcon className='h-6 w-6' /> :
                      ele === '3' ? <AssignmentTurnedInIcon className='h-6 w-6' /> :
                        ele === '4' ? <CiWallet className='h-6 w-6' /> :
                          ele === '5' ? <MdShoppingBag className='h-6 w-6' /> :
                            ''
                }
              />
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
