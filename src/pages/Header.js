import Link from "next/link";
import { useState } from "react";
const Header = () => {
  const [mobmenu, setmobmenu] = useState(false);
  return (
    <>
      <div className="containerheader">
        <div className="cheaderchild1">
          <h1>ADEEL</h1>
        </div>
        <div className={mobmenu ? "mobmenu" : "cheaderchild2"}>
          <div className="mobmenu">
            <ul>
              <Link href="/">
                <li>
                  <i
                    className="fa-solid fa-user"
                    style={{ color: "lightblue" }}
                  ></i>
                  <span className="list1">Home</span>
                </li>
              </Link>
              <hr style={{ color: "gray", marginLeft: "-2rem" }} />
              <Link href="#About">
                <li>
                  <i
                    className="fa-solid fa-address-card"
                    style={{ color: "lightblue" }}
                  ></i>
                  <span className="list2">About</span>
                </li>
              </Link>
              <hr style={{ color: "gray", marginLeft: "-2rem" }} />
              <Link href="#Services">
                <li>
                  <i
                    className="fa-solid fa-id-badge"
                    style={{ color: "lightblue" }}
                  ></i>
                  <span className="list3">Services</span>
                </li>
              </Link>
              <hr style={{ color: "gray", marginLeft: "-2rem" }} />
              <Link href="#Projects">
                <li>
                  <i
                    className="fa-sharp fa-solid fa-display"
                    style={{ color: "lightblue" }}
                  ></i>
                  <span className="list4">Projects</span>
                </li>
              </Link>
              <hr style={{ color: "gray", marginLeft: "-2rem" }} />{" "}
              <Link href="#Contact">
                <li>
                  <i
                    className="fa-solid fa-id-badge"
                    style={{ color: "lightblue" }}
                  ></i>
                  <span className="list3">Contact</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="cheaderchild3">
          <button className="btn">
            <Link
              href={
                "https://drive.google.com/file/d/16fu8ukL8i6zE6dxmlgmPPxFfXSbs_hcZ/view?usp=sharing"
              }
            >
              Download CV
            </Link>
          </button>
        </div>
        <button
          className="hamburger"
          onClick={() => {
            setmobmenu(!mobmenu);
          }}
        >
          <i className="fa-solid fa-bars fa-2xl"></i>
        </button>
      </div>
    </>
  );
};

export default Header;
