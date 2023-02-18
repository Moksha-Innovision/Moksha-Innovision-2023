import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  href: string;
  name: string;
  iconSrc: string;
  setSidebarOpen: (a: any) => any;
};

const SidebarChip = (props: Props) => {
  const router = useRouter();

  const { href, name, iconSrc, setSidebarOpen } = props;

  const ACTIVE_STYLE = "bg-gray-900 invert";

  return (
    <Link
      href={href}
      className={`flex items-center justify-center space-x-3 rounded-md py-2 font-medium text-white hover:bg-gray-900 hover:invert ${
        router.asPath === href ? ACTIVE_STYLE : ""
      }`}
      onClick={() => setSidebarOpen(false)}
    >
      <span className="scale-100 text-white">
        {<Image src={iconSrc} width={25} height={25} alt={name + " icon"} />}
      </span>
      <span className="x overflow-x-hidden overflow-y-hidden  group-hover:h-[24px] group-hover:w-auto sm:h-0 sm:w-0 ">
        {name}
      </span>
    </Link>
  );
};

export default SidebarChip;
