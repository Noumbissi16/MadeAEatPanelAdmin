import axios from "axios";
import { useState, useEffect, useMemo, useRef } from "react";
import { Modal, Table } from "../../components";
import { TableColumns } from "../../types";
import s from "../../styles/Utilisateur/Utilisateur.module.css";

const Utilisateur = () => {
  // Custom component to render images
  const [isOpen, setisOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const imgRef = useRef<HTMLImageElement>(null);

  function handleOpenModal(event: React.MouseEvent<HTMLImageElement>) {
    // const x = event.clientX; // X-coordinate of the click event
    // const y = event.clientY; // Y-coordinate of the click event
    if (imgRef.current) {
      setisOpen(true);
      const x = event.clientX;
      const y = event.clientY;
      // console.log(`Clicked at coordinates: (${x}, ${y})`);

      setPosition({ x, y });
    }
  }

  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    if (window.innerHeight - position.y < 200) {
      let offset = window.innerHeight - position.y;

      // console.log(window.innerHeight - offset);
      console.log(offset);

      // console.log(position.y - window.innerHeight);

      const val = position.y - 184 + scrollAmount;

      console.log(val);
      // setPosition({ x: position.x, y: val });

      setPosition((prevState) => ({
        ...prevState,
        y: val,
      }));
    }
  }, []);

  const handleScroll = () => {
    const scrollAmount = window.scrollY;
    setScrollAmount(scrollAmount);
  };
  // const modalCoordinates = { x: position.x, y: position.y + scrollAmount };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Images: React.FC<{ source: string }> = ({ source }) => {
    return (
      <img
        ref={imgRef}
        src={source}
        className={s.img}
        onClick={handleOpenModal}
      />
    );
  };

  // image: medium: "https://static.tvmaze.com/uploads/images/medium_portrait/455/1138518.jpg";

  /* 
    - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
    - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
  */

  const columns: TableColumns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "TV Show",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "show.name",
          },
          {
            Header: "Type",
            accessor: "show.type",
          },
        ],
      },
      {
        // Second group - Details
        Header: "Details",
        // Second group columns
        columns: [
          {
            Header: "Language",
            accessor: "show.language",
          },
          {
            Header: "Genre(s)",
            accessor: "show.genres",
          },
          {
            Header: "Runtime",
            accessor: "show.runtime",
          },
          {
            Header: "Status",
            accessor: "show.status",
          },
          {
            Header: "Image",
            accessor: "show.image.medium",
            // Cell method will provide the cell value; we pass it to render a custom component
            Cell: ({ cell: { value } }: { cell: { value: string } }) => (
              <Images source={value} />
            ),
          },
        ],
      },
    ],
    []
  );
  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
    })();
  }, []);

  // console.log(window.innerHeight - position.y);
  // console.log(position.y);

  return (
    <div>
      <Table columns={columns} data={data} />
      <Modal
        isOpen={isOpen}
        hasCloseBtn
        onClose={() => setisOpen(false)}
        position={position}
      />
    </div>
  );
};

export default Utilisateur;
