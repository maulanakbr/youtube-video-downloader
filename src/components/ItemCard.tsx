import { useRef, useState } from "react";
import { ResultsProps } from "../modules/interface";
import { useNavigate, NavigateFunction } from "react-router-dom";
import Button from "./Button";
import { BsArrowLeft } from "react-icons/bs";

const ItemCard = ({ item }: ResultsProps) => {
  const [options, setOptions] = useState<string | undefined>(undefined);
  const selectRef = useRef<HTMLSelectElement>(null);

  const navigate: NavigateFunction = useNavigate();

  const millisToMinutesAndSeconds = (millis: string) => {
    const minutes: number = Math.floor(parseInt(millis) / 60000);

    const seconds: string = ((parseInt(millis) % 60000) / 1000).toFixed(0);

    return minutes + ":" + (parseInt(seconds) < 10 ? "0" : "") + seconds;
  };

  const letterToUppercase = (letter: string): string => {
    if (letter.includes("720")) {
      return letter.slice(0, 2).toUpperCase();
    }

    return letter.charAt(0).toUpperCase() + letter.slice(1);
  };

  const handleOnChange = (): void => {
    if (typeof selectRef.current?.value !== "undefined") {
      setOptions(selectRef.current?.value);
    }
  };

  const handleHref = (args: string | undefined): string => {
    if (args === "720p") {
      return item?.formats[0].url;
    } else if (args === "360p") {
      return item?.formats[1].url;
    } else {
      return item?.formats[2].url;
    }
  };

  const handleBacktoHome = (): void => {
    navigate("/");
  };

  return (
    <section className="item-content">
      <div className="arrow-icon" onClick={handleBacktoHome}>
        <BsArrowLeft size={31} />
      </div>
      <img src={item?.thumbnail[1]?.url} />
      <div className="item-tagline">
        <h1>{item?.title}</h1>
        <span>
          {millisToMinutesAndSeconds(item?.formats[0].approxDurationMs)}
        </span>

        {/* Dropdown Menu */}
        <label htmlFor="quality-select">Choose a resolution:</label>
        <select
          className="dropdown-menu"
          name="quality"
          id="quality-select"
          ref={selectRef}
          onChange={handleOnChange}
        >
          <option value="" hidden>
            Please choose an option
          </option>
          {item?.formats.map((format, index: number) => (
            <option value={format.qualityLabel} key={index}>
              {letterToUppercase(format.quality)} {format.qualityLabel}
            </option>
          ))}
        </select>
        {/* End of Dropdown Menu */}

        <Button cssClass="item-button">
          <a href={handleHref(options)} target="_blank" download>
            Download
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ItemCard;
