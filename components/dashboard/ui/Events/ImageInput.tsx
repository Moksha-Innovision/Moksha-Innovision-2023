import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRef, useState } from "react";
import Spinner from "../../../Loaders/Spinner";
import FormInput from "../Forms/FormInput";

const ImageInput = (props: any) => {
  const supabase = useSupabaseClient();
  const [isLoading, setIsLoading] = useState("none");
  const previewImage = useRef<any>();
  const [imgEr, setImgEr] = useState("");
  //const [poaterPath, setPosterPath] = useState<any>("");
  const handleUpload = async (e: any) => {
    let preview = document.getElementById("preview");
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      setIsLoading("image");
      if (file.size > 4100000) {
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
            previewImage.current.src = window.URL.createObjectURL(file);
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
          required={props.mode === "create"}
          disable={!props.dis}
          onChange={handleUpload}
          labelColor="black"
          label={props.label}
          sublabel={props.sublabel}
          type="file"
          accept=".svg,.png,.jpg,.jpeg"
          max="4MB"
          id={props.id}
          name={props.name}
        />
        <span className="relative">
          {imgEr && <div className="text-red-900">{imgEr}</div>}
        </span>
        <div
          className={`preview aspect-[${props.w}/${props.h}] max-w-[300px] `}
        >
          <img
            id="preview"
            ref={previewImage}
            src={props.mode === "edit" ? props.image : ""}
          />
        </div>
      </div>
      <span className="relative">
        {" "}
        {isLoading === "image" ? <Spinner /> : "Create New Event"}
      </span>
    </div>
  );
};

export default ImageInput;
