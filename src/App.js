import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter } from 'react-router-dom';

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
			<Body/>


		</div>

	);
};

const appRouter=createBrowserRouter([
	{
		path: "/",
		element:<Applayout/>
	},
	{
		path:"/about",
		element:<About/>,
	},
])


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);