import { Button } from "@mui/material";
import Main from "@/components/log";
import App from "@/components/app";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return <div className="w-full h-full">
    <Header/>
    <App/>
    <Footer/>
    <Button> </Button>
  </div>
}

