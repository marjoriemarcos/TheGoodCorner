import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecentAds from './RecentAds.tsx';
import AdDetail from './pages/AdDetail.tsx';
import App from './App.tsx';
import './css/index.css';
import './css/app.css';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <RecentAds />,
			},
			{
				path: "/about",
				element: <p>About</p>,
			},
			{
				path: "/ads/:adId",
				element: <AdDetail />,
			},
		],
	},
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />  
  </StrictMode>,
)
