import Button from "../components/Button";
import { GoBell, GoCloud, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click!!");
  };

  return (
    <div>
      <div>
        <Button
          secondary
          rounded
          outline
          className="mb-5"
          onClick={handleClick}
        >
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <GoCloud />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}
export default ButtonPage;
