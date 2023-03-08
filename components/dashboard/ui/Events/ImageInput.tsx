import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState } from "react";
import Spinner from "../../../Loaders/Spinner";
import FormInput from "../Forms/FormInput";

const ImageInput = (props: any) => {
  const supabase = useSupabaseClient();
  const [isLoading, setIsLoading] = useState("none");
  const [imgEr, setImgEr] = useState("");
  //const [poaterPath, setPosterPath] = useState<any>("");
  const handleUpload = async (e: any) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      setIsLoading("image");
      if (file.size > 4000000) {
        setImgEr("Size should be upto 4 MB");
        if (e.target.value) e.target.value = null;
        setIsLoading("none");
        props.path("");
        return;
      } else {
        let img = new Image();

        img.src = window.URL.createObjectURL(file);

        img.onload = async function () {
          let width = img.naturalWidth,
            height = img.naturalHeight;

          window.URL.revokeObjectURL(img.src);
          const ratio = width / height;
          if (ratio > props.ratio + 0.1 || ratio < props.ratio - 0.1) {
            console.log(ratio);
            setImgEr(`Aspect Ratio of ${props.w}:${props.h} needed`);
            e.target.value = null;
            props.path("");
            setIsLoading("none");
          } else {
            setImgEr("");
            try {
              const file = e.target.files[0];
              const { data, error } = await supabase.storage
                .from(`${props.bucket}`)
                .upload(props.eventId + file.name, file, {
                  cacheControl: "3600",
                  upsert: true,
                });

              setIsLoading("none");
              if (error) {
                console.log(error);
              } else {
                props.path(
                  `https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/${props.bucket}/${data.path}`
                );
              }
            } catch (err) {
              console.log("error");
            }
          }
        };
      }
    } else {
      props.path("");
    }
  };

  return (
    <div className="flex items-baseline ">
      <div className="flex flex-col ">
        <FormInput
          required
          disable={!props.dis}
          onChange={handleUpload}
          labelColor="black"
          label={props.label}
          type="file"
          accept=".svg"
          max="3MB"
          id={props.id}
          name={props.name}
        />
        <span className="relative">
          {imgEr && <div className="text-red-900">{imgEr}</div>}
        </span>
      </div>

      <span className="relative">
        {" "}
        {isLoading === "image" ? <Spinner /> : "Create New Event"}
        {!props.dis && (
          <div className="overlay absolute mt-3 rounded-lg bg-[rgba(141,36,36,0.8)] p-2 text-center font-bold">
            Fill Form First
          </div>
        )}
      </span>
    </div>
  );
};

export default ImageInput;
