import { useScrollFadeIn } from "hooks/useScrollFadeIn";

const Contacts = () => {
  const animatedItem = useScrollFadeIn("up", 1, 0);

  return (
    <div>
      {/* <div style={{ height: "400px", background: "red" }}></div>
      <div style={{ height: "400px", background: "blue" }}></div>
      <div style={{ height: "200px", background: "green" }}></div> */}
      <h1 {...animatedItem}>Contacts</h1>
      {/* <div style={{ height: "400px", background: "red" }}></div>
      <div style={{ height: "400px", background: "blue" }}></div>
      <div style={{ height: "200px", background: "green" }}></div> */}
      <span>Consequat interdum varius sit amet mattis vulputate enim.</span>
      <div />
    </div>
  );
};

export default Contacts;
