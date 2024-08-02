import { Typography, TextField, Avatar } from '@mui/material';
import { FaSearch, FaUser } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import OvalBar from '../ovalBar';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
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
  return (
    <div className="h-screen w-full bg-gray-900 text-white overflow-y-hidden flex">
      <div className='hidden md:block w-[4%] bg-gray-800'></div>
      <div className='w-[100%] md:w-[96%]'>
        <div className="flex justify-between p-4 bg-gray-800">
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
          <div className='flex items-center gap-3'>
          <div className='bg-gray-700 py-1 px-1.5 rounded-full'><MailOutlineIcon className='text-[#BEC6A0]'/></div>
          <div className='bg-gray-700 py-1 px-1.5 rounded-full'><SettingsOutlinedIcon className='text-[#BEC6A0]'/></div>
          <div className='bg-gray-700 py-1 px-1.5 rounded-full'><NotificationsNoneOutlinedIcon className='text-[#BEC6A0]'/></div>
          <Avatar/>
          </div>
        </div>
        <div className='grid grid-cols-6 m-4'>
          <div className='col-span-6 pb-4 text-2xl font-medium'>Dashboard</div>
          <div className='col-span-6 md:col-span-4 bg-gray-800 pt-4 pr-8 rounded-sm'>
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
          <div className='col-span-6 md:col-span-2'></div>
          <div className='col-span-6 md:col-span-4 bg-gray-800 mt-4 p-4 rounded-sm'>
            <Typography variant="h6">Recent Orders</Typography>
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
                  <td className='flex gap-3'><Avatar sx={{ height: '24px', width: '24px' }} />John Doe</td>
                  <td>1234</td>
                  <td>$100</td>
                  <td><span className='bg-[#4BB543] rounded-full py-0.5 px-2'>Delivered</span></td>
                </tr>
                <div className='h-3'></div>
                <tr>
                  <td className='flex gap-3'><Avatar sx={{ height: '24px', width: '24px' }} />John Doe</td>
                  <td>1234</td>
                  <td>$100</td>
                  <td><span className='bg-[#4BB543] rounded-full py-0.5 px-2'>Delivered</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
