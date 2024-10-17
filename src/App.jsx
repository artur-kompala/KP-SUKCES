import Contribution from "./ui/Contribution";
import Footer from "./ui/Footer";
import Gallery from "./ui/Gallery"
import Header from "./ui/Header"
import Management from "./ui/Management";
import News from "./ui/News"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./ui/Shop";
import Images from "./ui/Images";
import Training from "./ui/Training";
import Download from "./ui/Download";
import Login from "./ui/Login";
import AdminPanel from "./ui/AdminPanel"
import ProtectedRoute from "./ui/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "react-query";
import PageNotFound from "./ui/PageNotFound";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

const App = () => {
  

  return (
    <>
     <QueryClientProvider client={queryClient}>
    
    <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path="admin" element={<ProtectedRoute><AdminPanel/></ProtectedRoute>}/>
            <Route exact path="news" element={<News />} />
            <Route exact path="zawodnik" element={<Gallery role="Zawodnik"/>} />
            <Route exact path="trener" element={<Gallery role="Trener"/>} />
            <Route exact path="starzy" element={<Gallery role="Stary-zawodnik"/>} />
            <Route exact path="skladka" element={<Contribution/>} />
            <Route exact path="zarzad" element={<Management/>} />
            <Route exact path="sklep" element={<Shop/>} />
            <Route exact path="zdjecia" element={<Images/>} />
            <Route exact path="treningi" element={<Training/>} />
            <Route exact path="dopobrania" element={<Download/>} />
            <Route exact path="login" element={<Login/>} />
            <Route path="/" element={<PageNotFound />} />
          </Routes>
          <Footer></Footer>
          <Toaster />
        </BrowserRouter>
    
    </QueryClientProvider>
    </>
    
    
  );
};

export default App;

