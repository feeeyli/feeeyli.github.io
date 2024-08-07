import { useState } from "react";
import { ReactReader as ReactReaderRoot } from "react-reader";

export function ReactRender() {
  const [location, setLocation] = useState<string | number>(0);

  return (
    <ReactReaderRoot
      url="/alice.epub"
      location={location}
      locationChanged={(epubcfi: string) => setLocation(epubcfi)}
    />
  );
}
