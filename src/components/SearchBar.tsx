import { useRef, useState, FormEvent } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "./Button";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<boolean>(false);
  const navigate: NavigateFunction = useNavigate();

  const parseYoutubeVideoId = (
    baseUrl: string | undefined
  ): string | undefined => {
    const regExp: RegExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

    const match: RegExpMatchArray | null | undefined = baseUrl?.match(regExp);

    if (match && match[2].length === 11) {
      return match[2];
    }

    return undefined;
  };

  const handleSubmit = (e: FormEvent): void | string => {
    e.preventDefault();

    let params: string | undefined = parseYoutubeVideoId(
      inputRef.current?.value
    );

    let catchError: boolean = false;

    if (inputRef.current?.value === "" || params === undefined) {
      catchError = true;

      inputRef.current!.value = "";
    }

    if (catchError !== true) {
      navigate(`/results/${params}`);
    }

    setError(catchError);
  };

  return (
    <section className="search">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your URL" ref={inputRef} />
        <Button cssClass="button-search-icon">
          <AiOutlineSearch className="icon" />
        </Button>
        {error && (
          <p className="error-notification">Please enter a valid URL</p>
        )}
      </form>
    </section>
  );
};

export default SearchBar;
