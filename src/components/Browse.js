import React from "react";
function Browse() {
  useEffect(() => {
    fetch()
    return () => {
      cleanup
    };
  }, [input]);
  return (
    <>
      <div>Browse</div>
    </>
  );
}
export default Browse;
