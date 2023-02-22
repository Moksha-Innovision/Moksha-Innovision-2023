import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  href: string;
  className?: string;
  imgScale?: number;
  children: string;
  underlineclassName?: string;
};

const NavLink = (props: Props) => {
  const { href, className, imgScale, children, underlineclassName } = props;
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`link uppercasez relative  ${
        router.asPath === href
          ? "flex  w-fit min-w-[80px] flex-col items-center justify-center text-center text-3xl"
          : "text-xl"
      } ${className}`}
    >
      {children}
      {router.asPath === href && (
        <Image
          src="https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests//underline.svg"
          width={100}
          height={20}
          alt={"underlien "}
          className={` ${underlineclassName} scale-${imgScale || "150"} w-full`}
        />
      )}
    </Link>
  );
};

export default NavLink;
