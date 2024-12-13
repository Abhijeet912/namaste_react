import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter , RouterProvider ,Outlet} from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Grocery from './components/Grocery';
import Shimmer from './components/Shimmer';
/*Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -reastaurant Container
 *      -Res card
 * 			-cuisines
 *          -img
 * 			-Name of res,Star rating ,del time
 * Footer
 * -Copyright
 * Links
 * - Address
 * - Contact
 *
 * 
 */








	
  




const Applayout = () => {
	return(
		<div className="app">
			<Header/>
			<Outlet/>

		</div>

	);
};

const appRouter=createBrowserRouter([
	{
		path: "/",
		element:<Applayout/>,
		errorElement:<Error/>,
		children:[
			{
				path:"/",
				element:<Suspense fallback={<Shimmer/>}><Body/></Suspense>,
			},
			{
				path:"/about",
				element:<About/>,
			},
			{
				path:"/contact",
				element:<Contact/>,
			},
			{
				path:"/restaurants/:resId",
				element:<RestaurantMenu/>,
			},
			{
				path:"/grocery",
				element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,
			}

		]
	}
	
]);


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);