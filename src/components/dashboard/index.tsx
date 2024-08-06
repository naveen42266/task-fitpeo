import { SetStateAction, useState } from 'react';
import OvalBar from '../ovalBar';
import { HiHome } from "react-icons/hi";
import { FaSearch } from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import { CiWallet } from "react-icons/ci";
import { MdShoppingBag } from "react-icons/md";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import 'react-circular-progressbar/dist/styles.css';
import { RiLogoutCircleRLine } from "react-icons/ri";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import InterestsIcon from '@mui/icons-material/Interests';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { CircularProgressbar } from 'react-circular-progressbar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { Typography, TextField, Avatar, Tabs, Tab, Drawer, Box } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
const barChartData = [
  { x: '5', y: 15000 },
  { x: '9', y: 11300 },
  { x: '11', y: 2000 },
  { x: '13', y: 4250 },
  { x: '15', y: 14400 },
  { x: '17', y: 7350 },
  { x: '19', y: 10400 },
  { x: '21', y: 14300 },
  { x: '23', y: 8000 },
  { x: '25', y: 6000 },
  { x: '27', y: 9000 },
  { x: '29', y: 10000 },
  { x: '33', y: 4000 },
  { x: '37', y: 5000 },
  { x: '41', y: 9500 },
  { x: '45', y: 10000 },
  { x: '49', y: 5000 },
  { x: '53', y: 3000 },
  { x: '57', y: 4000 },
  { x: '61', y: 5000 },
  { x: '65', y: 9500 },
  { x: '69', y: 10000 },
  { x: '73', y: 5000 },
  { x: '77', y: 3000 },
];
const orders = [
  {
    "avatar": "path/to/avatar",
    "name": "Alice Smith",
    "orderNumber": "1001",
    "amount": "$120",
    "status": "Delivered",
    "statusColor": "#4BB543"
  },
  {
    "avatar": "path/to/avatar",
    "name": "Bob Johnson",
    "orderNumber": "1002",
    "amount": "$150",
    "status": "Delivered",
    "statusColor": "#4BB543"
  },
  {
    "avatar": "path/to/avatar",
    "name": "Charlie Brown",
    "orderNumber": "1003",
    "amount": "$90",
    "status": "Pending",
    "statusColor": "#b54347"
  },
  {
    "avatar": "path/to/avatar",
    "name": "Daisy Miller",
    "orderNumber": "1004",
    "amount": "$110",
    "status": "Cancelled",
    "statusColor": "#b54347"
  },
  {
    "avatar": "path/to/avatar",
    "name": "Ethan Davis",
    "orderNumber": "1005",
    "amount": "$130",
    "status": "Delivered",
    "statusColor": "#4BB543"
  },
  {
    "avatar": "path/to/avatar",
    "name": "Fiona Wilson",
    "orderNumber": "1006",
    "amount": "$140",
    "status": "Delivered",
    "statusColor": "#4BB543"
  },
  {
    "avatar": "path/to/avatar",
    "name": "George Harris",
    "orderNumber": "1007",
    "amount": "$95",
    "status": "Delivered",
    "statusColor": "#4BB543"
  },
  {
    "avatar": "path/to/avatar",
    "name": "Hannah Clark",
    "orderNumber": "1008",
    "amount": "$125",
    "status": "Delivered",
    "statusColor": "#4BB543"
  },
  {
    "avatar": "path/to/avatar",
    "name": "Ian Lewis",
    "orderNumber": "1009",
    "amount": "$105",
    "status": "Pending",
    "statusColor": "#b54347"
  },
  {
    "avatar": "path/to/avatar",
    "name": "Julia Martinez",
    "orderNumber": "1010",
    "amount": "$115",
    "status": "Cancelled",
    "statusColor": "#b54347"
  }
]
const feedBack = [
  {
    "avatar": "path/to/avatar",
    "name": "Julia Martinez",
    "comments": "I enjoy watching or playing & watching cricket, running, and drawing.",
    "rating": 2
  },
  {
    "avatar": "path/to/avatar",
    "name": "Michael Thompson",
    "comments": "I love hiking, photography, and exploring new cuisines.",
    "rating": 5
  },
  {
    "avatar": "path/to/avatar",
    "name": "Emily Clark",
    "comments": "I'm passionate about reading novels, traveling, and painting.",
    "rating": 4
  },
  {
    "avatar": "path/to/avatar",
    "name": "David Lee",
    "comments": "My hobbies include cycling, woodworking, and watching documentaries.",
    "rating": 3
  },
  {
    "avatar": "path/to/avatar",
    "name": "Sophia Patel",
    "comments": "I enjoy cooking, yoga, and gardening.",
    "rating": 4
  },
  {
    "avatar": "path/to/avatar",
    "name": "James Brown",
    "comments": "I like playing video games, watching movies, and working out at the gym.",
    "rating": 5
  },
  {
    "avatar": "path/to/avatar",
    "name": "Olivia Johnson",
    "comments": "I'm into knitting, baking, and spending time with my pets.",
    "rating": 2
  },
  {
    "avatar": "path/to/avatar",
    "name": "Daniel Garcia",
    "comments": "I love listening to music, playing guitar, and going to concerts.",
    "rating": 5
  },
  {
    "avatar": "path/to/avatar",
    "name": "Ava Wilson",
    "comments": "My interests include coding, photography, and attending tech meetups.",
    "rating": 4
  },
  {
    "avatar": "path/to/avatar",
    "name": "Liam Walker",
    "comments": "I enjoy playing sports, reading science fiction, and exploring nature.",
    "rating": 3
  }
];
const Dashboard = () => {
  const percentage = 77;
  const profile = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  const tabs = ['0', '1', '2', '3', '4'];
  const [customerFeedback, setCustomerFeedback] = useState(feedBack)
  const [tab, setTab] = useState<any>(0);
  const [open, setOpen] = useState<boolean>(false)
  const [type, setType] = useState<any>('');
  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  const handleRating = (id: number, value: number | null) => {
    if (value !== null) {
      const updatedFeedback = customerFeedback.map((feedback, index) =>
        index === id ? { ...feedback, rating: value } : feedback
      );
      setCustomerFeedback(updatedFeedback);
    }
  };
  const handleChangeType = (event: { target: { value: SetStateAction<string>; }; }) => {
    setType(event.target.value);
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
                    color: tab == ele ? '#6EACDA' : 'white',
                  }}
                  icon={
                    ele === '0' ? <HiHome className={`h-6 w-6 ${tab == ele ? 'text-[#6EACDA]' : 'text-white'}`} /> :
                      ele === '1' ? <AssessmentIcon className={`h-6 w-6 ${tab == ele ? 'text-[#6EACDA]' : 'text-white'}`} /> :
                        ele === '2' ? <AssignmentTurnedInIcon className={`h-6 w-6 ${tab == ele ? 'text-[#6EACDA]' : 'text-white'}`} /> :
                          ele === '3' ? <CiWallet className={`h-6 w-6 ${tab == ele ? 'text-[#6EACDA]' : 'text-white'}`} /> :
                            ele === '4' ? <MdShoppingBag className={`h-6 w-6 ${tab == ele ? 'text-[#6EACDA]' : 'text-white'}`} /> :
                              ''
                  }
                />
              ))}
            </Tabs>
          </div>
          <div className='py-4'>
            <RiLogoutCircleRLine className='h-5 w-5 cursor-pointer' />
          </div>
        </div>
      </div>
      <div className='w-[100%] md:w-[94%] lg:w-[95%] xl:w-[96%] overflow-y-scroll hidden-scrollbar'>
        <div className="flex justify-between items-center p-4 bg-gray-800 sticky top-0 z-20">
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            InputProps={{
              startAdornment: <FaSearch className="mr-4 text-white" />,
              sx: { '& .MuiInputBase-root': { border: 'none', backgroundColor: '#5F6F65', borderRadius: '4px', }, '& .MuiOutlinedInput-notchedOutline': { border: 'none', }, },
            }}
            sx={{ '& .MuiInputBase-input': { color: 'white', }, '& .MuiInputBase-input::placeholder': { color: 'white', }, }}
            className="rounded-md bg-gray-700"
          />
          <div className='hidden md:block'>
            <div className='flex items-center gap-3'>
              <div className='bg-gray-700 py-1 px-1.5 rounded-full cursor-pointer'><MailOutlineIcon className='text-[#BEC6A0]' /></div>
              <div className='bg-gray-700 py-1 px-1.5 rounded-full cursor-pointer'><SettingsOutlinedIcon className='text-[#BEC6A0]' /></div>
              <div className='bg-gray-700 py-1 px-1.5 rounded-full cursor-pointer'><NotificationsNoneOutlinedIcon className='text-[#BEC6A0]' /></div>
              <Avatar src={profile} className='cursor-pointer' />
            </div>
          </div>
          <div className='block md:hidden'><MenuIcon className='cursor-pointer' onClick={() => setOpen(true)} /></div>
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
                <span className='bg-[#1a6834] px-1 pt-0.5 pb-1.5 rounded-lg cursor-pointer'><ShoppingBagIcon className='text-green-600' /></span>
                <div className='my-2 text-sm lg:text-base'>Total Delivered</div>
                <div className='flex justify-between items-center'>
                  <div className='text-lg font-bold'>70</div>
                  <div className='flex items-center text-[#b54347]'>
                    <ArrowDropDownIcon />
                    <div className='text-xs'>3%</div>
                  </div>
                </div>
              </div>
              <div className='col-span-2 md:col-span-1 bg-gray-800 rounded-md p-4'>
                <span className='bg-[#6e0303] px-1 pt-0.5 pb-1.5 rounded-lg cursor-pointer'><ShoppingBagIcon className='text-red-600' /></span>
                <div className='my-2 text-sm lg:text-base'>Total Cancelled</div>
                <div className='flex justify-between items-center'>
                  <div className='text-lg font-bold'>05</div>
                  <div className='flex items-center text-[#4BB543]'>
                    <ArrowDropUpIcon />
                    <div className='text-xs'>3%</div>
                  </div>
                </div>
              </div>
              <div className='col-span-2 md:col-span-1 bg-gray-800 rounded-md p-4'>
                <span className='bg-[#7a2761] px-1 pt-0.5 pb-1.5 rounded-lg cursor-pointer'><AttachMoneyIcon className='text-pink-600' /></span>
                <div className='my-2 text-sm lg:text-base'>Total Revenue</div>
                <div className='flex justify-between items-center'>
                  <div className='text-lg font-bold'>$75k</div>
                  <div className='flex items-center text-[#b54347]'>
                    <ArrowDropDownIcon />
                    <div className='text-xs'>3%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-6 md:col-span-2 md:ml-4 mb-4 md:mb-0'>
            <div className='bg-gray-800 rounded-md p-4 grid grid-cols-4'>
              <div className='col-span-3 flex flex-col justify-between'>
                <div className='my-2 text-sm lg:text-base'>Net Profit</div>
                <div className='text-lg font-bold'>$ 7564.25</div>
              </div>
              <div className='col-span-1 flex flex-col justify-center items-center'>
                <CircularProgressbar value={percentage} text={`${percentage}%`} className='max-h-[60px]' />
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
          <div className='col-span-6 md:col-span-4 bg-gray-800 pt-4 pr-4 md:pr-8 rounded-md'>
            <div className='flex justify-between items-center pb-4'>
              <div className='text-xl font-medium pl-4'>Activity</div>
              <div className="w-28 relative">
                <select
                  value={type}
                  onChange={handleChangeType}
                  className="w-full h-8 px-3 py-1 text-xs bg-gray-600 text-white border border-slate-600 rounded-full outline-none appearance-none pr-8 cursor-pointer"
                >
                  <option value={10}>Weekly</option>
                  <option value={20}>Monthly</option>
                  <option value={30}>Yearly</option>
                </select>
                <ArrowDropDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer" />
              </div>
            </div>
            <div className="w-full h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="x" />
                  <YAxis />
                  <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                  <Bar dataKey="y" fill="#6EACDA" barSize={30} shape={<OvalBar />} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className='col-span-6 md:col-span-2 bg-gray-800 rounded-md md:ml-4 mt-4 md:mt-0 p-4 flex flex-col justify-evenly gap-4'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <div className='bg-[#6e0303] pt-1 pb-1.5 px-2 rounded-full cursor-pointer'><GpsFixedIcon className='text-red-400' fontSize='small' /></div>
                <div className='cursor-pointer'>Goals</div>
              </div>
              <div><KeyboardArrowRightIcon className='p-1 bg-slate-500 rounded-full cursor-pointer' /></div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <div className='bg-[#03346E] pt-1 pb-1.5 px-2 rounded-full cursor-pointer'><LunchDiningIcon className='text-blue-600' fontSize='small' /></div>
                <div className='cursor-pointer'>Popular Dishes</div>
              </div>
              <div><KeyboardArrowRightIcon className='p-1 bg-slate-500 rounded-full cursor-pointer' /></div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <div className='bg-[#1e5b86] pt-1 pb-1.5 px-2 rounded-full cursor-pointer'><RestaurantMenuIcon className='text-[#6EACDA]' fontSize='small' /></div>
                <div className='cursor-pointer'>Menus</div>
              </div>
              <div><KeyboardArrowRightIcon className='p-1 bg-slate-500 rounded-full cursor-pointer' /></div>
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
                {orders?.map((each, index) => {
                  return <tr key={index}>
                    <td className='flex items-center gap-1 md:gap-3 pt-3'><Avatar sx={{ height: '24px', width: '24px' }} />{each?.name}</td>
                    <td>{each?.orderNumber}</td>
                    <td>{each?.amount}</td>
                    <td><span className={`${each?.status === 'Delivered' ? 'bg-[#4BB543]' : 'bg-red-600'} rounded-full py-0.5 px-2`}>{each?.status}</span></td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
          <div className='col-span-6 md:col-span-2 bg-gray-800 rounded-md md:ml-4 mt-4 px-4 pb-4 text-xs md:text-sm max-h-[400px] overflow-y-scroll hidden-scrollbar'>
            <div className='sticky top-0 bg-gray-800 p-2 z-10'>
              <Typography variant="h6">Customer's Feedback</Typography>
            </div>
            <div className="w-full">
              {customerFeedback?.map((each, index) => {
                return (
                  <div key={index} className='py-2 border-b border-slate-700'>
                    <div className='flex items-center gap-1 md:gap-3'><Avatar sx={{ height: '24px', width: '24px' }} />{each?.name}</div>
                    <Rating
                      name="simple-controlled"
                      value={each?.rating}
                      onChange={(event, newValue) => { handleRating(index, newValue) }}
                      className='py-2' sx={{ '& .MuiRating-iconEmpty': { color: 'white', }, fontSize: '20px' }}
                    />
                    <div className='text-xs font-light text-slate-300'>{each?.comments}</div>
                  </div>
                )
              })}
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
                  color: tab == ele ? '#6EACDA' : 'white',
                }}
                icon={
                  ele === '0' ? <HiHome className={`h-6 w-6 ${tab == ele ? 'text-[#6EACDA]' : 'text-white'}`} /> :
                    ele === '1' ? <AssessmentIcon className={`h-6 w-6 ${tab == ele ? 'text-[#6EACDA]' : 'text-white'}`} /> :
                      ele === '2' ? <AssignmentTurnedInIcon className={`h-6 w-6 ${tab == ele ? 'text-[#6EACDA]' : 'text-white'}`} /> :
                        ele === '3' ? <CiWallet className={`h-6 w-6 ${tab == ele ? 'text-[#6EACDA]' : 'text-white'}`} /> :
                          ele === '4' ? <MdShoppingBag className={`h-6 w-6 ${tab == ele ? 'text-[#6EACDA]' : 'text-white'}`} /> :
                            ''
                }
              />
            ))}
          </Tabs>
        </div>
      </div>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)} sx={{ width: '100%', '& .MuiDrawer-paper': { width: '100%', height: '100%', bgcolor: 'background.paper' } }}>
        <div className='block md:hidden p-4 bg-gray-800 text-white' style={{ height: '100%', width: '100%' }}>
          <div className='flex justify-end cursor-pointer'><CloseIcon onClick={() => setOpen(false)} /></div>
          <div className='flex flex-col gap-3'>
            <div className='flex justify-start items-center gap-3'><Avatar src={profile} className='cursor-pointer' /> My Account</div>
            <div className='flex justify-start items-center gap-3'><div className='bg-gray-700 py-1 px-1.5 rounded-full cursor-pointer'><MailOutlineIcon className='text-[#BEC6A0]' /></div>Message</div>
            <div className='flex justify-start items-center gap-3'><div className='bg-gray-700 py-1 px-1.5 rounded-full cursor-pointer'><SettingsOutlinedIcon className='text-[#BEC6A0]' /></div> Settings</div>
            <div className='flex justify-start items-center gap-3'><div className='bg-gray-700 py-1 px-1.5 rounded-full cursor-pointer'><NotificationsNoneOutlinedIcon className='text-[#BEC6A0]' /></div>Notifications</div>
            <div className='flex justify-start items-center gap-3'><div className='bg-gray-700 p-1.5 rounded-full cursor-pointer'><RiLogoutCircleRLine className='text-[#BEC6A0] h-6 w-6' /></div>Logout</div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Dashboard;
