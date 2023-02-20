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
      className={`link relative uppercase  ${
        router.asPath === href
          ? "w-fit min-w-[100px] text-center text-3xl "
          : "text-xl"
      } ${className}`}
    >
      {children}
      {router.asPath === href && (
        <Image
          src="/underline.svg"
          width={100}
          height={20}
          alt={"underlien "}
          className={`absolute left-[2px] -bottom-2  ${underlineclassName} scale-${
            imgScale || "150"
          } w-full`}
        />
      )}
    </Link>
  );
};

export default NavLink;
