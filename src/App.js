import React, { Suspense, useEffect ,useState} from 'react';
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
import UserContext from './utils/UserContext.js';
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

	//auth code written

	const [userInfo,setUserInfo] =useState();

	//auth code api
	useEffect(()=>{
		const data={
			name:"Abhijeet"
		}
		setUserInfo(data.name);
	},[]);
	

	return(
		<UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
		<div className="app">
			<Header/>
			<Outlet/>

		</div>
		</UserContext.Provider>
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
	
]

);


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);