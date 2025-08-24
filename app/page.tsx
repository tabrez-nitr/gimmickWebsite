import PageOne from "../components/PageOne.tsx";
import PageTwo from "@/components/PageTwo.tsx";
import PageThree from "@/components/PageThree.tsx";
import Page4 from "../components/Page4.tsx";
import Page5 from "@/components/page5.tsx";

export default function Home() {
  return (
    <div className="">
        <PageOne/>
        <PageTwo/>
        <PageThree/>
        <Page4/>
        <Page5/>
    </div>
  );
}
