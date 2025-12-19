import Link from "next/link";

import { FaLinkedin} from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-5 border-t-2 border-gray">
      <div className="flex items-center justify-center mt-5">
        <Link href="https://github.com/omarabdo1414" target="_blank">
          <div className="cursor-pointer w-15 h-15">
            <FaGithub size={25} />
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/omar-abd-el-aleem/" target="_blank"> 
          <div className="cursor-pointer w-15 h-15">
            <FaLinkedin size={25} color="#0a66c2"/>
          </div>
        </Link>
        <Link href="https://www.facebook.com/omar.abdo.3532507" target="_blank">
          <div className="cursor-pointer w-15 h-15">
            <FaFacebook 
              size={25}
              className="text-[#1877f2] dark:text-[#1877f2] hover:opacity-80 transition"
            />
          </div>
        </Link>
      </div>
      <div>
        <p>@2026 Omar Abd EL-Aleem. All rights reserved </p>
      </div>
    </footer>
  )
}

export default Footer;