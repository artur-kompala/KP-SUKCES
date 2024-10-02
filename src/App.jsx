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
    <Header></Header>
    <BrowserRouter>
          <Routes>
            <Route path="admin" element={<ProtectedRoute><AdminPanel/></ProtectedRoute>}/>
            <Route path="news" element={<News />} />
            <Route path="zawodnik" element={<Gallery role="zawodnik"/>} />
            <Route path="trener" element={<Gallery role="trener"/>} />
            <Route path="stary" element={<Gallery role="stary"/>} />
            <Route path="skladka" element={<Contribution/>} />
            <Route path="zarzad" element={<Management/>} />
            <Route path="sklep" element={<Shop/>} />
            <Route path="zdjecia" element={<Images/>} />
            <Route path="treningi" element={<Training/>} />
            <Route path="dopobrania" element={<Download/>} />
            <Route path="login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
    <Footer></Footer>
    </QueryClientProvider>
    </>
    
    
  );
};

export default App;

