import { useUser } from "../services/useUser";

function ProtectedAdmin({ children }) {

    const { isLoading, isAuthenticated } = useUser();

    
  
    if (isLoading)
      return (
        <FullPage>
          <Spinner />
        </FullPage>
      );
  
    if (isAuthenticated) return children;
  }
  
  export default ProtectedAdmin;