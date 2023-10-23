import { CgDatabase, CgBrowser } from 'react-icons/cg'
import { TfiSearch } from 'react-icons/tfi'
import {
  HiOutlineBuildingStorefront,
  HiOutlineLockClosed,
  HiOutlineMail,
  HiOutlinePhotograph,
} from 'react-icons/hi'
import { SiGodaddy } from 'react-icons/si'
import { GoArrowRight } from 'react-icons/go'
import { BiLogoWordpress, BiTransfer } from 'react-icons/bi'
import { LiaUserCircleSolid } from 'react-icons/lia'
import { PiHandCoinsDuotone } from 'react-icons/pi'
import { IoEarthOutline, IoCopyOutline } from 'react-icons/io'
import { RiAuctionLine, RiMoneyDollarBoxLine } from 'react-icons/ri'
import { LiaListUlSolid } from 'react-icons/lia'
import { IoCopyOutline } from 'react-icons/io'
import { AiOutlineSecurityScan } from 'react-icons/ai'
import { BsLightningCharge } from 'react-icons/bs'

export const domainName = [
  {
    id: 1,
    icon: <TfiSearch />,
    text: 'Search for Domain Names',
  },
  {
    id: 2,
    icon: <RiAuctionLine />,
    text: 'Auctions for Domain Names',
  },
  {
    id: 3,
    icon: <BiTransfer />,
    text: 'Transfer Domain Names',
  },
  {
    id: 4,
    icon: <RiMoneyDollarBoxLine />,
    text: 'Appraise Domain Name Value',
  },
  {
    id: 5,
    icon: <LiaListUlSolid />,
    text: 'Browse Domain Name Options',
  },
  {
    id: 6,
    icon: <MdOutlineTouchApp />,
    text: 'Generate Domain & Business Names',
  },
  {
    id: 7,
    icon: <LiaUserCircleSolid />,
    text: 'Domain Broker Service',
  },
  {
    id: 8,
    icon: <PiHandCoinsDuotone />,
    text: 'Investing in Domain Names',
  },
  {
    id: 9,
    icon: <IoEarthOutline />,
    text: 'Find a Domain Owner (WHOIS)',
  },
]

export const hosting = [
  {
    id: 1,
    magaMenu: 'hosting',
    links: [
      {
        icon: <CgDatabase />,
        text: 'Web Hosting',
      },
      {
        icon: <CgDatabase />,
        text: 'Web Hosting Plus',
      },
      {
        icon: <CgBrowser />,
        text: ' GoDaddy Website Builder',
      },
      {
        icon: <HiOutlineBuildingStorefront />,
        text: ' GoDaddy Online Store Builder',
      },
      {
        icon: <SiGodaddy />,
        text: 'Tools for Web Professionals',
      },
      {
        icon: <GoArrowRight />,
        text: 'All Hosting Options',
      },
    ],
  },
  {
    id: 2,
    magaMenu: 'WORDPRESS SOLUTIONS',
    links: [
      {
        icon: <BiLogoWordpress />,
        text: 'WordPress Hosting',
      },
      {
        icon: <BiLogoWordpress />,
        text: 'WordPress eCommerce Hosting',
      },
    ],
  },
  {
    id: 3,
    magaMenu: 'SERVERS',
    links: [
      {
        icon: <CgDatabase />,
        text: 'VPS Hosting',
      },
      {
        icon: <LiaUserCircleSolid />,
        text: 'VPS - Fully Managed',
      },
      {
        icon: <CgDatabase />,
        text: 'Dedicated Servers',
      },
      {
        icon: <LiaUserCircleSolid />,
        text: 'Dedicated Server - Fully Managed',
      },
    ],
  },
]

export const sslCrtficates = [
  {
    id: 1,
    megaLink: 'SSL CERTIFICATES',
    links: [
      {
        id: 1,
        icon: <HiOutlineLockClosed />,
        text: 'DV SSL Certificate',
      },
      {
        id: 2,
        icon: <HiOutlineLockClosed />,
        text: 'EV SSL Certificate',
      },
      {
        id: 3,
        icon: <HiOutlineLockClosed />,
        text: 'SAN SSL Certificate',
      },
      {
        id: 4,
        icon: <HiOutlineLockClosed />,
        text: 'Wildcard SSL Certificate',
      },
      {
        id: 5,
        icon: <HiOutlineLockClosed />,
        text: 'Managed SSL Certificate',
      },
      {
        id: 6,
        icon: <GoArrowRight />,
        text: 'All SSL Certificate Options',
      },
    ],
  },
  {
    id: 2,
    megaLink: 'WEB SECURITY',
    links: [
      {
        id: 1,
        icon: <IoCopyOutline />,
        text: 'Backups',
      },
      {
        id: 2,
        icon: <AiOutlineSecurityScan />,
        text: 'Complete Website Security',
      },
      {
        id: 3,
        icon: <GoArrowRight />,
        text: 'All Web Security Options',
      },
    ],
  },
]
// EMAIL AND MARKETING TOOLS
export const emailTools = [
  {
    id: 1,
    icon: <HiOutlineMail />,
    text: 'Email and Microsoft 365',
  },
  {
    id: 2,
    icon: <HiOutlinePhotograph />,
    text: 'Content & Photo Creator',
  },
  {
    id: 3,
    icon: <BsLightningCharge />,
    text: 'Free Logo Maker',
  },
  {
    id: 4,
    icon: <HiOutlineLockClosed />,
    text: 'Digital Marketing Suite',
  },
  {
    id: 5,
    icon: <GoArrowRight />,
    text: 'All Marketing Options',
  },
]
