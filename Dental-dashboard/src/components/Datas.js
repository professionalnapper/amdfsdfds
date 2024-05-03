import { HiOutlineHome, HiOutlineMail, HiOutlineUsers } from 'react-icons/hi';
import {
  TbCalendar,
  TbChartHistogram,
  TbFile,
  TbFileInvoice,
  TbLockAccess,
  TbUsers,
} from 'react-icons/tb';
import { FaRegCalendarAlt, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import {
  RiFileList3Line,
  RiHeartLine,
  RiImageLine,
  RiLockPasswordLine,
  RiMoneyDollarCircleLine,
  RiStethoscopeLine,
  RiUserHeartLine,
  RiUserLine,
} from 'react-icons/ri';
import {
  MdListAlt,
  MdOutlineAttachMoney,
  MdOutlineInventory2,
  MdOutlineTextsms,
} from 'react-icons/md';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiCalendar, BiUserPlus } from 'react-icons/bi';

export const MenuDatas = [
  {
    title: 'Dashboard',
    path: '/',
    icon: HiOutlineHome,
  },
  {
    title: 'Patients',
    path: '/patients',
    icon: TbUsers,
  },
  {
    title: 'Doctors',
    path: '/doctors',
    icon: RiUserHeartLine,
  },

  {
    title: 'Appointments',
    path: '/appointments',
    icon: FaRegCalendarAlt,
  },
  {
    title: 'Payments',
    path: '/payments',
    icon: MdListAlt,
  },
  {
    title: 'Invoices',
    path: '/invoices',
    icon: TbFileInvoice,
  },
  {
    title: 'Services',
    path: '/services',
    icon: MdOutlineInventory2,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: AiOutlineSetting,
  },
];
export const memberData = [
  {
    id: 1,
    title: 'Wonwoo Jeon',
    image: '/images/drWonwoo.jpg',
    admin: false,
    email: 'wonwoo.jeon@gmail.com',
    phone: '+63 945 375 0939',
    age: 27,
    gender: 'Male',
    blood: 'A',
    totalAppointments: 5,
    date: '20 Aug 2021',
  },
  {
    id: 2,
    title: 'Mingyu Kim',
    image: '/images/drMingyu.jpg',
    admin: false,
    email: 'mingyu.kim@gmail.com',
    phone: '+63 922 521 1982',
    age: 26,
    gender: 'Male',
    blood: 'B',
    totalAppointments: 3,
    date: '22 Nov 2023',
  },
  {
    id: 3,
    title: 'Jeonghan Yoon',
    image: '/images/drJeonghan.jpg',
    admin: false,
    phone: '+63 943 449 5506',
    email: 'hannihae@gmail.com',
    age: 29,
    gender: 'Male',
    blood: 'B',
    totalAppointments: 26,
    date: '12 Jan 2020',
  },
  {
    id: 4,
    title: 'Soonyoung Kwon',
    image: '/images/drHoshi.jpg',
    admin: true,
    phone: '+63 947 254 0966',
    email: 'horanghae.ror@gmail.com',
    age: 28,
    gender: 'Male',
    blood: 'B',
    totalAppointments: 17,
    date: '07 Feb 2001',
  },
  {
    id: 5,
    title: 'Boo Seungkwan',
    image: '/images/memberBoo.jpg',
    admin: false,
    phone: '+63 943 456 7892',
    email: 'boo.boojeju@gmail.com',
    age: 27,
    gender: 'Male',
    blood: 'B+',
    totalAppointments: 9,
    date: '16 Jan 2019',
  },
  {
    id: 6,
    title: 'Seungcheol Choi',
    image: '/images/memberCheol.jpg',
    admin: false,
    phone: '+63 905 335 8348',
    email: 'cheolito.choi@gmail.com',
    age: 29,
    gender: 'Male',
    blood: 'AB',
    totalAppointments: 34,
    date: '8 Aug 2020',
  },
  {
    id: 7,
    title: 'Seokmin Lee',
    image: '/images/memberDK.jpg',
    admin: false,
    phone: '+63 945 798 9939',
    email: 'dokyeomie.lee@gmail.com',
    age: 27,
    gender: 'Male',
    blood: 'RH-',
    totalAppointments: 12,
    date: '18 Feb 2023',
  },
  {
    id: 8,
    title: 'Joshua Hong',
    image: '/images/memberJoshua.jpg',
    admin: false,
    phone: '+63 942 065 3241',
    email: 'hong_joshua30@gmail.com',
    age: 28,
    gender: 'Male',
    blood: 'A',
    totalAppointments: 70,
    date: '30 Dec 2018',
  },
{
  id: 9,
  title: 'Moon Junhui',
  image: '/images/memberJun.jpg',
  admin: false,
  phone: '+63 923 447 3985',
  email: 'junhuiwen@gmail.com',
  age: 28,
  gender: 'Male',
  blood: 'B',
  totalAppointments: 70,
  date: '10 Jun 2018',
},
{
id: 10,
title: 'Seo Myungho',
image: '/images/memberThe8.jpeg',
admin: false,
phone: '+63 921 647 4453',
email: 'the8isme.palranghae@gmail.com',
age: 27,
gender: 'Male',
blood: 'B',
totalAppointments: 70,
date: '10 Jul 2018',
},
];

export const sortsDatas = {
  status: [
    {
      id: 1,
      name: 'Status...',
    },
    {
      id: 2,
      name: 'Pending',
    },
    {
      id: 3,
      name: 'Approved',
    },
    {
      id: 4,
      name: 'Cancelled',
    },
  ],
  method: [
    {
      id: 1,
      name: 'Payment method',
    },
    {
      id: 2,
      name: 'Cash',
    },
    {
      id: 3,
      name: 'PhilHealth',
    },
    {
      id: 4,
      name: 'MaxiCare',
    },
    {
      id: 5,
      name: 'ValuCare',
    },
  ],
  currency: [
    {
      id: 1,
      name: 'Select Currency',
    },
    {
      id: 2,
      name: 'PHP (Philippine Peso)',
    },
    {
      id: 3,
      name: 'USD (US Dollar)',
    },
    {
      id: 4,
      name: 'TSH (Tanzanian Shilling)',
    },
  ],
  instractions: [
    {
      id: 1,
      name: 'Select Instraction',
    },
    {
      id: 2,
      name: 'After Meal',
    },
    {
      id: 3,
      name: 'Before Meal',
    },
  ],
  measure: [
    {
      id: 1,
      name: 'Select Measure',
    },
    {
      id: 2,
      name: 'mg',
    },
    {
      id: 3,
      name: 'ml',
    },
    {
      id: 4,
      name: 'gm',
    },
    {
      id: 5,
      name: 'kg',
    },
    {
      id: 6,
      name: 'lb',
    },
    {
      id: 7,
      name: 'tbsp',
    },
    {
      id: 8,
      name: 'tablet',
    },
    {
      id: 9,
      name: 'capsule',
    },
  ],
  stocks: [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Available',
    },
    {
      id: 3,
      name: 'Out of Stock',
    },
  ],
  service: [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'Enabled',
    },
    {
      id: 3,
      name: 'Disabled',
    },
  ],
  title: [
    {
      id: 1,
      name: 'Dr.',
    },
    {
      id: 2,
      name: 'Mr.',
    },
    {
      id: 3,
      name: 'Mrs.',
    },
    {
      id: 4,
      name: 'Ms.',
    },
  ],
  filterPatient: [
    {
      id: 1,
      name: 'Sort by...',
    },
    {
      id: 2,
      name: 'Newest Patients',
    },
    {
      id: 3,
      name: 'Oldest Patients',
    },
  ],
  genderFilter: [
    {
      id: 1,
      name: 'Gender...',
    },
    {
      id: 2,
      name: 'Female',
    },
    {
      id: 3,
      name: 'Male',
    },
  ],
  bloodTypeFilter: [
    {
      id: 1,
      name: 'Blood Type...',
    },
    {
      id: 2,
      name: 'A+',
    },
    {
      id: 3,
      name: 'A-',
    },
    {
      id: 4,
      name: 'B+',
    },
    {
      id: 5,
      name: 'B-',
    },
    {
      id: 6,
      name: 'AB+',
    },
    {
      id: 7,
      name: 'AB-',
    },
    {
      id: 8,
      name: 'O+',
    },
    {
      id: 9,
      name: 'O-',
    },
  ],
  dosage: [
    {
      id: 1,
      name: 'Morning (M)',
      value: 'morning',
    },
    {
      id: 2,
      name: 'Afternoon (A)',
      value: 'afternoon',
    },
    {
      id: 3,
      name: 'Evening (E)',
      value: 'evening',
    },
  ],
};
export const servicesData = [
  {
    id: 1,
    name: 'Select service.. ',
  },
  {
    id: 2,
    name: 'Laboratory Testing - Blood Typing',
    price: 90,
    date: '23 June, 2021',
    status: true,
  },
  {
    id: 3,
    name: 'Laboratory Testing - CBC',
    price: 175,
    date: '18 February, 2021',
    status: true,
  },
  {
    id: 4,
    name: 'Laboratory Testing - Creatinine',
    price: 145,
    date: '2 March, 2021',
    status: true,
  },
  {
    id: 5,
    name: 'Laboratory Testing - Cholesterol',
    price: 200,
    date: '4 August, 2021',
    status: true,
  },
  {
    id: 6,
    name: 'Vaccinations - Influenza',
    price: 1200,
    date: '12 Jan, 2022',
    status: true,
  },
  {
    id: 7,
    name: 'Vaccinations - HPV',
    price: 3800,
    date: '12 Jan, 2022',
    status: true,
  },
  {
    id: 8,
    name: 'Vaccinations - Tetanus, Diptheria',
    price: 2500,
    date: '12 Jan, 2022',
    status: true,
  },
  {
    id: 9,
    name: 'Vaccinations - Chickenpox',
    price: 3200,
    date: '12 Jan, 2022',
    status: true,
  },
  {
    id: 10,
    name: 'Annual Physicals',
    price: 1000,
    date: '11 April, 2023',
    status: false,
  },
  {
    id: 11,
    name: 'Cardiology - Consultation',
    price: 800,
    date: '10 Agst, 2021',
    status: true,
  },
  {
    id: 12,
    name: 'Dermatology - Consultation',
    price: 600,
    date: '23 June, 2021',
    status: false,
  },
  {
    id: 13,
    name: 'ENT - Consultation',
    price: 600,
    date: '09 Dec, 2023',
    status: false,
  },
  {
    id: 14,
    name: 'General Medicine - Consultation',
    price: 500,
    date: '05 Feb, 2019',
    status: true,
  },
  {
    id: 15,
    name: 'Gynecology & Obstetrics - Consultation',
    price: 700,
    date: '16 Nov, 2022',
    status: true,
  },
  {
    id: 16,
    name: 'Internal Medicine - Consultation',
    price: 600,
    date: '02 Jun, 2022',
    status: false,
  },
  {
    id: 17,
    name: 'Neurology - Consultation',
    price: 1200,
    date: '23 June, 2021',
    status: true,
  },
  {
    id: 18,
    name: 'Pediatrics - Consultation',
    price: 500,
    date: '23 June, 2021',
    status: true,
  },
];

export const invoicesData = [
  {
    id: 206719,
    to: memberData[5],
    total: 6070,
    createdDate: '12/06/2021',
    dueDate: '16/06/2021',
    items: [
      {
        id: 1,
        name: servicesData[0].name,
        price: 500,
        description:
          'Root Canal Treatment with X-Ray and Consultation is included in this package',
      },
      {
        id: 2,
        name: servicesData[1].name,
        price: 300,
        description: 'Teeth Whitening Treatment',
      },
      {
        id: 3,
        name: servicesData[2].name,
        price: 260,
        description: 'Dental Implants Treatment',
      },
      {
        id: 4,
        name: servicesData[3].name,
        price: 190000,
        description: 'Dental Crowns Treatment',
      },
      {
        id: 5,
        name: servicesData[4].name,
        price: 15000,
        description: 'Dental Bridges Treatment',
      },
    ],
  },
  {
    id: 198772,
    to: memberData[6],
    total: 5000,
    createdDate: '10/02/2023',
    dueDate: '14/02/2023',
    items: [
      {
        id: 1,
        name: servicesData[3].name,
        price: 190000,
        description: 'Dental Crowns Treatment',
      },
      {
        id: 2,
        name: servicesData[4].name,
        price: 15000,
        description: 'Dental Bridges Treatment',
      },
      {
        id: 3,
        name: servicesData[8].name,
        price: 20000,
        description: 'Dentures Treatment',
      },
      {
        id: 4,
        name: servicesData[3].name,
        price: 190000,
        description: 'Dental Crowns Treatment',
      },
    ],
  },
  {
    id: 456789,
    to: memberData[7],
    total: 10000,
    createdDate: '09/01/2023',
    dueDate: '13/01/2023',
    items: [
      {
        id: 1,
        name: servicesData[5].name,
        price: 5000,
        description: 'Basic Check Up',
      },
      {
        id: 2,
        name: servicesData[6].name,
        price: 16000,
        description: 'Dental Braces Treatment',
      },
      {
        id: 3,
        name: servicesData[7].name,
        price: 10000,
        description: 'Dental Sealants Treatment',
      },
      {
        id: 4,
        name: servicesData[8].name,
        price: 20000,
        description: 'Dentures Treatment',
      },
    ],
  },
  {
    id: 876543,
    to: memberData[4],
    total: 19000,
    createdDate: '08/01/2023',
    dueDate: '12/01/2023',
    items: [
      {
        id: 1,
        name: servicesData[5].name,
        price: 5000,
        description: 'Basic Check Up',
      },
      {
        id: 2,
        name: servicesData[6].name,
        price: 16000,
        description: 'Dental Braces Treatment',
      },
      {
        id: 3,
        name: servicesData[7].name,
        price: 10000,
        description: 'Dental Sealants Treatment',
      },
      {
        id: 4,
        name: servicesData[8].name,
        price: 20000,
        description: 'Dentures Treatment',
      },
      {
        id: 5,
        name: servicesData[3].name,
        price: 190000,
        description: 'Dental Crowns Treatment',
      },
      {
        id: 6,
        name: servicesData[4].name,
        price: 15000,
        description: 'Dental Bridges Treatment',
      },
    ],
  },
];

export const appointmentsData = [
  {
    id: 1,
    time: '2 hrs later',
    user: memberData[4],
    from: '10:00 AM',
    to: '12:00 PM',
    hours: 2,
    status: 'Pending',
    doctor: memberData[0],
    date: 'Jun 12, 2021',
  },
  {
    id: 2,
    time: '1 hrs ago',
    user: memberData[5],
    from: '13:00 Pm',
    to: '18:00 PM',
    hours: 5,
    status: 'Cancel',
    doctor: memberData[1],
    date: 'Feb 24, 2021',
  },
  {
    id: 3,
    time: '2 hrs ago',
    user: memberData[6],
    from: '10:00 AM',
    to: '12:00 PM',
    hours: 2,
    status: 'Approved',
    doctor: memberData[2],
    date: 'Mar 12, 2023',
  },
  {
    id: 4,
    time: '3 hrs later',
    user: memberData[7],
    from: '06:00 AM',
    to: '08:00 AM',
    hours: 3,
    status: 'Pending',
    doctor: memberData[3],
    date: 'Apr 06, 2023',
  },
  {
    id: 5,
    time: '4 hrs ago',
    user: memberData[3],
    from: '10:00 AM',
    to: '12:00 PM',
    hours: 7,
    status: 'Approved',
    doctor: memberData[0],
    date: 'May 18, 2023',
  },
];

export const transactionData = [
  {
    id: 1,
    user: memberData[4],
    date: 'Mar 12, 2022',
    amount: 1000,
    status: 'Paid',
    method: 'Cash',
    doctor: memberData[0],
  },
  {
    id: 2,
    user: memberData[5],
    date: 'August 12, 2023',
    amount: 2300,
    status: 'Paid',
    method: 'ValuCare',
    doctor: memberData[1],
  },
  {
    id: 3,
    user: memberData[6],
    date: 'Jan 06, 2024',
    amount: 1200,
    status: 'Pending',
    method: 'MaxiCare',
    doctor: memberData[2],
  },
  {
    id: 4,
    user: memberData[7],
    date: 'Feb 18, 2025',
    amount: 1400,
    status: 'Cancel',
    method: 'PhilHealth',
    doctor: memberData[3],
  },
  {
    id: 5,
    user: memberData[8],
    date: 'Mar 12, 2026',
    amount: 1230,
    status: 'Pending',
    method: 'Cash',
    doctor: memberData[0],
  },
  {
    id: 6,
    user: memberData[9],
    date: 'Mar 12, 2026',
    amount: 1230,
    status: 'Pending',
    method: 'PhilHealth',
    doctor: memberData[0],
  },
];

export const dashboardCards = [
  {
    id: 1,
    title: 'Active Doctors',
    icon: TbUsers,
    value: 10,
    percent: 73.9,
    color: ['bg-subMain', 'text-subMain', '#66B5A3'],
    datas: [20, 12, 15, 15, 14, 17, 5, 9, 10, 20, 20, 8],
  },
  {
    id: 2,
    title: 'Appointments',
    icon: TbCalendar,
    value: 56,
    percent: 35.06,
    color: ['bg-yellow-500', 'text-yellow-500', '#F9C851'],
    datas: [20, 50, 45, 15, 63, 49, 60, 41, 50, 20, 40, 60],
  },
  {
    id: 3,
    title: 'Operations',
    icon: TbFile,
    value: 14,
    percent: 65.06,
    color: ['bg-green-500', 'text-green-500', '#34C759'],
    datas: [30, 20, 15, 15, 19, 17, 20, 21, 10, 20, 30, 16],
  },
  {
    id: 4,
    title: 'Total Earnings',
    icon: MdOutlineAttachMoney,
    value: 45900,
    percent: 55.06,
    color: ['bg-red-500', 'text-red-500', '#FF3B30'],
    datas: [20, 50, 75, 15, 108, 97, 70, 41, 50, 20, 90, 60],
  },
];

export const shareData = [
  {
    id: 1,
    icon: HiOutlineMail,
    title: 'Email',
    description: 'Send to patient email address',
  },
  {
    id: 2,
    icon: MdOutlineTextsms,
    title: 'SMS',
    description: 'Send to patient phone number',
  },
  {
    id: 3,
    icon: FaWhatsapp,
    title: 'WhatsApp',
    description: 'Send to patient WhatsApp account',
  },
  {
    id: 4,
    icon: FaTelegramPlane,
    title: 'Telegram',
    description: 'Send to patient Telegram account',
  },
];

export const medicineData = [
  {
    id: 1,
    name: 'Paracetamol',
    measure: 'Tablet',
    stock: 400,
    price: 1000,
    status: 'Available',
    instraction: 'After meal',
  },
  {
    id: 2,
    name: 'Amoxicillin',
    measure: 'Capsule',
    stock: 200,
    price: 2300,
    status: 'Available',
    instraction: 'After meal',
  },
  {
    id: 3,
    name: 'Ibuprofen',
    measure: 'mm',
    stock: 0,
    price: 5000,
    status: 'Out of stock',
    instraction: 'Before meal',
  },
  {
    id: 4,
    name: 'Aspirin',
    measure: 'cm',
    stock: 370,
    price: 3500,
    status: 'Available',
    instraction: 'After meal',
  },
  {
    id: 5,
    name: 'Diazepam',
    measure: 'gm',
    stock: 0,
    price: 12000,
    status: 'Out of stock',
    instraction: 'Before meal',
  },
  {
    id: 6,
    name: 'Lorazepam',
    measure: 'mg',
    stock: 123,
    price: 15500,
    status: 'Available',
    instraction: 'Before meal',
  },
  {
    id: 7,
    name: 'Codeine',
    measure: 'ml',
    stock: 1,
    price: 30000,
    status: 'Available',
    instraction: 'After meal',
  },
  {
    id: 8,
    name: 'Tramadol',
    measure: 'lb',
    stock: 0,
    price: 200,
    status: 'Out of stock',
    instraction: 'Before meal',
  },
];

export const patientTab = [
  {
    id: 1,
    title: 'Medical Records',
    icon: TbChartHistogram,
  },
  {
    id: 2,
    title: 'Appointments',
    icon: BiCalendar,
  },
  {
    id: 3,
    title: 'Invoices',
    icon: RiFileList3Line,
  },
  {
    id: 4,
    title: 'Payments',
    icon: RiMoneyDollarCircleLine,
  },
  {
    id: 5,
    title: 'Images',
    icon: RiImageLine,
  },
  {
    id: 6,
    title: 'Dental Chart',
    icon: RiStethoscopeLine,
  },
  {
    id: 7,
    title: 'Patient Information',
    icon: RiUserLine,
  },
  {
    id: 8,
    title: 'Health Information',
    icon: RiHeartLine,
  },
];

export const doctorTab = [
  {
    id: 1,
    title: 'Personal Information',
    icon: RiUserLine,
  },
  {
    id: 2,
    title: 'Patients',
    icon: BiUserPlus,
  },
  {
    id: 3,
    title: 'Appointments',
    icon: BiCalendar,
  },
  {
    id: 4,
    title: 'Payments',
    icon: RiMoneyDollarCircleLine,
  },
  {
    id: 5,
    title: 'Invoices',
    icon: RiFileList3Line,
  },
  {
    id: 6,
    title: 'Access Control',
    icon: TbLockAccess,
  },
  {
    id: 7,
    title: 'Change Password',
    icon: RiLockPasswordLine,
  },
];

export const medicalRecodData = [
  {
    id: 1,
    date: '13, Jan 2021',
    amount: 150000,
    data: [
      {
        id: 1,
        title: 'Complaint',
        value: 'Bleeding Gums, Toothache, bad breath',
      },
      {
        id: 2,
        title: 'Diagnosis',
        value: 'Gingivitis, Caries, Periodontitis',
      },
      {
        id: 3,
        title: 'Treatment',
        value: 'Filling, Post&Core, Implant, Extraction',
      },
      {
        id: 4,
        title: 'Prescription',
        value: 'Paracetamol, Amoxicillin, Ibuprofen, Aspirin',
      },
    ],
    attachments: [
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
    ],
    vitalSigns: [
      'Blood Pressure: 120/80 mmHg',
      'Pulse Rate: 80 bpm',
      'Respiratory Rate: 16 bpm',
      'Temperature: 36.5 °C',
      'Oxygen Saturation: 98%',
    ],
  },
  {
    id: 2,
    date: '10, Feb 2022',
    amount: 300000,
    data: [
      {
        id: 1,
        title: 'Complaint',
        value: 'Food impaction, Replacing Missing Teeth, bad breath',
      },
      {
        id: 2,
        title: 'Diagnosis',
        value: 'Caries, Periodontitis, Malocclusion',
      },
      {
        id: 3,
        title: 'Treatment',
        value: 'Superficial Scaling, Root Planing, Extraction',
      },
      {
        id: 4,
        title: 'Prescription',
        value: 'Benzocaine, Lidocaine, Mepivacaine, Prilocaine',
      },
    ],
    attachments: [
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
    ],
    vitalSigns: [
      'Weight: 60 kg',
      'Height: 170 cm',
      'BMI: 20.76 kg/m2',
      'Blood Pressure: 120/80 mmHg',
    ],
  },
  {
    id: 3,
    date: '20, Mar 2022',
    amount: 500000,
    data: [
      {
        id: 1,
        title: 'Complaint',
        value: 'Broken Teeth, Bridge, Cap in the front teeth',
      },
      {
        id: 2,
        title: 'Diagnosis',
        value: 'Unspecified Gingival Recession, Unspecified Caries',
      },
      {
        id: 3,
        title: 'Treatment',
        value: 'Consultation, Scaling, Root Planing, Extraction',
      },
      {
        id: 4,
        title: 'Prescription',
        value: 'Gingival Gel, Chlorhexidine, Fluoride, Calcium',
      },
    ],
    attachments: [
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
    ],
    vitalSigns: [
      'Temperature: 36.5 °C',
      'Oxygen Saturation: 98%',
      'Blood Pressure: 120/80 mmHg',
      'Pulse Rate: 80 bpm',
      'Respiratory Rate: 16 bpm',
    ],
  },
  {
    id: 4,
    date: '10, Apr 2022',
    amount: 760000,
    data: [
      {
        id: 1,
        title: 'Complaint',
        value: 'Toothache, bad breath, Bleeding Gums',
      },
      {
        id: 2,
        title: 'Diagnosis',
        value: 'Necrotizing Ulcerative Gingivitis, Periodontitis',
      },
      {
        id: 3,
        title: 'Treatment',
        value: 'Crowns, Bridges, Veneers, Implants',
      },
      {
        id: 4,
        title: 'Prescription',
        value: 'Tramadol, Codeine, Morphine, Oxycodone',
      },
    ],
    attachments: [
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
      'https://placehold.it/300x300',
    ],
    vitalSigns: [
      'Sugar Level: 120 mg/dL',
      'Oxygen Saturation: 98%',
      'Cholesterol: 200 mg/dL',
      'Blood Pressure: 120/80 mmHg',
    ],
  },
];

export const doctorsData = [
  {
    id: 1,
    user: memberData[0],
    title: 'Dr.',
  },
  {
    id: 2,
    user: memberData[1],
    title: 'Dr.',
  },
  {
    id: 3,
    user: memberData[2],
    title: 'Dr.',
  },
  {
    id: 4,
    user: memberData[3],
    title: 'Dr.',
  },
];

export const receptionsData = [
  {
    id: 1,
    user: memberData[6],
    title: 'Dr.',
  },
  {
    id: 2,
    user: memberData[7],
    title: 'Dr.',
  },
  {
    id: 3,
    user: memberData[5],
    title: 'Dr.',
  },
  {
    id: 4,
    user: memberData[4],
    title: 'Dr.',
  },
  {
    id: 5,
    user: memberData[2],
    title: 'Dr.',
  },
  {
    id: 6,
    user: memberData[1],
    title: 'Dr.',
  },
];
