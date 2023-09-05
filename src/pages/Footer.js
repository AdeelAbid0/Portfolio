import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="containerf">
        <div className="cfchild1">
          <div className="cfsubchild1">
            <h1>ADEEL</h1>
          </div>
          <div className="cfsubchild2">
            <p>
              © Copyright 2023. All Rights Reserved. <br />
              Designed by{" "}
              <span
                style={{
                  color: "red",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                Adeel Abid
              </span>
              .
            </p>
          </div>
          <div className="cfsubchild3">
            <Link
              href={
                "https://www.facebook.com/profile.php?id=100007783546775&mibextid=ZbWKwL"
              }
            >
              <button className="iconbtn" style={{ color: "#38529A" }}>
                <i class="fa-brands fa-square-facebook fa-beat fa-2xl"></i>
              </button>
            </Link>
            <Link href={"https://whatsapp.com/dl/"}>
              <button className="iconbtn" style={{ color: "#00920F" }}>
                <i class="fa-brands fa-square-whatsapp fa-beat fa-2xl"></i>
              </button>
            </Link>
            <Link
              href={
                "https://instagram.com/adeelabid84?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
              }
            >
              <button className="iconbtn" style={{ color: "#AC3282" }}>
                <i class="fa-brands fa-square-instagram fa-beat fa-2xl"></i>
              </button>
            </Link>
            <Link href={"https://www.linkedin.com/in/adeel-abid-730834280"}>
              <button className="iconbtn" style={{ color: "#0073B1" }}>
                <i class="fa-brands fa-linkedin fa-beat fa-2xl"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
