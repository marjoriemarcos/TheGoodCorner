import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import App from './App.tsx';
import './css/app.css';
import AdCreatForm from './pages/AdCreatForm.tsx';
import HomePage from './pages/HomePage.tsx';
import AdPage from './pages/AdPage.tsx';
import AdSearch from './pages/AdSearch.tsx';
import AdEditForm from './pages/AdEditForm.tsx';
import { client } from './libs/api.ts';
import TagCreatForm from './pages/TagCreatForm.tsx';


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/about",
				element: <p>About</p>,
			},
			{
				path: "/ads/:adId",
				element: <AdPage />,
			},
			{
				path: "/categories/:categoryId",
				element: <AdSearch />,
			},
			{
				path: "/tags/new",
				element: <TagCreatForm />,
			},
			{
				path: "/ads/new",
				element: <AdCreatForm />,
			},
			{
				path: "/ads/edit/:adId",
				element: <AdEditForm />,
			},
		],
	},
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
	 <ApolloProvider client={client}>
    	<RouterProvider router={router} />  
	</ApolloProvider>
  </StrictMode>,
)
