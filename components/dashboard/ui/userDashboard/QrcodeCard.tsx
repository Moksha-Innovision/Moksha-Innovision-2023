import QRCode from "react-qr-code";
import { AiOutlineWarning, AiFillInfoCircle } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
type Props = {
  value: "string";
};

const Qrcodecard = (props: Props) => {
  const { value } = props;
  return (
    <div className="grid min-h-[80vh] place-items-center ">
      <Tilt
        glareEnable
        glareColor="rgba(200,200,200,0.2)"
        glarePosition="all"
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        className="flex max-w-[500px]   flex-col gap-5 rounded border border-saffron-400 p-8 drop-shadow-lowGlow backdrop-blur-sm"
      >
        <div className="">
          <QRCode value={value} className="h-full w-full rounded-sm" />
        </div>

        <div className="flex w-full flex-col flex-wrap items-center">
          <h2 className="font-koulen text-2xl text-saffron-400">Unique Id</h2>
          <span className="text-center font-bold">{value}</span>
        </div>
        <span className="flex items-center gap-2 italic text-gray-400">
          <AiFillInfoCircle className="text-2xl font-bold text-blue-300" />
          Scanned During Entry
        </span>
        <span className="flex items-center gap-2 italic text-gray-400">
          <AiOutlineWarning className="text-2xl font-bold text-red-500" />
          Only Valid for First Scan
        </span>
      </Tilt>
    </div>
  );
};

export default Qrcodecard;
