const Skeleton = ({
  type = "text",
  height = "20px",
  width = "100%",
  count = 1,
  style = {},
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`skeleton skeleton-${type} animate-pulse`}
          style={{ height, width, marginBottom: "10px", ...style }}
        ></div>
      ))}
    </>
  );
};

export default Skeleton;
