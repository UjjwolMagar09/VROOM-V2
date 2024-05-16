import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DistributorRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo && userInfo.isDistributor ? <Outlet /> : <Navigate to='/login' replace />;
};
export default DistributorRoute;